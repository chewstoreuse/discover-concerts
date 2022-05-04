import React, { useState } from 'react';
import Sidebar from './components/map/Sidebar.jsx';
import MyConcertSidebar from './components/myConcerts/MyConcertSidebar.jsx';
import Map from './components/map/Map.jsx';
import MyConcerts from './components/myConcerts/MyConcerts.jsx';

const App = () => {
  const [page, setPage] = useState('map');
  const [keyword, setKeyword] = useState('');

  const handlePageSelect = (currentPage) => {
    setPage(currentPage);
  }

  const handleInputFilter = (filter) => {
    if (filter.artist.length && filter.genre.length) {
      alert('You can only filter by artist or by genre');
      return;
    } else if (!filter.artist.length && !filter.genre.length) {
      return;
    }

    setKeyword(filter.artist || filter.genre);
  };

  if (page === 'map') {
    return (
      <>
        <Sidebar handlePageSelect={handlePageSelect} handleInputFilter={handleInputFilter} />
        <Map keyword={keyword} />
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