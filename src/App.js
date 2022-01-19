import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
const App = () =>{

  const [State,setState]= useState(0);
  const incrementCount =()=>{setState(State+1)};
  // eslint-disable-next-line no-unused-expressions
  const decrementCount =()=>{(State> 0) ? setState(State-1) : 0 };
  return (
    <div className="App">
          React Basics....
           <h2>Counter App</h2>
        <button onClick={incrementCount}>+</button>
         <h2>{State}</h2>
         <button onClick={decrementCount}>-</button> 
      
    </div>
  );
}

export default App;
