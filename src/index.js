import React from 'react';
import ReactDOM from 'react-dom';
import Page from './page';

// 样式
import Styles from  './index.scss';


const App=()=>{
  
  return(
    <div className={ Styles.box }>
      <Page />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));
