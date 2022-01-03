import "../css/Photos.css";
import Template from "../components/Template";

import Gallery from "react-photo-gallery";
import { photos } from "../images/photoList";


const photos = [
	{
		src: `${process.env.PUBLIC_URL}/images/roadtrip.jpg`,
		height: 720,
		width: 960,
	},
	{
		src: `${process.env.PUBLIC_URL}/images/snow.jpg`,
		height: 720,
		width: 960,
	},
	const photos = [
		{
			src: `${process.env.PUBLIC_URL}/images/roadtrip.jpg`,
			height: 720,
			width: 960,
		},
		{
			src: `${process.env.PUBLIC_URL}/images/snow.jpg`,
			height: 720,
			width: 960,
		},
		{
			src: `${process.env.PUBLIC_URL}/images/firstMet.jpg`,
			height: 720,
			width: 960,
		},
		{
			src: `${process.env.PUBLIC_URL}/images/roadtrip.jpg`,
			height: 720,
			width: 960,
		},
		{
			src: `${process.env.PUBLIC_URL}/images/roadtrip.jpg`,
			height: 720,
			width: 960,
		},
	];
	{
		src: `${process.env.PUBLIC_URL}/images/firstMet.jpg`,
		height: 720,
		width: 960,
	},
	{
		src: `${process.env.PUBLIC_URL}/images/roadtrip.jpg`,
		height: 720,
		width: 960,
	},
	{
		src: `${process.env.PUBLIC_URL}/images/roadtrip.jpg`,
		height: 720,
		width: 960,
	},
];

const openLightbox = () => {
	console.log("open");
};

function Photos() {
	return (
		<Template>
			<Gallery photos={photos} onClick={openLightbox} />
		</Template>
	);
}

export default Photos;
