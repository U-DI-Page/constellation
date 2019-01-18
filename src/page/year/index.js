import React from 'react';
import { Row,Col,Rate,Card } from 'antd';
import { 
  OneRow,
  TitleArea,
  ContentArea,
  TxtCard,
  Loading
 } from '../common';


export default class Year extends React.PureComponent{

  render(){
    const { data } = this.props;

    return data ? (
      <ContentArea>
        <Row>
          <Col span={ 21 }>
            <Card size="small" title="运势指数" style={{fontSize:'12px'}}>
              <OneRow>
                <TitleArea>综合指数:</TitleArea>
                { data.general_index }
              </OneRow>
              <OneRow>
                <TitleArea>爱情指数:</TitleArea>
                { data.love_index }
              </OneRow>
              <OneRow>
                <TitleArea>财运指数:</TitleArea>
                { data.money_index }
              </OneRow>
              <OneRow>
                <TitleArea>工作指数:</TitleArea>
                { data.work_index }
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