import { createSlice } from '@reduxjs/toolkit'
import type {GalleryImage} from './types';

const initialState: { images: GalleryImage[], featured: GalleryImage } = {
  images: [],
  featured: {},
};

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    setImages: (state, action) => {
      state.images = action.payload;
    },
    setFeatured: (state, action) => {
      state.featured = action.payload;
    },
    resetGallery: (state) => {
      state = initialState;
    }
  }
});

export const { setImages, resetGallery, setFeatured } = gallerySlice.actions;
export const selectedImages = state => state.gallery.images;
export const selectedFeatured = state => state.gallery.featured;

export default gallerySlice.reducer;
