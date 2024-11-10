import React from "react";
import "../../App.css"; 

interface ModalProps {
    image: string;
    onClose: () => void;
  }

export const Modal: React.FC<ModalProps> = ({ image, onClose }) => (
  <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content">
      <img src={image} alt="Main" />
    </div>
  </div>
);