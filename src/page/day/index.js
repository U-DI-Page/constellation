import React from 'react';
import { Row,Col,Rate,Spin } from 'antd';

// 样式
import Styles from './day.scss';

/**
 * 每日运势
 */
export default class Day extends React.PureComponent{

  render(){
    const { data } = this.props;
    console.log(data)

    return data?(
      <div className={ Styles.dayWrapper }>
        <Col span={ 20 } offset={ 1 }>
          <Row>
            <Col span={ 12 }>
              综合指数:&nbsp;<Rate count={ 5 } value={ data.summary_star }  disabled />
            </Col>
            <Col>
              贵人星座:&nbsp;
            </Col>
          </Row>
          <Row>
            爱情指数:&nbsp;<Rate count={ 5 } value={ data.love_star }  disabled />
          </Row>
          <Row>
            财运指数:&nbsp;<Rate count={ 5 } value={ data.money_star }  disabled />
          </Row>
          <Row>
            工作指数:&nbsp;<Rate count={ 5 } value={ data.work_star }  disabled />
          </Row>
        </Col>
      </div>
    ):
    <Spin tip="loading" />
  }
}