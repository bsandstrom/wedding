import { useState, useCallback } from "react";
import "../css/Photos.css";
import Template from "../components/Template";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos as engagementPhotos } from "../resources/engagement";
import { photos as weddingPhotos } from "../resources/wedding";
import { photos } from "../resources/photos";
import { photos as years } from "../resources/years";

function Photos() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((index) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <Template>
            <h2>Engagement</h2>
            <Gallery
                photos={engagementPhotos}
                onClick={(_e, { index }) => {
                    openLightbox(index);
                }}
            />
            <h2>Wedding</h2>
            <Gallery
                photos={weddingPhotos}
                onClick={(_e, { index }) => {
                    openLightbox(index + engagementPhotos.length);
                }}
            />
            <Gallery
                photos={photos}
                onClick={(_e, { index }) => {
                    openLightbox(
                        index + engagementPhotos.length + weddingPhotos.length
                    );
                }}
            />
            <h2>Through the years</h2>
            <Gallery
                photos={years}
                onClick={(_e, { index }) => {
                    openLightbox(
                        index +
                            engagementPhotos.length +
                            weddingPhotos.length +
                            photos.length
                    );
                }}
            />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={[
                                ...engagementPhotos,
                                ...weddingPhotos,
                                ...photos,
                                ...years,
                            ].map((x) => ({
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
