import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ModalContent = (props) => {
  const [concerts, setConcerts] = useState([]);

  useEffect(() => {
    let allShows = [];
    let data = {}

    props.concertData.forEach(show => {
      if (data[show.name]) {
        data[show.name].shows.push(show);
      } else {
        data[show.name] = {
          name: show.name,
          shows: [show]
        };
      }
    });

    for (let key in data) {
      allShows.push(data[key]);
    }

    setConcerts(allShows);

  }, []);

  const addMyConcerts = (concert) => {
    axios.post('/myConcert', concert)
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div className='accordion' id='accordionConcerts'>
      {
        concerts.map((concert, i) =>
          <div className='accordion-item' key={i}>
            <h2 className='accordion-header' id={`heading${i}`}>
              <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target={`#collapse${i}`} aria-expanded='true' aria-controls={`collapse${i}`}>
                {concert.name}
              </button>
            </h2>
            <div id={`collapse${i}`} className='accordion-collapse collapse' aria-labelledby={`heading${i}`} data-bs-parent='#accordionConcerts'>
              <div className='accordion-body'>
                {concert.shows.map((show, i) => {
                  let details = show._embedded.venues[0];
                  let lastShow = false;

                  if (i === concert.shows.length - 1) {
                    lastShow = true;
                  }

                  return (
                    <div key={i}>
                      <div>
                        {details.name}, {details.city.name}
                      </div>
                      <div>
                        {show.dates.start.localDate} @{show.dates.start.localTime} <a href={`${details.url}`}>TICKETS</a>
                        <a onClick={() => addMyConcerts({
                          event: concert.name,
                          location: `${details.name}, ${details.city.name}`,
                          date: show.dates.start.localDate,
                          url: details.url
                        })} className="add">Add to My Concerts</a>
                      </div>
                      {!lastShow && <hr />}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )
      }
      {console.log('concerts:', concerts)}
    </div>
  );
}

export default ModalContent;