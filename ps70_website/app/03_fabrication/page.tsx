export default function Fabrication03() {
    return (
        <div className="textcontainer">
            <p className="margin"> </p>
            <h3>Week 3: Hand Tools and Fabrication</h3>
            <h4>Kinetic Sculpture</h4>
            <p>For this week, I decided to make a cute little sculpture that would have two ducks 
                bobbing up and down on top of a box. I also wanted the ducks to bob at different speeds to make them have a little personality. 
            </p>
            <p>
                To start, I learned how to make a gear in fusion manually by following <a href="https://www.youtube.com/watch?v=tqDYPaUmCSM">this tutorial</a>. Even though there was a tool in Fusion to make gears programatically (and more quickly), I wanted to try out the manual way to better understand how gears work. I successfully made a 20-tooth gear using this manual method. Then, I made a 10-tooth gear using the Fusion add in. Both are pictured below:
            </p>
            <img src="./03_fabrication/manual_gears.png" alt="manual gear" />
            <p className="margin"></p>
            <a id="btn" href="./03_fabrication/Manual Gear Test.f3z" download>Download Gear Model
                </a>
            <p>
                Even though I wouldn't ultimately use these exact gears in my final design, I wanted to test that they would would mesh together and fit on the dowels I was planning to use for the axles. So, I cut them out of cardboard and tested them, and they worked!
            </p>
            <img src="./03_fabrication/two_cardboard_gears.jpg" alt="Gears cut out of cardboard" style={{width:"50%"}}></img> 
            <img src="./03_fabrication/two_gears_in_dowels.jpg" alt="Test of cardboard gears meshing and fitting on dowel" style={{width:"50%"}}></img>
                <p className="margin"> </p>
            <p>
                For the final version, the gears had 24 and 12 teeth instead and were made with the Fusion plug-in. I also made the gears bigger in order to acommodate the oval cams I was going to use for the up and down motion of the ducks. There were three iterations of the oval cams. First, I tried 50 mm x 35 mm, which I realized was too small to create a noticeable bobbing motion, since the ducks would be moving less than a centimeter. Then I tried 80 mm x 40 mm, which created too steep of an oval and the ducks could not climb the cams properly. Finally, I used 80 mm x 60 mm cams, which created a more gradual slope and a noticeable bobbing motion. 
                I also designed a backing panel to hold the gears at an appropriate distance from each other and a quick box to hold the motor in place at the correct height, using screws. 
            </p>
            <img src="./03_fabrication/cardboard_gears_on_laser_cutter.jpg" alt="Gears on the laser cutter" style={{width:"50%"}}></img>
            <img src="./03_fabrication/motor_box_empty.jpg" alt="Empty motor box" style={{width:"50%"}}></img>
            <p className="margin"></p>
            <img src="./03_fabrication/motor_box_front.jpg" alt="Front of motor box" style={{width:"50%"}}></img>
            <img src="./03_fabrication/motor_box_back.jpg" alt="Back of motor box" style={{width:"50%"}}></img>
            <p className="margin"></p>
            <a id="btn" href="./03_fabrication/Duck Machine Gear 1.f3d" download>Download Gear 1 Design
            </a>
            <a id="btn" href="./03_fabrication/Duck Machine Gear 2.f3d" download>Download Gear 2 Design
            </a>
            <p className="margin"></p>
            <a id="btn" href="./03_fabrication/Motor Loading Gear.f3d" download>Download Motor Loading Gear Design
            </a>
            <a id="btn" href="./03_fabrication/Motor Box.f3d" download>Download Motor Box Design
            </a>
            <p className="margin"></p>
            <p>
                I then mounted the motor and gears onto the backing panel, which went very smoothly. The dowels for the gears are just held in place with a cardboard circle on the backside.
            </p>
            <img src="./03_fabrication/cardboard_gears_mounted.jpg" alt="Mounted gears" style={{width:"50%"}}></img>
            <img src="./03_fabrication/cardboard_gears_and_cams_mounted.jpg" alt="Mounted cams and gears" style={{width:"50%"}}></img>
            <img src="./03_fabrication/cardboard_gears_and_cams_back.jpg" alt="Back of cams and gears" style={{width:"50%"}}></img>
            <video controls style={{width:"50%"}}>
                <source src="./03_fabrication/cardboard_gears_spinning.mp4" type="video/mp4"></source>
            </video>
            <p className="margin"></p>
            <p>
                I then added a box around the motor and gears to hold the backing panel in place, and cut out the ducks and decorative wave elements for the top panel. The ducks were then mounted onto dowels and placed through the top of the box so that they rested on the top of the cams. I then had to add a small raft with rails component added to the bottom of the dowels in order to follow the cam more smoothly. Later, I also added a small extension to the top so that the dowels would no longer get dragged back by the cam and would follow better.
            </p>
            <img src="./03_fabrication/cardboard_full_assembly.jpg" alt="Box with gears and cams" style={{width:"50%"}}></img>
            <p className="margin"></p>
            <a id="btn" href="./03_fabrication/Backing Plate and Box.f3d" download>Download Backing Plate and Box Design
            </a>
            <a id="btn" href="./03_fabrication/Duck and Decor Parts.f3d" download>Download Duck and Decor Design
            </a>
            <video controls style={{width:"50%"}}>
                <source src="./03_fabrication/hand_turning_demo.mp4" type="video/mp4"></source>
            </video>
            <p className="margin"></p>
            <p>The model works with hand turning - however, when the motor is plugged in, it destroyed the motor loading gear's connection to the motor :( So I had to redo all of the gears in wood.</p>
            <img src="./03_fabrication/wooden_gears.jpg" alt="Wooden gears" style={{width:"50%"}}></img>
            <p className="margin"></p>
            <p>After switching to wood, the machine worked much better and the motor was able to turn the gears without any issues. The ducks bobbed up and down at different speeds, which was really fun to see! Here's the final product and video.</p>
            <img src="./03_fabrication/final_sculpture.jpg" alt="Final sculpture" style={{width:"50%"}}></img>
            <video controls style={{width:"50%"}}>
                <source src="./03_fabrication/final_sculpture_video.mp4" type="video/mp4"></source>
            </video>
        </div>

    )
}