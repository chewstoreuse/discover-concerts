import React, { useState } from 'react';
import Sidebar from './components/map/Sidebar.jsx';
import MyConcertSidebar from './components/myConcerts/MyConcertSidebar.jsx';
import Map from './components/map/Map.jsx';
import MyConcerts from './components/myConcerts/MyConcerts.jsx';

const App = () => {
  const [page, setPage] = useState('map');

  const handlePageSelect = (currentPage) => {
    setPage(currentPage);
  }

  if (page === 'map') {
    return (
      <>
        <Sidebar handlePageSelect={handlePageSelect} />
        <Map />
      </>
    );
  } else {
    return (
      <>
        <MyConcertSidebar handlePageSelect={handlePageSelect} />
        <MyConcerts />
      </>
    );
  }
}

export default App;