export function PreviewImages({images}) {
    return (
        <div className="box_preview_image">
            {images.map((image, index) => (
                <div key={index} className="preview_container">
                    <img src={image} />
                </div>
            ))}
        </div>
    )
}