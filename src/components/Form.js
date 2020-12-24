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
      <h2 className="label-wrapper">
        <label style={{ color: 'white' }} htmlFor="new-todo-input" className="label__lg">
          Add A To-Do Item
        </label>
      </h2>

      <input
        style={{ backgroundColor: 'rgba(255,255,255,0.4)',
        borderRadius: 5,
        width: 250,
        height: 40,
        padding: 5,}}
        type="text"
        id="new-todo-input"
        className="input input__lg"
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
