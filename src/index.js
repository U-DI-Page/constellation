import React from 'react';
import ReactDOM from 'react-dom';
import Page from './page';
// 样式
import styles from  './index.scss';


const App=()=>{
  
  return(
    <div className={ styles.box }>
      <Page />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));
