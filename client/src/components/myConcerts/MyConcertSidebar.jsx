import React from 'react';

const MyConcertSidebar = (props) => {
  return (
    <div className='sidebar'>
      <h1><strong>My Concerts</strong></h1>
      <div className='my-concerts'>
        <a onClick={() => props.handlePageSelect('map')}><strong>Back to Map</strong></a>
      </div>
    </div>
  );
}

export default MyConcertSidebar;