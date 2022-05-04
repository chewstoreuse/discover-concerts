import React, { useState } from 'react';
import axios from 'axios';
import USAMap from 'react-usa-map';
import Modal from 'react-modal';
import ModalContent from './ModalContent.jsx';

Modal.setAppElement('#root');

const Map = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [countryState, setCountryState] = useState('');
  const [concertData, setConcertData] = useState([]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const mapHandler = (event) => {
    setCountryState(event.target.dataset.name);

    axios.get('/api/concert', {
      params: { state: event.target.dataset.name }
    })
      .then(concerts => {
        // console.log(concerts.data);
        setConcertData(concerts.data._embedded.events);
        setIsOpen(true);
      })
      .catch(err => {
        console.log(err);
      });
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
        <div>
          <i className='fa-solid fa-xmark' onClick={closeModal}></i>
          Shows in {countryState}:
        </div>
        <div className='modal-content-container'>
          <ModalContent concertData={concertData} />
        </div>
      </Modal>
    </>
  );
}

export default Map;