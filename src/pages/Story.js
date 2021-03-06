import Template from "../components/Template";
import "../css/Story.css";

function Story() {
    return (
        <Template>
            <h2>Our Story</h2>
            <div id="story">
                <img
                    className="spanOne"
                    src={`${process.env.PUBLIC_URL}/images/Story/firstMet.jpg`}
                    alt=""
                />
                <p className="spanOne">
                    Brett and Brent met at Plymouth State University during
                    Brent's sophomore and Brett's freshman years, where they
                    both lived in the Mary Lyon dormitory. They began dating on
                    Brent's birthday, November 7th, in 2012 and the rest is
                    history!
                </p>
                <img
                    className="spanOne"
                    src={`${process.env.PUBLIC_URL}/images/Story/snow.jpg`}
                    alt=""
                />
                <p className="spanOne">
                    Through the years Brent and Brett have worked to always keep
                    things fun and strive to become better versions of
                    themselves together and apart.
                </p>
                <img
                    className="spanOne"
                    src={`${process.env.PUBLIC_URL}/images/Story/roadtrip.jpg`}
                    alt=""
                />
                <p className="grid-item-4">
                    They have enjoyed many adventures together. The summer of
                    2016 Brent and Brett went on a 7-week road trip across the
                    country. More recently, they have been trying to hike all 48
                    of New Hampshire's 4000 foot mountains.{" "}
                </p>
                <img
                    className="spanOne"
                    src={`${process.env.PUBLIC_URL}/images/Story/bought_a_house.jpg`}
                    alt=""
                />
                <p className="grid-item-5">
                    In June 2021 Brent and Brett bought a home together in
                    Franklin, NH. They now enjoy slowly but surely updating
                    their home, and hosting small board game nights and cook
                    outs.
                </p>
                <img
                    className="spanOne"
                    src={`${process.env.PUBLIC_URL}/images/Story/proposal2cropped.jpg`}
                    alt=""
                />
                <p className="grid-item-6">
                    On December 4th of this past year, while hiking Piper
                    Mountain, Brent asked Brett to marry him!
                </p>
                <img
                    className="spanOne"
                    src={`${process.env.PUBLIC_URL}/images/Story/marriage.jpg`}
                    alt=""
                />
                <p className="grid-item-7">
                    Brett chose to make the engagement a quick affair. Having
                    had their anniversary on Brent's birthday the last 9 years,
                    it felt only fitting to have their new date be something
                    similar. And what better day than Brett's half-birthday two
                    weeks later?!
                </p>
            </div>
        </Template>
    );
}

export default Story;
