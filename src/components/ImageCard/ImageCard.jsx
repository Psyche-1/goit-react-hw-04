const ImageCard = ({
    image: {
        urls: { small, regular },
        alt_description,
        description,
    },
    openModal,
    }) => {
    return (
        <div>
        <img
            src={small}
            alt={alt_description}
            onClick={() => openModal(regular, alt_description, description)}
        />
        </div>
    );
};
export default ImageCard;
