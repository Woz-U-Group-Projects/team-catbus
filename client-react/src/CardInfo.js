import React from 'react';
import { Fragment } from 'react';

const Card = ({ name, email, }) => {
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <Fragment>
        <h2>{name}</h2>
        <p>{email}</p>
      </Fragment>
    </div>
  );
}

export default Card;