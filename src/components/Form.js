import React from 'react';

const Form = () => {
  return (
    <form>
      <label htmlFor='name'>Tên:</label>
      <input type='text' id='name' name='name' />
      <button type='submit'>Gửi</button>
    </form>
  );
};

export default Form;
