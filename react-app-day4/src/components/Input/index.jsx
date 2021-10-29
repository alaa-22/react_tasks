export const Input = ({ label, value, type = "text", setValue }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="input-group input-group-lg m-2">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-lg">
          {label}
        </span>
      </div>
      <input
        type="text"
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-lg"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
