import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const[fname, setfname ]= useState();
  const handler = e =>
  {
    setfname (e.target.value);
    
  }

  const [ lname, setlname] = useState();
  const handle = e=>
  {
    setlname (e.target.value);
  }
  return (
<>
    <div className='inputs'>
    <input type="text" placeholder='firstName' value={fname} onChange ={handler} />
    
    </div>
    <div>
    <input type="text" placeholder='lastname' value={lname} onChange = {handle} />
    </div>
    <h3> firstName:{fname}</h3>
    <h3> lastName:{lname} </h3>
    </>
  );
}

export default App;
