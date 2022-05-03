import React, { useState } from 'react';

const ModalContent = (props) => {
  const seed = ['beatles', '21 savage', 'snoh alegra'];

  return (
    <div className='accordion' id='accordionConcerts'>
      {seed.map((concert, i) =>
        <div className='accordion-item'>
          <h2 className='accordion-header' id={`heading${i}`}>
            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target={`#collapse${i}`} aria-expanded='true' aria-controls={`collapse${i}`}>
              {concert}
            </button>
          </h2>
          <div id={`collapse${i}`} className='accordion-collapse collapse' aria-labelledby={`heading${i}`} data-bs-parent='#accordionConcerts'>
            <div className='accordion-body'>
              {props.state}
            </div>
          </div>
        </div>
      )}
    </div >
  );
}

export default ModalContent;