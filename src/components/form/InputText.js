const InputText = ({
  id,
  label = 'Label',
  type = 'text',
  placeholder = '',
  onChange,
  value,
}) => {
  return (
    <div className='form-field'>
      <label htmlFor={id}>{label}</label>
      <input
        placeholder={placeholder}
        id={id}
        type={type}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default InputText;
