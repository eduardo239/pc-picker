import React, { useState } from 'react';
import InputText from '../components/form/InputText';
import { addPart } from '../helper/api_parts';
import { RAM_MEMORY } from '../helper/constants';

const AddPart = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    title: 'Memoria Ram Kingston',
    manufacturer: 'Kingston',
    type: '288-pin DIMM',
    speed: 'DDR4-3200',
    query: RAM_MEMORY,
  });

  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);

  const handleImageOnChange = (e) => {
    if (e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setFile(e.target.files[0]);
    }
  };

  return (
    <div>
      <h4>RAM</h4>

      <form>
        <InputText
          id='title'
          label='Título'
          type='text'
          placeholder='Memória Kingston Fury Beast 16 GB (1x16 GB) DDR4-3200'
          onChange={(e) => setData({ ...data, title: e.target.value })}
          value={data.title ? data.title : ''}
        />

        <InputText
          id='manufacturer'
          label='Fabricante'
          type='text'
          placeholder='Kingston'
          onChange={(e) => setData({ ...data, manufacturer: e.target.value })}
          value={data.manufacturer ? data.manufacturer : ''}
        />

        <InputText
          id='type'
          label='Tipo'
          type='text'
          placeholder='288-pin DIMM'
          onChange={(e) => setData({ ...data, type: e.target.value })}
          value={data.type ? data.type : ''}
        />

        <InputText
          id='speed'
          label='Velocidade'
          type='text'
          placeholder='DDR4-3200'
          onChange={(e) => setData({ ...data, speed: e.target.value })}
          value={data.speed ? data.speed : ''}
        />

        <button
          onClick={(e) => addPart(e, file, data, setLoading, setError, 'ram')}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default AddPart;
