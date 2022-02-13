import "../css/Home.css";
import Template from "../components/Template";

function Home() {
    return (
        <Template>
            <img
                alt=""
                className="fullWidthImg"
                src={`${process.env.PUBLIC_URL}/images/cover.jpeg`}
            />
            <div className="theWedding">
                <h2>The Wedding</h2>
                <p>
                    Brett and Brent were married in an intimate ceremony on
                    their property on Saturday December 18th. The ceremony was
                    performed in their backyard by their friend Conner Torrey,
                    and they were joined by family both in person and on live
                    stream. They celebrated that night with take out from their
                    favorite Thai restaurant!
                </p>
                <p>
                    Brent and Brett hope to celebrate with everyone some day,
                    whether it be a big party or smaller get-togethers!
                </p>
            </div>
        </Template>
    );
}

export default Home;
