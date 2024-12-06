import Item from "./components/Item";
import Gallery from "./components/Gallery";
import {Layouts} from "./constants";
import Reducer, {
    setImages, resetGallery, setFeatured,
    selectedFeatured, selectedImages
} from "./slice";
import type {GalleryImage} from "./types";

export {
    Gallery, Item, Layouts, setImages, resetGallery,
    setFeatured, selectedFeatured, selectedImages
};

export type { GalleryImage }

export default Reducer;
