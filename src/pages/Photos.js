import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import "../css/Photos.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import Template from "../components/Template";

const getKittens = () => {
  let kittens = [];
  for (let i = 0; i < 30; i++) {
    kittens.push(
      <Item
        original={`https://placekitten.com/1024/768?image=${i}`}
        thumbnail={`https://placekitten.com/300/300?image=${i}`}
        width="1024"
        height="768"
      >
        {({ ref, open }) => (
          <img
            ref={ref}
            onClick={open}
            src={`https://placekitten.com/300/300?image=${i}`}
            alt="cute kitten"
          />
        )}
      </Item>
    );
  }
  return kittens;
};

function Photos() {
  return (
    <Template>
      <div id="photoContainer">
        <Gallery>{getKittens()}</Gallery>
      </div>
      <footer>Website written in React by Brent</footer>
    </Template>
  );
}

export default Photos;
