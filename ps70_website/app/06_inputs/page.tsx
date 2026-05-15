export default function Inputs06() {
    return (
        <div className="textcontainer">
            <p className="margin"> </p>
            <h3>Week 6: Electronic Inputs</h3>
            <h4>Assignment 1: Capactive Sensor</h4>
                <p>
                    For this assignment, I constructed a distance capacitive sensor with Will, Matthew, and Aurora in class. We used two pieces of coppoer foil connected
                    to an ESP32 Xiao and attached to a wooden block and a simple track with a ruler stuck on it as our sensor. Here a few pictures of the construction process
                     and our final sensor:
                </p>
                <p className="margin"></p>
                <img src="./06_inputs/will_construction.jpg" alt="Capacitive sensor construction - Will" style={{width:"50%"}}></img>
                <img src="./06_inputs/alice_construction.jpg" alt="Capacitive sensor construction - Alice" style={{width:"50%"}}></img>
                <p className="margin"></p>
                <img src="./06_inputs/capacitive_sensor.jpg" alt="Final capacitive sensor" style={{width:"50%"}}></img>
                <p className="margin"></p>
                <p> We then calibrated the sensor by taking measurements of the raw capacitance values at different distances and plotting them to find a function that would convert raw capacitance values to distance. 
                    We found that the relationship was not linear, and instead followed a more exponential looking decay curve before plateauing at a certain distance.
                </p>
                <img src="./06_inputs/distance_sensor_calibration.png" alt="Calibration curve for capacitive sensor" style={{width:"50%"}}></img>
                <p className="margin"></p>
                <h4>Assignment 2: [Use + Calibrate Another Sensor]</h4>
                <p>
                    For this assignment, I decided to use a hall effect sensor and try to see calibrate it with respect to distance. For calibration, we stuck a magnet on a caliper and 
                    moved it to different distances from the hall effect sensor, taking measurements of the raw sensor values at each distance. 
                    We found that the relationship between distance and raw sensor value was also non-linear, especially in the middle of the range of the sensor, before 
                    plateauing at the maximum measurable distance of around 9 mm. Here's the calibration curve we got from our measurements:
                </p>
                <img src="./06_inputs/hall_effect_sensor_calibration.png" alt="Calibration curve for hall effect sensor" style={{width:"50%"}}></img>
                <p className="margin"></p>
                <p>
                    I also used the hall effect sensor (ignore the fact that it's in a tube) to trigger an LED when a magnet was close enough to it, 
                    which was a lot of fun to see in action! Here's a video of that working:
                </p>
                <video controls style={{width:"50%"}}>
                    <source src="./06_inputs/hall_effect_sensor_test.mp4" type="video/mp4"></source>
                </video>
        </div>
                

    )
}