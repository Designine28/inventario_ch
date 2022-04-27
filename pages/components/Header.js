import React from 'react';
import 'antd/dist/antd.css';
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Space } from 'antd';
import { UserAddOutlined, PlusOutlined } from '@ant-design/icons';

const { Option } = Select;
class DrawerForm extends React.Component {
    state = { visible: false };
  
    showDrawer = () => {
      this.setState({
        visible: true,
      });
    };
  
    onClose = () => {
      this.setState({
        visible: false,
      });
    };
  
    render() {
      return (
        <>
        <div className="headcontainer">
            <div className="headwrapper">
                <Button type="primary" shape="round" className="margen" onClick={this.showDrawer} icon={<UserAddOutlined />}>
                    Agregar nuevo trabajador
                </Button>
                <Drawer
                    title="Agregar un nuevo trabajador"
                    width={720}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    bodyStyle={{ paddingBottom: 80 }}
                    extra={
                    <Space>
                        <Button onClick={this.onClose}>Cancelar</Button>
                        <Button onClick={this.onClose} type="primary">
                            Agregar
                        </Button>
                    </Space>
                    }
                >
                    <Form layout="vertical" hideRequiredMark>
                    <Row gutter={16}>
                        <Col span={12}>
                        <Form.Item
                            name="name"
                            label="Id"
                            rules={[{ required: true, message: 'Please enter user name' }]}
                        >
                            <Input placeholder="Please enter user name" />
                        </Form.Item>
                        </Col>
                        <Col span={12}>
                        <Form.Item
                            name="url"
                            label="Nombre"
                            rules={[{ required: true, message: 'Please enter url' }]}
                        >
                            <Input placeholder="Please enter url" />
                        </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                        <Form.Item
                            name="owner"
                            label="Puesto"
                            rules={[{ required: true, message: 'Please select an owner' }]}
                        >
                            <Select placeholder="Please select an owner">
                            <Option value="1">Encargado de almacen</Option>
                            <Option value="2">Vendedor</Option>
                            </Select>
                        </Form.Item>
                        </Col>
                        <Col span={12}>
                        <Form.Item
                            name="type"
                            label="Local"
                            rules={[{ required: true, message: 'Please choose the type' }]}
                        >
                            <Select placeholder="Please choose the type">
                            <Option value="1">Local 1</Option>
                            <Option value="2">Local 2</Option>
                            <Option value="3">Local 3</Option>
                            <Option value="4">Local 4</Option>
                            <Option value="5">Local 5</Option>
                            <Option value="6">Local 6</Option>
                            <Option value="7">Local 7</Option>
                            </Select>
                        </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                        <Form.Item
                            name="approver"
                            label="Usuario"
                            rules={[{ required: true, message: 'Please choose the approver' }]}
                        >
                            <Select placeholder="Please choose the approver">
                            <Option value="jack">Jack Ma</Option>
                            <Option value="tom">Tom Liu</Option>
                            </Select>
                        </Form.Item>
                        </Col>
                        <Col span={12}>
                        <Form.Item
                            name="dateTime"
                            label="Contraseña"
                            rules={[{ required: true, message: 'Please choose the dateTime' }]}
                        >
                            <DatePicker.RangePicker
                            style={{ width: '100%' }}
                            getPopupContainer={trigger => trigger.parentElement}
                            />
                        </Form.Item>
                        </Col>
                    </Row>
                    </Form>
                </Drawer>
            </div>
        </div>
          
        </>
      );
    }
  }
  
  export default () => <DrawerForm />;