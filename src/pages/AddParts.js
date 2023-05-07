import AddPartRAM from './AddPartRAM';
import AddPartMB from './AddPartMB';
import AddPartCPU from './AddPartCPU';
import InputSelect from '../components/form/InputSelect';
import { useState } from 'react';
import { MOTHERBOARD, PROCESSOR, RAM_MEMORY } from '../helper/constants';

const AddParts = () => {
  const [data, setData] = useState({
    part: MOTHERBOARD,
  });

  return (
    <div>
      <h2>Adicionar</h2>
      <InputSelect
        id='get-all-by-part'
        label='Buscar Peças'
        onChange={(e) => setData({ ...data, socket: e.target.value })}
        items={[PROCESSOR, MOTHERBOARD, RAM_MEMORY]}
      />
      <div className='flex'>
        <AddPartRAM />

        <AddPartMB />

        <AddPartCPU />
      </div>
    </div>
  );
};

export default AddParts;
