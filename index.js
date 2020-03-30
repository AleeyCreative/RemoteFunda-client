import React,{useState, useEffect} from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';


  function App(){
    const [name, setName] = useState('Aleeycreative')
    return (
      <div>
        <Hello name={name} />
        <h2> Welcome to our application</h2>
      </div>
    );
  }


render(<App />, document.getElementById('root'));
