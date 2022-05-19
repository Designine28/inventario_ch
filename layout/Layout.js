import React from 'react';
import Link from 'next/link';
import { Layout, Menu } from 'antd';
import { TagsOutlined, CloudUploadOutlined, DropboxOutlined, SolutionOutlined, UserOutlined,TeamOutlined,ShopOutlined   } from '@ant-design/icons';


const { Sider } = Layout;
const Layouts=({children})=> {
    return (
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider>
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
              <Menu.Item key="7" icon={<TeamOutlined />}>
                <Link href="/clientes">
                  <a>Clientes</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="8" icon={<ShopOutlined />}>
                <Link href="/locales">
                  <a>Locales</a>
                </Link>
              </Menu.Item>
              
          </Menu>
        </Sider>
        <Layout className="site-layout">{children}</Layout>
      </Layout>
    );
  
}

export default Layouts;