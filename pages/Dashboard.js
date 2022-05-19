import React from 'react';
import Link from 'next/link';
import { Layout, Menu, Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Space } from 'antd';
import { TagsOutlined, CloudUploadOutlined, DropboxOutlined, SolutionOutlined, UserOutlined, UserAddOutlined } from '@ant-design/icons';


const { Header, Content, Sider } = Layout;
const { Option } = Select;
class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    setState({
      collapsed,
    });
  };
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
    const { collapsed } = this.state;
    return (
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo"><h1 className="text">Chacharas</h1></div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

              <Menu.Item key="1" icon={<TagsOutlined />}>
                <Link href="/ventas">
                  <a>Ventas</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<CloudUploadOutlined />}>
                <Link href="/altas">
                  <a>Altas</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<CloudUploadOutlined />}>
                <Link href="/bajas">
                  <a>Bajas</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<DropboxOutlined />}>
                <Link href="/almacenes">
                  <a>Almacenes</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="5" icon={<SolutionOutlined />}>
                <Link href="/reportes">
                  <a>Reportes</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="6" icon={<UserOutlined />}>
                <Link href="/trabajadores">
                  <a>Trabajadores</a>
                </Link>
              </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
              margin: '25px 0',
            }}
          >
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
                              rules={[{ required: true,
                                minLength: 5,
                                required: '^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$'}]}
                          >
                              <Input placeholder="Ingrese su id" />
                          </Form.Item>
                          </Col>
                          <Col span={12}>
                          <Form.Item
                              name="nombre"
                              label="Nombre"
                              rules={[{ required: true, message: 'Please enter url' }]}
                          >
                              <Input placeholder="Ingrese el nombre" />
                          </Form.Item>
                          </Col>
                      </Row>
                      <Row gutter={16}>
                          <Col span={12}>
                          <Form.Item
                              name="puesto"
                              label="Puesto"
                              rules={[{ required: true, message: 'Please select an owner' }]}
                          >
                              <Select placeholder="Seleccione un tipo de puesto">
                              <Option value="1">Encargado de almacen</Option>
                              <Option value="2">Vendedor</Option>
                              </Select>
                          </Form.Item>
                          </Col>
                          <Col span={12}>
                          <Form.Item
                              name="local"
                              label="Local"
                              rules={[{ required: true, message: 'Please choose the type' }]}
                          >
                              <Select placeholder="Seleccione el local">
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
                            name="usuario"
                            label="Usuario"
                            rules={[{ required: true, message: 'Please choose the approver' }]}
                          >
                            <Select placeholder="Elige un tipo de usuario">
                              <Option value="jack">Administrador</Option>
                              <Option value="tom">Invitado</Option>
                            </Select>
                          </Form.Item>
                          </Col>
                          <Col span={12}>
                          <Form.Item
                            name="contraseña"
                            label="Contraseña"
                            rules={[{ required: true, message: 'Porfavor ingresa tu password' }]}
                          >
                            <Input.Password />
                          </Form.Item>
                          </Col>
                      </Row>
                      </Form>
                  </Drawer>
              </div>
            </div>
          </Header>
          <Content
            style={{
              margin: '0 16px',
            }}
          >
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              Content.
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo ;