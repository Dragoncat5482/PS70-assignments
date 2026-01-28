export default function About() {
    return (
        <div className="textcontainer">
        <h3>About Me</h3>
        <p className="margin"> </p>
        <div className="center-row">
            <img src="./Alice_Liu_NY_Picture (2).JPG" alt="A picture of Alice Liu" style={{width: 300, height: 'auto'}} />
            <p id="aboutme">
            Hi! I'm Alice Liu, a senior at Harvard studying Computer Science and Statistics. I live in Dunster House (go Meece!). I like making things, and have gone through many crafting phases like polymer clay, knitting/crocheting, etc. Currently trying to learn how to sew as my next project. Also have an unhealthy duck obsession.
            </p>
        </div>
        <br /><br />
        <p>Ducky ducky ducky</p>
        <br /><br />
        <img src="./cute ducky!.jpg" alt="cute ducky" style={{width: 400, height: 'auto'}} />
        <br /><br />
        Maybe even add a video?
        <br /><br />
        <video width={640} height={480} controls>
            <source src="temp-video.mp4" type="video/mp4" />
        </video>
        </div>

    )
}