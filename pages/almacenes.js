import Layouts from '../layout/Layout';
import React from 'react';
import 'antd/dist/antd.css';
import { Form,Col, Row, Input, Button } from 'antd';
import Link from 'next/link';

class DrawerForm extends React.Component {
  render() {
    return(
      <Layouts>
        <>
        <div>
          <h1 className='centra'>
            Almacenes
          </h1>
          <div className="centered">
            <div className="inpu1">
              <Form layout="vertical" hideRequiredMark>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      name="id"
                      label="Id producto"
                      rules={[{ required: true, message: 'Please enter user name' }]}
                    >
                      <Input placeholder="" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="producto"
                      label="Producto"
                      rules={[{ required: true, message: 'Please enter url' }]}
                    >
                      <Input placeholder="" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      name="codigo"
                      label="Codigo barra"
                      rules={[{ required: true, message: 'Please select an owner' }]}
                    >
                      <Input placeholder=""/>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="marca"
                      label="Marca"
                      rules={[{ required: true, message: 'Please choose the type' }]}
                    >
                      <Input placeholder="" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      name="modelo"
                      label="Modelo"
                      rules={[{ required: true, message: 'Please choose the approver' }]}
                    >
                      <Input placeholder="" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="precio"
                      label="Precio"
                      rules={[{ required: true, message: 'Please choose the dateTime' }]}
                    >
                      <Input placeholder="" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="descripcion"
                      label="Descripcion"
                      rules={[{ required: true, message: 'Please choose the dateTime' }]}
                    >
                      <Input placeholder="" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="cantidad"
                      label="Cantidad"
                      rules={[{ required: true, message: 'Please choose the dateTime' }]}
                    >
                      <Input placeholder="
                    " />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                      <span className='button'></span>
                      <Button type="primary" htmlType="submit">
                        Guardar
                      </Button> 
                    </Form.Item>
                    <Form.Item>
                      
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </div>
        </>
      </Layouts>
    );
  }
}
export default DrawerForm ;