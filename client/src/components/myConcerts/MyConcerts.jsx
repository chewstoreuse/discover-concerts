import React, { useState } from 'react';
import axios from 'axios';

const MyConcerts = () => {
  const [myConcerts, setMyConcerts] = useState([]);

  useState(() => {
    axios.get('/myConcert')
      .then(concerts => {
        console.log(concerts.data)
        setMyConcerts(concerts.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleGoing = (params) => {
    axios.put('/markGoingConcert', params)
      .then(response => {
        return axios.get('/myConcert');
      })
      .then(concerts => {
        setMyConcerts(concerts.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const handleRemove = (params) => {
    axios.delete('/myConcert', {
      data: params
    })
      .then(response => {
        return axios.get('/myConcert');
      })
      .then(concerts => {
        setMyConcerts(concerts.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div className='my-concerts-page'>
      <ul>
        {myConcerts.map((concert, i) => {
          return (
            <li key={i}>
              <div>
                <h3>{concert.event}</h3>
                {concert.location} - {concert.date} <a href={concert.url}>TICKETS</a> - <a href='#' onClick={() => handleRemove({
                  event: concert.event,
                  location: concert.location,
                  date: concert.date,
                  url: concert.url
                })} >REMOVE</a>
              </div>
              <div>
                <button onClick={() => handleGoing({
                  event: concert.event,
                  url: concert.url
                })} type='button' className={concert.going ? 'btn btn-primary' : 'btn btn-secondary'} >{concert.going ? 'Going' : 'Not Going'}</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div >
  );
}

export default MyConcerts;