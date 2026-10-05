function FormInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  touched,
  placeholder
}) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={touched && error ? "input-error" : ""}
      />

      {touched && error && (
        <p className="error-message">{error}</p>
      )}
    </div>
  );
}

export default FormInput;