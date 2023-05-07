import AddPartRAM from './AddPartRAM';
import AddPartMB from './AddPartMB';
import AddPartCPU from './AddPartCPU';

const AddParts = () => {
  return (
    <div>
      <h2>Adicionar</h2>

      <div className='flex'>
        <AddPartRAM />

        <AddPartMB />

        <AddPartCPU />
      </div>
    </div>
  );
};

export default AddParts;
