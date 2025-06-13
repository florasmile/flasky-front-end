import Cat from './Cat.jsx';
import PropTypes from 'prop-types';

const CatList = (props) => {
  const catComponents = props.catData.map((cat) => {
      return <Cat 
        key={cat.id} 
        id={cat.id}
        name={cat.name}
        personality={cat.personality}
        color={cat.color}
        caretaker={cat.caretaker}
        petCount={cat.petCount}
        onPet={props.onPetCat}
        onUnregister={props.onUnregisterCat}
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
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    caretaker: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    personality: PropTypes.string.isRequired,
    petCount: PropTypes.number.isRequired,
  })).isRequired,
  onPetCat: PropTypes.func.isRequired,
  onUnregisterCat: PropTypes.func.isRequired,
};

export default CatList;