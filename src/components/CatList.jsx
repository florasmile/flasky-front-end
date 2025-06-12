import Cat from './Cat.jsx';
import PropTypes from 'prop-types';

const CatList = ({ catData }) => {
  const catComponents = catData.map((cat, index) => {
    return <Cat 
      key={index} 
      name={cat.name}
      personality={cat.personality}
      color={cat.color}
      caretaker={cat.caretaker}
    />;
  });
  return (
    <>
      <h1>Cat List</h1>
      <ul>
          {catComponents}
      </ul>
    </>
  );
};
CatList.propTypes = {
  catData: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    caretaker: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    personality: PropTypes.string.isRequired,
  })).isRequired,
};

export default CatList;