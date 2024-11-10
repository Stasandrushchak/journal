import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import './ImageCard.css';

interface ImageCardProps {
  mainImage: string;
  thumbnails: string[];
  description: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  mainImage,
  thumbnails,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isThumbnail, setIsThumbnail] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [isMainImage, setIsMainImage] = useState(false);

  const handleThumbnail = (i: number) => {
    setModalOpen(true);
    setIsThumbnail(true);
    setThumbIndex(i);
  };

  const handleMainImageClick = () => {
    setModalOpen(true);
    setIsThumbnail(false);
    setIsMainImage(true);
  };

  return (
    <div className="product-card">
      <img
        src={mainImage}
        alt="Main"
        className="main-image"
        onClick={handleMainImageClick}
      />
      <div className="thumbnails">
        {thumbnails.map((thumb, index) => (
          <img
            key={index}
            src={thumb}
            alt="Thumbnail"
            className="thumbnail"
            onClick={() => handleThumbnail(index)}
          />
        ))}
      </div>

      {isMainImage && isModalOpen && (
        <Modal image={mainImage} onClose={() => setModalOpen(false)} />
      )}

      {isThumbnail && isModalOpen && (
        <Modal
          image={thumbnails[thumbIndex]}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};
