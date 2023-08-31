import React from 'react';
import Modal from 'react-modal';

const NewJobModal = ({ isOpen, closeModal }) => {
    Modal.setAppElement('#root');
    const modalStyles = {
        content: {
            maxWidth: '70%',
            height: 'auto', 
            margin: 'auto', 
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Set the desired background color and opacity
            zIndex: 1000, // Adjust the z-index as needed
        },
    }
    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="New Job Application" 
        style={modalStyles}>

            <h2>Enter a new job application</h2>
            <p>This is the content of the modal.</p>
            <button onClick={closeModal}>Close Modal</button>
        </Modal>
    );
};

export default NewJobModal;
