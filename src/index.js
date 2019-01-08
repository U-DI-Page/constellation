import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';


const App=()=>{
  return(
    <div className="box">我是一个粉刷匠</div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));
// const createDom=function(){
//   const dom=document.createElement('div');
//   dom.innerText='我是一个粉刷匠';
//   dom.className='box'
//   document.body.append(dom);
// }

// createDom();