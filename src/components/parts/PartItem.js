import React from 'react';
import { Link } from 'react-router-dom';

const PartItem = ({ data }) => {
  return (
    <div className='part-item'>
      <code>id # {data.id}</code>
      <Link to={`/part?type=${data.query}&id=${data.id}`}>
        <p>{data.title}</p>
      </Link>
    </div>
  );
};

export default PartItem;
