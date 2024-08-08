import React from 'react';
import "./Modal.css";

// Modal component definition
const Modal = ({ show, handleClose, children }) => {
    return (
        <div className={`modal ${show ? 'show' : ''}`}> {/* Container div for the modal */}
            <div className="modal-content"> {/* Container for modal content */}
                <span className="close" onClick={handleClose}>&times;</span> {/* Close button */}
                {children} {/* Render child components or content inside the modal */}
            </div>
        </div>
    );
};

export default Modal; // Export Modal component for use in other parts of the application
