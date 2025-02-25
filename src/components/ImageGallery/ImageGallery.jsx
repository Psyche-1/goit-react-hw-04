import ImageCard from '../ImageCard/ImageCard'

export default function ImageGallery({images, openModal}) {
    return (
        <ul>
            {images.map((item) => (<li key={item.id}><ImageCard image={item} openModal={openModal}/></li>))}
        </ul>

)
}