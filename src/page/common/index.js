import React,{ Fragment } from 'react';
import { Row,Col,Card,Spin } from 'antd';

// loading
export const Loading=(props)=>(
  <div style={{ 
    width:'100%',
    textAlign:'center'
  }}>
    <Spin size="large"/>
  </div>
)

// 运势简评
export const TxtCard=(props)=>(
  <Row>
    <Col span={ 21 }>
      <Card 
        title={ props.title } 
        size="small" 
        style={{ width:'100%',marginTop:'10px',fontSize:'12px' }} 
      >
        <span>
          { props.content }
        </span>
      </Card>
    </Col>
  </Row>
)

// 内容区域
export const ContentArea=(props)=>(
  <Fragment>
    <div style={{
      position:'absolute',
      height:'100%',
      width:'20px',
      right:0,
      backgroundColor:'#7afcb2'
    }}></div>
    <div style={{ height: '310px', overflowY: 'auto', overflowX: 'hidden' }}>
      <Col span={24} offset={1}>
        {props.children}
      </Col>
    </div>
  </Fragment>

);

// 行
export const OneRow=(props)=>(
  <Row 
    { ...props } 
    style={{ 
      minHeight:'30px',
      height:'auto',
      lineHeight:'30px' 
      }}>
    { props.children }
  </Row>
  
)
// 标题
export const TitleArea=(props)=>(
  <span { ...props } style={{ marginRight:'3px' }}>
    { props.children  }
  </span>
)