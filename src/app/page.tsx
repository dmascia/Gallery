"use client"

import {useState, useEffect} from "react";
import {
  Gallery, Item, Layouts, setImages,
  resetGallery, setFeatured, selectedImages
} from "@/components/Gallery";
import type {GalleryImage} from "@/components/Gallery";
import { useAppDispatch, useAppSelector } from '@/lib/hooks'

const getImages = (): GalleryImage[] => {
  return Array(500).fill({
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    alt: "test",
  });
}

export default function Home() {
  const currentImages = useAppSelector(selectedImages);
  const dispatch = useAppDispatch()
  const [selectedLayout, setSelectedLayout] = useState<Layouts>(Layouts.Default);

  useEffect(() => {
    if (!currentImages.length) {
      const images = getImages();

      if (images.length) {
        dispatch(setImages(images));
        dispatch(setFeatured({
          src: "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg",
          alt: "featured",
        }));
      }
    }

    return () => { dispatch(resetGallery()); }
  }, [dispatch, currentImages])

  return (
    <div className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        {Object.values(Layouts).map((layout: Layouts, idx: number ) => {
          return <button key={idx} type="button" className={
            selectedLayout === layout ?
              "text-blue-700 text-white border border-gray-200 bg-blue-700 focus:ring-4 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3" :
              "text-gray-900 border border-black hover:border-gray-200 border-gray-900 bg-gray-900 hover:border-gray-200 focus:bg-blue-700 bg-black focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3  text-white focus:ring-gray-800"
            } onClick={() => setSelectedLayout(layout)}>{layout}</button>
        })}
      </div>
      {currentImages &&
        <Gallery layout={selectedLayout}>
            {currentImages.map((img: GalleryImage, idx: number) => <Item key={idx} src={img.src} alt={img.alt} />)}
        </Gallery>
      }
    </div>
  );
}
