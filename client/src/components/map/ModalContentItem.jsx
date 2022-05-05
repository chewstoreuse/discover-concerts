import React, { useState } from 'react';

const ModalContentItem = (props) => {
  const [isAdded, setIsAdded] = useState(false);

  return (
    <div>
      <div>
        {props.details.name}, {props.details.city.name}
      </div>
      <div>
        {props.show.dates.start.localDate} @{props.show.dates.start.localTime} <a href={`${props.details.url}`}>TICKETS</a>
        <a onClick={() => {
          props.addMyConcerts(props.concertInfo);
          setIsAdded(true);
        }} className={isAdded ? 'add added' : 'add'}>{isAdded ? 'Added!' : 'Add to My Concerts'}</a>
      </div>
      {!props.isLastShow && <hr />}
    </div>
  );
}

export default ModalContentItem;