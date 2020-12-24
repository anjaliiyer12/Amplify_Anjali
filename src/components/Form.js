import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState('');


  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      return;
    }
    props.addTask(name);
    setName("");
  }


  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        <label style={{ color: 'white' }} htmlFor="new-todo-input">
          Add A To-Do Item
        </label>
      </h2>

      <input
        type="text"
        id="new-todo-input"
        className="btn todo-cancel"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary">
        Create
      </button>
    </form>
  );
}

export default Form;
