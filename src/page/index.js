import React, { Fragment } from 'react';
import Carrousel from 'rc-carrousel';
import request from '../utils/request';
// 图片路径
import { imageArr } from './config';
// 样式
import Styles from './index.module.scss';


export default class Page extends React.PureComponent{

  componentDidMount(){

    request('star').then(res=>{
      console.log(res)
    })
  }

  render(){

    return(
      <Fragment>
        {/* 头部 */}
        <div className={ Styles.header }>
          <Carrousel
            width={ 500 }
            perSideNum={ 3 }
            perSideWidth={ 100 }
            scale={ 0.8 }
            imageArr={ imageArr }
          />
        </div>
        <div className={ Styles.body }>

        </div>
      </Fragment>
    ) 
  }
}