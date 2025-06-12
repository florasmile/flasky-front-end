import CatList from './components/CatList';
import './App.css';
import DATA from './data.js';

function App() {
  console.log(DATA);
  return (
    <main id="root">
      <CatList catData={DATA}/>        
    </main>
  );
}

export default App;
