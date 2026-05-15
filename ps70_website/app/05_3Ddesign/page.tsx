export default function ThreeDDesign05() {
    return (
        <div className="textcontainer">
            <p className="margin"> </p>
            <h3>Week 5: 3D Design &amp; Printing</h3>
            <h4>Assignment: Model and 3D print something</h4>
            <p>
                For this week, I decided to model a duck floatie trinket dish. Due to the inset area in the middle of the dish, the rounded edges, and the attached head and beak that hang out, it would not have been able to make this object using the techniques we have learned before. 
                Since I wanted the duck's beak to be the proper orange color, I modeled it separately from the rest of the body so that I could print it in a different color and insert it in afterwards.
                I also learned how to model with forms in Fusion a little bit for the wings, which are a nonstandard organitc shape that you wouldn't be able to produce in Fusion otherwise. Here's the model I initially made in Fusion:
            </p>
            <img src="./05_3Ddesign/duck_dish_cad.png" alt="Duck floatie model" style={{width:"50%"}}></img>
            <p className="margin"> </p>
            <a id="btn" href="./05_3Ddesign/download/Duck Floatie Trinket Dish.f3d" download>Download Duck Floatie Trinket Dish Model</a>
            <p className="margin"></p>
            <p>
                I then printed the body of the duck in black PLA and the beak in orange PLA. There were surprisingly few supports in the entire design, and with a bit of sanding the two parts fit together afterwards very tightly. 
                I had also intially modeled two eyes for the duck in order to insert different colored pieces for the eyes, but when I actually printed the pieces they were too small and stuck to the brim that I had to use. So I just ended up not filling in the eyes, which I still think looks pretty neat. 
                Here's the final printed product from different angles!    
        </p>
        <p className="margin"></p>
        <img src="./05_3Ddesign/duck_dish_angle.jpg" alt="Final printed duck dish 45 degree view" style={{width:"50%"}}></img>
        <img src="./05_3Ddesign/duck_dish_front.jpg" alt="Final printed duck dish front view" style={{width:"50%"}}></img>
        <img src="./05_3Ddesign/duck_dish_side.jpg" alt="Final printed duck dish side view" style={{width:"50%"}}></img>

        <p className="margin"> </p>
        <h4>Assignment: 3d Scan Something</h4>
        <p>
            For this part of the assignment, I 3D scanned the CS50 Debugging Duck (ddb) using the scanner in class and the photobooth. Here are the files from that experience:
        </p>
        <a id="btn" href="./05_3Ddesign/download/alice_duck_model_pc.ply" download>Download Duck Scan Point Cloud</a>
        <a id="btn" href="./05_3Ddesign/download/alice_duck_model_mesh.ply" download>Download Duck Scan Mesh</a>

        <p className="margin"> </p>
        <h4>Assignment: Model of Final Project</h4>
        <p>
            Here's a model of my final project that I made in Fusion. It focuses mostly on the mechanism that moves the bird up and down. Instead of the oval cam I used for my kinematic machine, I decided to use a crankshaft instead in order to minimize the space used for the same amount of vertical displacement.
            It also has other nice additional features, such as press-fit sides, a lifter to put the motor in the right spot, and holes for dowel attachment points to hold the bird eventually. 
        </p>
        <img src="./05_3Ddesign/final_project_model.png" alt="Final project model" style={{width:"50%"}}></img>
        <a id="btn" href="./05_3Ddesign/download/Slider Gear.f3d" download>Download Final Project Model</a>
        </div>

        
        
    )
}