// src/Modal.js
import React from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <dialog className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </dialog>
    );
};

export default Modal;
