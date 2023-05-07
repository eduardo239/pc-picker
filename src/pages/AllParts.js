import React, { useEffect, useState } from 'react';
import { getAllParts } from '../helper/api_parts';
import PartItem from '../components/parts/PartItem';
import { MOTHERBOARD, PROCESSOR, RAM_MEMORY } from '../helper/constants';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AllParts = () => {
  const [data, setData] = useState(null);

  let search = useLocation().search;
  const type = new URLSearchParams(search).get('type');

  useEffect(() => {
    (async function loadBooks() {
      const response = await getAllParts(type);

      setData(response);
    })();

    return () => {};
  }, [type]);

  return (
    <div>
      <h2>All Parts</h2>

      <div>
        <Link to={`/parts?type=${PROCESSOR}`}>Processador</Link>
        <Link to={`/parts?type=${MOTHERBOARD}`}>PLaca-Mãe</Link>
        <Link to={`/parts?type=${RAM_MEMORY}`}>Memória Ram</Link>
      </div>

      <div>
        {data &&
          data.length > 0 &&
          data.map((item) => {
            return <PartItem key={item.id} data={item} />;
          })}
      </div>
    </div>
  );
};

export default AllParts;
