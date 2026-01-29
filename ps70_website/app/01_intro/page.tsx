export default function Intro01() {
    return (
        <div className="textcontainer">
            <br /><br />
            <h3>Week 1: Final Project Proposal</h3>
            <p className="margin" />
            Here are at most 3 ideas for my final project. They are in order of my interest level.
            <p className="margin" />
            <h4>Idea 1 : Kinetic Machine Dress</h4>
            <p className="margin" />
            The main idea is to take a bunch of small kinematic machines of birds and afix them to the bottom of a dress 
            (probably with the support of a hoopskirt). The kinematic machines would likely be cut in half, sincethe other wing 
            of the bird cannot flap freely when attached to the dress.
            The machines would be linked up to a motor(s) which are then linked to a simple 
            microcontroller. When power is turned on the small machines would flap along the edge of the dress.
            Different flapping patterns for different sections of the dress could be achieved by programming different commands into the 
            microcontroller. This is the idea I'm most excited about.
            <br/>
            <img style={{width: '40%'}} src="./01_intro/bird_machine.jpg" alt="Kinetic bird machine"></img>
            <img style={{width: '30%'}} src="./01_intro/hoopskirt.jpg" alt="hoopskirt"></img>

            <p className="margin" />
            <h4>Idea 2: No More "Yarn Chicken"</h4>
            <p className="margin" />
            "Yarn Chicken" is a term used in knitting communities to describe the situation where you are almost running out of yarn at the end of a project, but not quite sure
            if you'll actually run out. The idea is to create some sort of device to help keep track of yarn usage throughout a project
            so that you have a better sense of how much yarn you'll actually need to finish. Most likely, I'd do this by creating
            some sort of enclosure to hold a yarn ball, and have a scale under the enclosure. Every row (or whenever the crafter wants),
            they can hit a button to log the current weight of the yarn ball, and the microcontroller can calculate how much yarn has been used so far.
            A connected website or app could visualize the data and give estimates on how much yarn is left and whether or not the project can be finished with the current yarn.

            <p className="margin" />
            <h4>Idea 3: Custom Light Painting</h4>
            <p className="margin" />
            Light painting is a photography technique where photos are taken while moving a light source in a dark space
            while taking a long exposure photograph. The idea is to create a machine that can move a light source in a precise manner to 
            recreate a desired inputted design. This would likely use the same fundamentals as the drawing machine we build in class,
            but wield a light source instead of a pen. The machine could be enclosed in a dark box with a camera to take the long exposure photograph.
            <img style={{width: '40%'}} src="./01_intro/light_painting_drawing_animals.jpg" alt="light painting example"></img>
        </div>

    )
}