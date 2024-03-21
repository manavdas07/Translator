import React  from 'react';
import './App.css';
import Left from './Components/Left'
import Right from './Components/Right'

function App() {
  return (
    <div className="App_container">
       <div className='a_header'>Translator</div>
       <div className='a_body'>
         <div className='a_body_1'>
           <Left/>
         </div>
         <div className='a_body_2'>
          <Right/>
         </div>
       </div>
       <button className='trbtn'>Translate</button>
    </div>
  );
}

export default App;
