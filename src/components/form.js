import React from 'react';

const Form = ({ handleChange, handleSubmit, value }) => (
  <form>
    <input
      name="item"
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Enter an item"
    />
  <button type="submit" className="submit" onClick={event => handleSubmit(event)}>Submit</button>
  </form>
)

export default Form;
