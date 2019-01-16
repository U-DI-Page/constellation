import React from 'react';
import ReactDOM from 'react-dom';
import Carrousel from 'rc-carrousel';

import styles from  './index.scss';


const App=()=>{
  const imgPath='./assets';

  const imageArr = [
    { title:'shuangzi', src:`${ imgPath }/shuangzi.png` },
    { title:'baiyang', src:`${ imgPath }/baiyang.png` },
    { title:'chunv', src:`${ imgPath }/chunv.png` },
    { title:'jingniu', src:`${ imgPath }/jingniu.png` },

    { title:'juxie', src:`${ imgPath }/juxie.png` },
    { title:'mojie', src:`${ imgPath }/mojie.png` },
    { title:'sheshou', src:`${ imgPath }/sheshou.png` },
    { title:'shizi', src:`${ imgPath }/shizi.png` },

    { title:'shuangyu', src:`${ imgPath }/shuangyu.png` },
    { title:'shuiping', src:`${ imgPath }/shuiping.png` },
    { title:'tianping', src:`${ imgPath }/tianping.png` },
    { title:'tianxie', src:`${ imgPath }/tianxie.png` },

  ]
  return(
    <div className={ styles.box }>
      <Carrousel
        width={ 500 }
        perSideNum={ 3 }
        perSideWidth={ 100 }
        scale={ 0.8 }
        imageArr={ imageArr }
      />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));
