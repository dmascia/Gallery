"use client"

import {ReactNode} from "react";
import {Layouts} from "../constants";
import { useAppSelector } from '@/lib/hooks';
import {selectedFeatured} from "../slice";
import Item from "./Item";

type GalleryProps = {
    children: ReactNode[]
    layout: Layouts
}

const Gallery = (props: GalleryProps) => {
    const currentFeatured = useAppSelector(selectedFeatured);

    switch (props.layout) {
        case Layouts.Featured:
            return (
                <div className="grid gap-4">
                    <Item src={currentFeatured.src} alt={currentFeatured.alt} />
                    <div className="grid grid-cols-5 gap-4">
                        {props.children}
                    </div>
                </div>
            )
        case Layouts.Quad:
            return (
                <div className="grid grid-cols-2 gap-2">
                    {props.children}
                </div>
            )

        case Layouts.Default:
        default:
            return (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {props.children}
                </div>
            )
    }
}

export default Gallery;
