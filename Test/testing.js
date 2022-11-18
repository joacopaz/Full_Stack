const reduce = require("image-blob-reduce")();

const resolve = (blob) => {
	// Convert Blob to URL
	const blobUrl = URL.createObjectURL(blob);

	// Create an a element with blob URL
	const anchor = document.createElement("a");
	anchor.href = blobUrl;
	anchor.target = "_blank";
	anchor.download = "blob";

	// Auto click on a element, trigger the file download
	anchor.click();

	// Don't forget ;)
	URL.revokeObjectURL(blobUrl);
};

const run = (image_blob) => {
	reduce
		.toBlob(image_blob, { max: 200, max: 200 })
		.then((blob) => resolve(blob));
};
