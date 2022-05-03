import React from 'react';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h1><strong>Discover Concerts</strong></h1>
      <div className='input-group mb-3'>
        <input type='text' className='form-control' placeholder='Artist' />
      </div>
      <div className='input-group mb-3'>
        <input type='text' className='form-control' placeholder='Genre' />
      </div>
      <button type='button' className='btn btn-secondary'>Filter</button>
      <div className='my-concerts'>
        <a><strong>My Concerts</strong></a>
      </div>
    </div>
  );
}

export default Sidebar;