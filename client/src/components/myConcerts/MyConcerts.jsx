import React, { useState } from 'react';
import axios from 'axios';

const MyConcerts = () => {
  const [myConcerts, setMyConcerts] = useState([]);

  // useState(() => {
  //   axios.get('/myConcert')
  //     .then(concerts => {
  //       //concerts.data
  //       setMyConcerts(concerts);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div className='my-concerts-page'>
      hello
    </div>
  );
}

export default MyConcerts;