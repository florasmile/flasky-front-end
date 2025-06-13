import CatList from './components/CatList';
import './App.css';
import DATA from './data.json';
import { useState } from 'react';

const getTotalCount = (catData) => {
  let petCounts = 0;
  catData.forEach(cat => {
    petCounts += cat.petCount;
  });
  return petCounts;
};
function App() {
  const [catData, setCatData ] = useState(DATA);
  // calculate total num of cats
  // iterate through the catData and add up all petCount
  // pass it as a variable
  const totalPets = getTotalCount(catData);
  
  const petCat = (id) => {
    // call the set state of the data
    // setState(value => ())
      // within the update function
      //  copy the existing array, looking for the matching catId
      // if matches, create a new record with updated petCount
      // if not, reuse the existing record
      setCatData(catData => {
        return catData.map(cat => {
          if (cat.id === id) {
            return {...cat, petCount: cat.petCount + 1};
          } else {
            return cat;
          }
        });
      });
  };
  const removeCat = (id) => {
    setCatData(catData => {
      return catData.filter(cat => {
        return cat.id !== id;
      });
    });
  };
  return (
    <>
      <h2>Total number of Pets across all cats: {totalPets} </h2>
      <CatList 
        catData={catData} 
        onPetCat={petCat}
        onUnregisterCat={removeCat}/>        
    </>
  );
}

export default App;
