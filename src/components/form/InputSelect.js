const InputSelect = ({ id, label, items = [], onChange }) => {
  return (
    <div className='form-field'>
      <label htmlFor={id}>{label}</label>
      <select onChange={onChange}>
        {items.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputSelect;
