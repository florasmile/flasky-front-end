import { useState } from 'react';
const NewCatForm = ({ onPostCat }) => {
  const [name, setName] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();//stop existing form behavior
    const newCat = {
      name,
      personality: '',
      color: '',
      pet_count: 0
    };
    onPostCat(newCat);
    setName(''); //clear out the status of form
  };
  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='input-name'>Cat Name:</label>
        <input 
          type='text' 
          id='input-name' 
          name='name' 
          value={name} 
          onChange={handleChange}/>
      </div>
      <div>
        {/* <input type='submit'>Add Cat</input> */}
        <button className='form-button'>Add Cat</button>
      </div>
    </form>
  );
};

export default NewCatForm;