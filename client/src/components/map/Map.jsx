import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import USAMap from 'react-usa-map';
import Modal from 'react-modal';
import ModalContent from './ModalContent.jsx';

Modal.setAppElement('#root');

const Map = (props) => {
  const isMounted = useRef(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [countryState, setCountryState] = useState('');
  const [concertData, setConcertData] = useState([]);
  const [filteredStates, setFilteredStates] = useState([]);
  const [stateOptions, setStateOptions] = useState({});

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    axios.get('/api/concert', {
      params: {
        keyword: props.keyword
      }
    })
      .then(concerts => {
        let events = concerts.data._embedded.events;

        let states = [];
        events.forEach(event => {
          if (event._embedded.venues[0].state) {
            states.push(event._embedded.venues[0].state.stateCode);
          }
        });

        setFilteredStates(states);
      })
      .catch(err => {
        console.log(err);
      });
  }, [props.keyword]);

  useEffect(() => {
    let options = {};

    filteredStates.forEach(state => {
      options[state] = {
        fill: '#0A5ED7'
      }
    });

    setStateOptions(options);
  }, [filteredStates]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const mapHandler = (event) => {
    setCountryState(event.target.dataset.name);

    axios.get('/api/concert', {
      params: {
        state: event.target.dataset.name,
        keyword: props.keyword
      }
    })
      .then(concerts => {
        if (!concerts.data._embedded) {
          alert('No concerts here :(');
          return;
        }

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
        <USAMap customize={stateOptions} onClick={mapHandler} />
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