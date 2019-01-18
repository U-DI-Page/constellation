import React from 'react';
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
  <div style={{ height:'310px',overflow:'auto' }}>
    <Col span={ 24 } offset={ 1 }>
      { props.children }
    </Col>
  </div>
);

// 行
export const OneRow=(props)=>(
  <Row { ...props } style={{ height:'30px',lineHeight:'30px' }}>
    { props.children }
  </Row>
  
)
// 标题
export const TitleArea=(props)=>(
  <span { ...props } style={{ marginRight:'3px' }}>
    { props.children  }
  </span>
)