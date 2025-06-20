import CatList from './components/CatList';
import NewCatForm from './components/NewCatForm';
import './App.css';
// import DATA from './data.json';
import { useState, useEffect } from 'react';
import axios from 'axios';

const kBaseUrl = 'http://127.0.0.1:5000';

const postCatApi = (newCatData) => {
  return axios.post(`${kBaseUrl}/cats`, newCatData)
    .then( response => convertFromApi(response.data))
    .catch(error => {
      console.log(error);
    });
};
//gets all the cats
const getAllCatsApi = () => {
  return axios.get(`${kBaseUrl}/cats`)
    .then(response => {
      return response.data.map(convertFromApi);
    })
    .catch(error => {
      console.error('Error fetching cats:', error); 
      return [];
    });

};

const convertFromApi = (apiCat) => {
  //destructure cat and create variables
  //use variables to create a new cat object that has petCount as the name of the attribute
  const { id, name, color, personality, pet_count, caretaker } = apiCat;
  const newCat = {id, name, color, personality, petCount: pet_count, caretaker};
  return newCat;
};
const petCatApi = (id) => {
  return axios.patch(`${kBaseUrl}/cats/${id}/pet`)
    .then(response => {
      return convertFromApi(response.data);
    })
    .catch(error => {
      console.error('Error petting cat:', error);
      return null;
    }); 
};
const removeCatApi = (id) => {
  return axios.delete(`${kBaseUrl}/cats/${id}`)
    .catch(error => {
      console.log(error);
    });
};
  
const getTotalCount = (catData) => {
  let petCounts = 0;
  catData.forEach(cat => {
    petCounts += cat.petCount;
  });
  return petCounts;
};
function App() {
  const [catData, setCatData ] = useState([]);
  // calculate total num of cats
  // iterate through the catData and add up all petCount
  // pass it as a variable
  const totalPets = getTotalCount(catData);

  const getAllCats = () => {
    // invoke api helper to call backend
    //use results to update state
    return getAllCatsApi()
      .then(cats => setCatData(cats));
  };

  useEffect(() => {
    getAllCats();
  }, []); // empty dependency array means this runs once when the component mounts

  const petCat = (id) => {
    // call the set state of the data
    // setState(value => ())
      // within the update function
      //  copy the existing array, looking for the matching catId
      // if matches, create a new record with updated petCount
      // if not, reuse the existing record
      return petCatApi(id)
        .then(catResult => {
          setCatData(catData => {
            return catData.map(cat => {
              if (cat.id === catResult.id) {
                return catResult;
              } else {
                return cat;
              }
            });
          });
    });};  
  const removeCat = (id) => {
    return removeCatApi(id)
      .then(setCatData(catData => catData.filter(cat => cat.id !== id)));    
  };

  const postCat = (newCatData) => {
    postCatApi(newCatData);
  };

  return (
    <div className='container'>
      <h2>Total number of Pets across all cats: {totalPets} </h2>
      <CatList 
        catData={catData} 
        onPetCat={petCat}
        onUnregisterCat={removeCat}/> 
      <NewCatForm onPostCat={postCat}/>       
    </div>
  );
}

export default App;
