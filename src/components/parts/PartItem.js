import React from 'react';
import { Link } from 'react-router-dom';

const PartItem = ({ data }) => {
  console.log(data);
  return (
    <div className='part-item'>
      <Link to={`/parts/${data.id}`}>
        <div>
          <p>{data.title}</p>
          <span>{data.manufacturer}</span> | <span>{data.speed}</span> |{' '}
          <span>{data.type}</span>
        </div>
      </Link>
    </div>
  );
};

export default PartItem;
