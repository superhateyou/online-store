import { GalleryThumbnails } from "./GalleryThumbnails"

export const Gallery = () => {
    return (
        <div className="card__photos gallery">
        <div className="gallery__display">
            <img
                src="http://lorempixel.com/570/525/animals/1"
                width={570}
                height={525}
                alt=""
                className="gallery__display-img"
            />
        </div>
        <GalleryThumbnails />
    </div>
    )
}