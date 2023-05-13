import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { deletePartById, getPartById } from '../helper/api_parts';

const PartById = () => {
  const navigate = useNavigate();

  const [data, setData] = useState(null);

  let search = useLocation().search;
  const type = new URLSearchParams(search).get('type');
  const id = new URLSearchParams(search).get('id');

  const handleDeletePart = async () => {
    await deletePartById(id, type);
    navigate('/parts');
  };

  useEffect(() => {
    (async function loadBooks() {
      const part = await getPartById(id, type);
      setData(part);
    })();
    return () => { };
  }, [id, type]);

  if (data)
    return (
      <div>
        {JSON.stringify(data)}

        <h2>Part</h2>
        <div>
          <p>{data.title}</p>
          {data.manufacturer && <p>Fabricante: {data.manufacturer}</p>}
          {data.speed && <p>Velocidade: {data.speed}</p>}
          {data.type && <p>Tipo: {data.type}</p>}
          {data.model && <p>Modelo: {data.model}</p>}
          {data.socket && <p>Socket: {data.socket}</p>}
        </div>

        <button onClick={handleDeletePart}>delete</button>
      </div>
    );
};

export default PartById;
