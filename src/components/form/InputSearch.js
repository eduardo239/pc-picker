
const InputSearch = ({ id, label, placeholder, type, onChange, value }) => {
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
    )
}

export default InputSearch