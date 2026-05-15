int inputPins[] = {10, 7, 3, 1}; // yellow pins
int outputPins[] = {9, 6, 2, 0}; // blue pins
bool isIgnoring[] = {false, false, false, false};
unsigned long beginIgnoreTime[] = {0, 0, 0, 0};
const int numDirections = 4;

volatile bool isFlapping = false;
volatile bool hasFlappedDueToWish = false;
volatile bool isDelaying = false;
volatile bool isSignaling = false;

const unsigned long delayTime = 1500; // amount of time for bird to delay before flapping after being triggered (if not already flapping)
const unsigned long flapTime = 12000; // amount of time to flap for after being triggered, in ms
const unsigned long ignoreTime = 8000; // amount of time to ignore signals
const unsigned long signalTime = 2000; // amount of time to try sending a signal
volatile unsigned long currentFlapTime = 0; // variable for keeping track of how much additive time this bird should flap for
const int flapSpeed = 150;

volatile unsigned long beginFlapTime = 0; // use unsigned long to avoid millis() rollover problems
volatile unsigned long beginDelayTime = 0;
volatile unsigned long beginSignalTime = 0;

const int sensorPin = 8;  // pin for hall effect sensor
const int motorPin = 5;  // pin for mofset motor controller (NOTE: 5 is PWM, others do not have this capability)
const int indicatorLed = 1;
const int updi = 11;
const int B1A = 5;
const int B1B = 4; 


// setting PWM properties
const int freq = 5000;
const int resolution = 8;

const int lowerLimit = 25;
const int upperLimit = 575;
const int restingLower = 200;
const int restingHigher = 400;

void setup() {
  pinMode(motorPin, OUTPUT);     // pin for motor
  pinMode(sensorPin, INPUT); // pin for hall effect sensor
  pinMode(updi, INPUT_PULLUP);

  for (int i = 0; i < numDirections; i++) {
    pinMode(inputPins[i], INPUT);
    pinMode(outputPins[i], OUTPUT);
  }

  // Set motor off
  analogWrite(motorPin, 0);

  // Set all signalling off
  for (int i = 0; i < numDirections; i++) {
    digitalWrite(outputPins[i], LOW);
  }

}

inline void updateTimes() {
  if (isFlapping) {
    // If currently flapping, just need to add flapping time
    currentFlapTime += flapTime;
  }
  else {
    if (isDelaying) {
      // If we are not flapping but currently delaying, we just need to add flapping time
      currentFlapTime += flapTime;
    }
    else {
      // if we are not delaying and not flapping, we need to start the delay
      beginDelayTime = millis();
      isDelaying = true;
      currentFlapTime += flapTime;
    }
  }
}

void loop() {

  // CACHE READING SO hasFlappedDueToWish doesn't instantly reset multiple times
  int sensorReading = analogRead(sensorPin);
  // Check if this bird has been triggered
  if (!hasFlappedDueToWish && (sensorReading < lowerLimit || sensorReading > upperLimit)){
    // update flap times
    hasFlappedDueToWish = true;
    updateTimes();
    
  }

  else if (hasFlappedDueToWish && sensorReading > restingLower && sensorReading < restingHigher){
    hasFlappedDueToWish = false;
  }

  // Turn off ignoring if needed for each direction
  for (int i = 0; i < numDirections; i++) {
    if (isIgnoring[i] && ((unsigned long) (millis() - beginIgnoreTime[i]) > ignoreTime)) {
      isIgnoring[i] = false;
    }
  }

  // If we are not ignoring all signals, read from each pin
  for (int i = 0; i < numDirections; i++) {
    if (!isIgnoring[i] && digitalRead(inputPins[i]) == HIGH) {
      updateTimes();
      // also begin ignoring the bird in this direction 
      beginIgnoreTime[i] = millis();
      isIgnoring[i] = true;
    }
  }


  // PROCESS DELAY
  if (isDelaying) {
    // Check if we should stop delaying
    if ((unsigned long) (millis() - beginDelayTime) > delayTime) {
      // Start flapping - set isDelaying to false and isFlapping to true
      isDelaying = false;
      isFlapping = true;
      // Set beginFlapTime
      beginFlapTime = millis();
      // begin sending signal to other birds by setting BeginSignal Time, setting isSignaling to true
      beginSignalTime = millis();
      isSignaling = true;
      // setting each output pin to high
      for (int i = 0; i < numDirections; i++) {
        digitalWrite(outputPins[i], HIGH);

        // also begin ignoring the bird in this direction 
        beginIgnoreTime[i] = millis();
        isIgnoring[i] = true;
      }
    }
    else {
      // Keep delaying
      analogWrite(motorPin, 0);
    }
  }
  

  // PROCESS FLAPPING
  if (isFlapping) {
    // Check if we should stop flapping
    if ((unsigned long) (millis() - beginFlapTime) > currentFlapTime) {
      // stop flapping
      isFlapping = false;
      analogWrite(motorPin, 0);
      // reset current flap time
      currentFlapTime = 0;
    }
    else {
      // keep flapping
      analogWrite(motorPin, flapSpeed);
    }
  }
  else {
    // If we are not flapping we are certainly stopped
    analogWrite(motorPin, 0);
  }

  // Turn off signalling if we are done
  if (isSignaling && ((unsigned long) (millis() - beginSignalTime) > signalTime)) {
    isSignaling = false;
    for (int i = 0; i < numDirections; i++) {
      digitalWrite(outputPins[i], LOW);
    }
  }


}