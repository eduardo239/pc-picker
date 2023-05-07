import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deletePartById, getPartById } from '../helper/api_parts';

const PartById = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState(null);

  const handleDeletePart = async () => {
    await deletePartById(data.id);
    navigate('/parts');
  };

  useEffect(() => {
    (async function loadBooks() {
      const bookById = await getPartById(id);
      setData(bookById);
    })();
    return () => {};
  }, [id]);

  if (data)
    return (
      <div>
        <h2>Part</h2>
        <div>
          <p>{data.title}</p>
          <span>{data.manufacturer}</span> | <span>{data.speed}</span> |{' '}
          <span>{data.type}</span>
        </div>

        <button onClick={handleDeletePart}>delete</button>
      </div>
    );
};

export default PartById;
