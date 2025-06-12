import PropTypes from 'prop-types';
import { useState } from 'react';

const Cat = ({ name, caretaker, color, personality }) => {
  const { petCount, setPetCount } = useState(0);

  const increasePets = () => {
    setPetCount(prevPetCount => prevPetCount + 1);
  };

  const handlePetCat = () => {
    increasePets();
  };
  return (
      <li className='cat'>
          <h2>Name: {name}</h2>
          <h2>Color: {color}</h2>
          <h2>Personality: {personality}</h2>
          <h2>caretaker: {caretaker}</h2>
          <h2># of Pets {petCount}</h2>
          <button onClick={event => handlePetCat()}>Pet</button>
      </li>
  );
};
Cat.propTypes = {
  name: PropTypes.string.isRequired,
  caretaker: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  personality: PropTypes.string.isRequired,
};

export default Cat;
