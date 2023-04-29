function Input({ title, value, onChange, text }) {
  return (
    <>
      <div className="col-4">
        <label htmlFor="nameUser">{title}</label>
      </div>
      <div className="col-8">
        <input
          type="text"
          className="form-control"
          id="nameUser"
          onChange={onChange}
          value={value}
        />
      </div>{" "}
      <span style={{ color: "red" }}>{text}</span>
    </>
  );
}

export default Input;
