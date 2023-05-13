const GroupCheckbox = ({
  checkedList,
  setCheckedList,
  list = [],
  label = "",
}) => {
  const handleAddItem = (item) => {
    if (checkedList.includes(item)) {
      setCheckedList(checkedList.filter((i) => i !== item));
    } else {
      setCheckedList([...checkedList, item]);
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
              value={item.id}
              onChange={(v) => handleAddItem(v.target.value)}
            />

            <label htmlFor={item.id}>{item.name}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupCheckbox;
