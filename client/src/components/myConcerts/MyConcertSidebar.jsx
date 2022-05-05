import React from 'react';

const MyConcertSidebar = (props) => {
  return (
    <div className='sidebar'>
      <h1><strong>My Concerts</strong></h1>
      <div className='my-concerts' id='back-to-map'>
        <button onClick={() => props.handlePageSelect('map')} type='button' className='btn btn-secondary'>Back to Map</button>
      </div>
    </div>
  );
}

export default MyConcertSidebar;