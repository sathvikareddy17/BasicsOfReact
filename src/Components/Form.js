import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="form-container">
      <form>
        <h2>User Form</h2>
        <div>
          <label>Name</label>
          <input type="text" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
