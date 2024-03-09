import { useState } from 'react';
import './App.css';
import Data from './components/Data';
import Lists from './components/Lists';

function App() {

  const [people,setPeople] = useState(Data);

  return (
    <div className='container'>
      <h3>Total {people.length} Students</h3>
      <Lists people={people}/>
      <button onClick={()=>setPeople([])}>Clear All</button>
      
    </div>
  )
}

export default App;
