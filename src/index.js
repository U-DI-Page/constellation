import React from 'react';
import ReactDOM from 'react-dom';

import avatar from './assets/hsboy.jpg';
import './index.scss';


const App=()=>{
  return(
    <div className="box">
      <p className="title">Hello Chrome</p>
      <img className="avatar" src={ avatar } />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));
