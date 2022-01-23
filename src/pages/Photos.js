import { useState, useCallback, useEffect } from "react";
import "../css/Photos.css";
import Template from "../components/Template";

import Gallery from "react-photo-gallery";
// import { photos } from "../images/photoList";
import Carousel, { Modal, ModalGateway } from "react-images";

// const { photos: test } = JSON.parse(require("../images/metadata"));
import { photos } from "../resources/metadata";
// const photos = [];

function Photos() {
  useEffect(() => {
    console.log(photos);
  }, []);

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Template>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                source: {
                  regular: x.fullsize,
                  download: x.fullsize,
                },
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Template>
  );
}

export default Photos;
