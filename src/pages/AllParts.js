import React, { useEffect, useState } from 'react';
import { getAllParts } from '../helper/api_parts';
import PartItem from '../components/parts/PartItem';

const AllParts = () => {
  const [data, setData] = useState([]);

  console.log(data);

  useEffect(() => {
    (async function loadBooks() {
      const response = await getAllParts();
      setData(response);
    })();

    return () => {};
  }, []);

  return (
    <div>
      <h2>All Parts</h2>

      <div>
        {data.map((item) => {
          return <PartItem key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};

export default AllParts;
