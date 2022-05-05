import React, { useState } from 'react';

const Sidebar = (props) => {
  const [filter, setFilter] = useState({
    artist: '',
    genre: ''
  });

  const handleChange = (event) => {
    setFilter({ ...filter, [event.target.name]: event.target.value });
  };

  return (
    <div className='sidebar'>
      <h1><strong>Discover Concerts</strong></h1>
      <div>
        <div className='input-group mb-3'>
          <input type='text' className='form-control' placeholder='Artist' name='artist' onChange={handleChange} />
        </div>
        <div className='input-group mb-3'>
          <input type='text' className='form-control' placeholder='Genre' name='genre' onChange={handleChange} />
        </div>
        <div className='input-group mb-3'>
          <span className='input-group-text' id='addon-wrapping'>Start Date</span>
          <input type='date' className='form-control' name='startDate' onChange={handleChange} />
        </div>
        <div className='input-group mb-3'>
          <span className='input-group-text' id='addon-wrapping'>End Date</span>
          <input type='date' className='form-control' name='endDate' onChange={handleChange} />
        </div>
        <button onClick={() => props.handleInputFilter(filter)} type='button' className='btn btn-secondary'>Filter</button>
      </div>
      <div className='my-concerts'>
        <button onClick={() => props.handlePageSelect('my-concerts')} type='button' className='btn btn-secondary'>My Concerts</button>
      </div>
    </div>
  );
}

export default Sidebar;