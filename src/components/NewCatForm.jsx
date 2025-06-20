import { useState } from 'react';
const kDefaultFormState = {
  name: '',
  personality: '',
  color: '',
};
const NewCatForm = ({ onPostCat }) => {
  const [formData, setFormData] = useState(kDefaultFormState);
  // const [name, setName] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();//stop existing form behavior
    onPostCat(formData);
    setFormData(kDefaultFormState); //clear out the status of form
  };
  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setFormData(formData => {
      return { ...formData, [inputName]: inputValue };
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='input-name'>Cat Name:</label>
        <input 
          type='text' 
          id='input-name' 
          name='name' 
          value={formData.name} 
          onChange={handleChange}/>
      </div>
       <div>
        <label htmlFor='input-perosnality'>Cat personality:</label>
        <input 
          type='text' 
          id='input-personality' 
          name='personality' 
          value={formData.personality} 
          onChange={handleChange}/>
      </div>
       <div>
        <label htmlFor='input-color'>Cat Color:</label>
        <input 
          type='text' 
          id='input-color' 
          name='color' 
          value={formData.color} 
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