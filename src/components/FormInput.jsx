import PropTypes from 'prop-types';

const FormInput = ({ inputName, value, handleChange}) => {
  return (
    <div>
        <label htmlFor={`input-${inputName}`}>Cat {inputName}:</label>
        <input 
          type='text' 
          id={`input-${inputName}`}
          name={inputName}
          value={value} 
          onChange={handleChange}/>
    </div>
  );
};


FormInput.propTypes = {
  inputName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default FormInput;