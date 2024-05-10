const ControlledInputs = () => {
  return (
    <form className="form">
      <h4>controlled inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input type="text" id="name" className="form-input" />
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input type="email" id="email" className="form-input" />
      </div>
      <button className="btn btn-block" type="submit">
        submit
      </button>
    </form>
  );
};
export default ControlledInputs;
