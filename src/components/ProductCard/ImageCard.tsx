import { useState } from "react";
import { Modal } from "../Modal/Modal";

interface ImageCardProps {
  mainImage: string;
  thumbnails: string[];
  description: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({ mainImage, thumbnails, description }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="card">
      <img
        src={mainImage}
        alt="Main"
        className="main-image"
        onClick={() => setModalOpen(true)}
      />
      <div className="thumbnails">
        {thumbnails.map((thumb, index) => (
          <img key={index} src={thumb} alt="Thumbnail" className="thumbnail" />
        ))}
      </div>
      <p className="description">{description}</p>

      {isModalOpen && (
        <Modal image={mainImage} onClose={() => setModalOpen(false)} />
      )}
    </div>
  );
};