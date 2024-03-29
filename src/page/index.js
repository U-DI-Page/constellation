import React, { Fragment } from 'react';
import Carrousel from 'rc-carrousel';
import request from '../utils/request';
import { getLocalStorage, setLocalstorage } from '../utils/util';
import { Tabs } from 'antd';
import Day from './day';
import Tomorrow from './tomorrow';
import Week from './week';
import Month from './month';
import Year from './year';

// 图片路径
import { imageArr } from './config';
// 样式
import Styles from './index.module.scss';

const TabPane = Tabs.TabPane;

/**
 * 页面主入口
 */
export default class Page extends React.PureComponent{
  constructor(props){
    super(...arguments);

    this.state = {
      data: {}
    };
  }

  componentDidMount(){

    this.getData({ star: imageArr[0].title });
    // 减少接口请求次数
    // const data = getLocalStorage('data');
    // if(data){
    //   this.setState({ data: JSON.parse(data) });
    // }else{
    //   this.getData({ star: imageArr[0] });
    // }
  }

  // 切换星座
  handleChange=(c)=>{
    this.getData({ star: c.title })
  }

  // 获取数据
  getData=( parmas={} )=>{
    request('star', parmas).then(res=>{
      if(res.status === 200){
        this.setState({
          data:res.data.showapi_res_body
        })
      }
    })
  }

  render(){
    const { data } = this.state;

    return(
      <Fragment>
        {/* 头部 */}
        <div className={ Styles.header }>
          <Carrousel
            align="bottom"
            width={ 500 }
            perSideNum={ 3 }
            perSideWidth={ 100 }
            gradient={ true }
            scale={ 0.7 }
            imageArr={ imageArr }
            onChange={ this.handleChange }
          />
        </div>
        {/* 内容 */}
        <div className={ Styles.body }>
          <Tabs 
            defaultActiveKey="1" 
            tabBarStyle={{ textAlign: 'center', color: '#fff' }}
          >
            <TabPane tab="今日" key="1">
              <Day data={ data.day } />
            </TabPane>
            <TabPane tab="明日" key="2">
              <Tomorrow data={ data.tomorrow } />
            </TabPane>
            <TabPane tab="本周" key="3">
              <Week data={ data.week } />
            </TabPane>
            <TabPane tab="本月" key="4">
              <Month data={ data.month } />
            </TabPane>
            <TabPane tab="今年" key="5">
              <Year data={ data.year } />
            </TabPane>
          </Tabs>
        </div>
      </Fragment>
    ) 
  }
}