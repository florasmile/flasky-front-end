import { useState } from 'react';
import FormInput from './FormInput';
import PropTypes from 'prop-types';

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

  const generateInputs = () => {
    //create a list of input component for each input field
    return Object.entries(formData).map(([inputName, value]) => {
      return <FormInput 
        key={inputName}
        inputName={inputName} 
        value={value} 
        handleChange={handleChange} />;
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      {generateInputs()}
      <div>
        {/* <input type='submit'>Add Cat</input> */}
        <button className='form-button'>Add Cat</button>
      </div>
    </form>
  );
};

NewCatForm.propTypes = {
  onPostCat: PropTypes.func.isRequired,
};

export default NewCatForm;