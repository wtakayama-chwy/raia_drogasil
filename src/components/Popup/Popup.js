import React, { useState } from 'react';
import Modal from 'styled-react-modal'
import Button from '../Button';
import { invertColor } from '../Themes/theme';

const StyledModal = Modal.styled`
    width: 90%;
    height: 90vh;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    background-color: ${invertColor};
`

const Popup = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const toggleModal = (e) => {
        setModalIsOpen(!modalIsOpen)
    }

    return (
        <>
            <Button 
                onClick={() => toggleModal()} 
                type="secondary" 
                size="sm"
            >Leia mais...
            </Button>
            <StyledModal 
                isOpen={modalIsOpen} 
                onBackgroundClick={toggleModal}
                onEscapeKeydown={toggleModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >                
                <h2 id="modal-title">Título da Informação</h2>
                <p id="modal-description">Descrição da Informação</p>
                <Button 
                    onClick={() => toggleModal()}
                    type="close"
                    size="sm"
                >Close
                </Button>
            </StyledModal>
        </>
    )
}

export default Popup;