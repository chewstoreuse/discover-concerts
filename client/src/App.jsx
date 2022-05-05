import React, { useState } from 'react';
import Sidebar from './components/map/Sidebar.jsx';
import MyConcertSidebar from './components/myConcerts/MyConcertSidebar.jsx';
import Map from './components/map/Map.jsx';
import MyConcerts from './components/myConcerts/MyConcerts.jsx';

const App = () => {
  const [page, setPage] = useState('map');
  const [keyword, setKeyword] = useState('');
  const [date, setDate] = useState({
    startDate: '',
    endDate: ''
  });

  const handlePageSelect = (currentPage) => {
    setPage(currentPage);
  };

  const handleInputFilter = (filter) => {
    if (filter.artist.length && filter.genre.length) {
      alert('You can only filter by artist or by genre');
      return;
    }

    let startDate = filter.startDate ? new Date(filter.startDate).toISOString().split('.')[0] + 'Z' : '';
    let endDate = filter.endDate ? new Date(filter.endDate).toISOString().split('.')[0] + 'Z' : '';

    setDate({
      startDate: startDate,
      endDate: endDate
    });
    setKeyword(filter.artist || filter.genre);
  };

  const handleClearFilter = () => {
    setDate({
      startDate: '',
      endDate: ''
    });
    setKeyword('');
  };

  if (page === 'map') {
    return (
      <>
        <Sidebar handlePageSelect={handlePageSelect} handleInputFilter={handleInputFilter} handleClearFilter={handleClearFilter} />
        <Map keyword={keyword} date={date} />
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