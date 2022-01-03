var fs = require("fs");
let gm = require("gm");

const PROJECT_ROOT = "/home/brent/Projects/wedding/public";
const IMAGE_DIRECTORY = "/images/Engagement";
const PUBLIC_URL = "${process.env.PUBLIC_URL}";

const timer = ms => new Promise( res => setTimeout(res, ms));

const run = async () => {
	let fileSizes = [];
	await fs.readdir(PROJECT_ROOT + IMAGE_DIRECTORY, (err, files) => {
		files.forEach(async (file) => {
			
			try {
				const filePath = PROJECT_ROOT + IMAGE_DIRECTORY + "/" + file;
				const graphicsMagick = await gm(filePath);
				fileSizes.push({
					name: "file",
					height: "size.height",
					width: "size.width",
				});
				await graphicsMagick.size(async (err, size) => {
					if (!err) {
						fileSizes.push({
							name: "file",
							height: size.height,
							width: size.width,
						});
					} else {
						console.log(err);
					}
				});
			} catch (err) {
				console.error(err);
			}
		});

		fileSizes.forEach((fileInfo) => {
			console.log("{");
			console.log("src: `" + PUBLIC_URL + IMAGE_DIRECTORY + fileInfo.name + "`,");
			console.log("   height: " + fileInfo.height + ",");
			console.log("   width: " + fileInfo.width + ",");
			console.log("},");
		});

	});

};

run();