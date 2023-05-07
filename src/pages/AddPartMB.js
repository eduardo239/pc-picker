import React, { useState } from 'react';
import InputText from '../components/form/InputText';
import { addPart } from '../helper/api_parts';
import { MOTHERBOARD } from '../helper/constants';

const AddPart = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    title: 'Placa-mãe Gigabyte B550M Aorus Elite Micro ATX AM4',
    manufacturer: 'Gigabyte',
    model: 'B550M Aorus',
    socket: 'AM4',
    query: MOTHERBOARD,
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
      <h4>Placa-Mãe</h4>

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
          placeholder='Gigabyte'
          onChange={(e) => setData({ ...data, manufacturer: e.target.value })}
          value={data.manufacturer ? data.manufacturer : ''}
        />

        <InputText
          id='type'
          label='Modelo'
          type='text'
          placeholder='B550M Aorus Elite'
          onChange={(e) => setData({ ...data, model: e.target.value })}
          value={data.model ? data.model : ''}
        />

        <InputText
          id='speed'
          label='Socket do processador'
          type='text'
          placeholder='AM4'
          onChange={(e) => setData({ ...data, socket: e.target.value })}
          value={data.socket ? data.socket : ''}
        />

        <button
          onClick={(e) => addPart(e, file, data, setLoading, setError, 'mb')}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default AddPart;
