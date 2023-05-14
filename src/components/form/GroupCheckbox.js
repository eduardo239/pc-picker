const GroupCheckbox = ({
  selectedFields,
  setSelectedFields,
  list = [],
  label = "",
}) => {
  const handleChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedFields([...selectedFields, value]);
    } else {
      setSelectedFields(selectedFields.filter((field) => field !== value));
    }
  };

  return (
    <div>
      <h4>{label}</h4>
      <ul>
        {list.map((item) => (
          <li className="input-checkbox" key={item.id}>
            <input
              type="checkbox"
              name={item.id}
              id={item.id}
              value={item.name}
              onChange={handleChange}
            />

            <label htmlFor={item.id}>{item.name}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupCheckbox;
