import React, { useState } from 'react';
import axios from 'axios';

const MyConcerts = () => {
  const [myConcerts, setMyConcerts] = useState([]);

  // const handleGoing = () => {

  // }

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

  return (
    <div className='my-concerts-page'>
      <ul>
        {myConcerts.map((concert, i) => {
          return (
            <li key={i}>
              <div>
                <h3>{concert.event}</h3>
                {concert.location} - {concert.date} <a href={concert.url}>TICKETS</a>
              </div>
              <div>
                <button type='button' className='btn btn-secondary'>Not Going</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MyConcerts;