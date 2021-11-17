import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Authentication from './components/auth/Authentication';
import Maze from './components/maze/maze';

function Neelavannan() {
  
  const[loadMaze,setLoadMaze] = useState(false);
  function validate(creds,name){
    console.log(creds)
    if(creds.password === "admin" && creds.username==='admin')
      setLoadMaze(true)
      else
      alert('wrong creds')
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {!loadMaze && <Authentication getCredentails={validate} name='neelavannan'/>}
          {loadMaze && <Maze />}
        </p>        
      </header>
    </div>
  );
}

export default Neelavannan;
