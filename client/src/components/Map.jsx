import React, { useState } from 'react';
import USAMap from 'react-usa-map';
import Modal from 'react-modal';
import ModalContent from './ModalContent.jsx';

Modal.setAppElement('#root');

const Map = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [state, setState] = useState('');

  const closeModal = () => {
    setIsOpen(false);
  };

  const mapHandler = (event) => {
    setState(event.target.dataset.name);


    setIsOpen(true);
  };

  return (
    <>
      <div className='map'>
        <USAMap onClick={mapHandler} />
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className='Modal'
      >
        <i className='fa-solid fa-xmark' onClick={closeModal}></i>
        <ModalContent state={state} />
      </Modal>
    </>
  );
}

export default Map;