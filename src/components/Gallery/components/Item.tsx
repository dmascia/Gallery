import type {GalleryImage}  from "../types";

const Item = (props: GalleryImage) => {
    return (
        <div>
            <img className="h-auto max-w-full rounded-lg" src={props.src} alt={props.alt} />
        </div>
    )
}

export default Item;
