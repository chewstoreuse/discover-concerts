import React from 'react';
import USAMap from 'react-usa-map';

const Map = () => {
  const mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  return (
    <div className='map'>
      <USAMap onClick={mapHandler} />
    </div>
  );
}

export default Map;