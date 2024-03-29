import React from 'react';
import { Row,Col,Rate,Card } from 'antd';
import { 
  OneRow,
  TitleArea,
  ContentArea,
  TxtCard,
  Loading
 } from '../common';

/**
 * 本周运势
 */
export default class Week extends React.PureComponent{

  render(){
    const { data } = this.props;

    return data ? (
      <ContentArea>
        <Row>
            <Col span={ 10 }>
              <Card size="small" title="运势指数" style={{fontSize:'12px'}}>
                <OneRow>
                  <TitleArea>综合指数:</TitleArea>
                  <Rate count={ 5 } value={ data.summary_star }  disabled />
                </OneRow>
                <OneRow>
                  <TitleArea>爱情指数:</TitleArea>
                  <Rate count={ 5 } value={ data.love_star }  disabled />
                </OneRow>
                <OneRow>
                  <TitleArea>财运指数:</TitleArea>
                  <Rate count={ 5 } value={ data.money_star }  disabled />
                </OneRow>
                <OneRow>
                  <TitleArea>工作指数:</TitleArea>
                  <Rate count={ 5 } value={ data.work_star }  disabled />
                </OneRow>
              </Card>
            </Col>
            <Col span={ 10 } offset={ 1 }>
              <Card size="small" title="大师指点" style={{ fontSize:'12px' }}>
                <OneRow>
                  <TitleArea>贵人星座:</TitleArea>{ data.grxz }
                </OneRow>
                <OneRow>
                  <TitleArea>小人星座:</TitleArea>{ data.xrxz }
                </OneRow>
                <OneRow>
                  <TitleArea>幸运日期:</TitleArea>{ data.lucky_day }
                </OneRow>
                {/* <OneRow>
                  <TitleArea>幸运方位:</TitleArea>{ data.lucky_direction }
                </OneRow> */}
                <OneRow>
                  <TitleArea>幸运颜色:</TitleArea>{ data.lucky_color }
                </OneRow>
              </Card>
            </Col>
          </Row>
          <TxtCard title="运势简评" content={ data.general_txt } />
          <TxtCard title="爱情运势" content={ data.love_txt } />
          <TxtCard title="工作运势" content={ data.work_txt } />
          <TxtCard title="财富运势" content={ data.money_txt } />
          <TxtCard title="健康运势" content={ data.health_txt } />
      </ContentArea>
    ):<Loading />
  }
}