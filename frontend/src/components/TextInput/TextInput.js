const TextInput = ({ label, placeholder, name, handleChange, handleBlur, value, errors, touched }) => {
  return (
    <div className="input-group">
      <label htmlFor="" className="message">{label}</label>
      <input
        type="text"
        className="main-input"
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
      {touched[name] && <div className="message invalid-feedback">{errors[name]}</div>}
    </div>
  );
};

export default TextInput;
