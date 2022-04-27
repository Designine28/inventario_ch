import React from 'react';
import 'antd/dist/antd.css';
import Link from 'next/link';
import { Layout, Menu } from 'antd';
import { MenuOutlined, TagsOutlined, CloudUploadOutlined, DropboxOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;
function LeftNavbar(){
    return(
        <div className="navcontainer">
            <Layout>
                <Sider width={250} className="site-layout-background">
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{
                        height: '200%',
                        borderRight: 0,
                    }}
                    >
                        <div className="wrapper">
                            <SubMenu key="sub1" icon={<MenuOutlined />} title="Menu de inicio">
                                <Menu.ItemGroup key="g1" title="Opciones">
                                <Menu.Item key="1" icon={<TagsOutlined />}>
                                    <Link href="/ventas">
                                    <a>Ventas</a>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="2" icon={<CloudUploadOutlined />}>
                                    <Link href="/altas">
                                    <a>Altas y bajas</a>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="3" icon={<DropboxOutlined />}>
                                    <Link href="/almacenes">
                                    <a>Almacenes</a>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="4" icon={<SolutionOutlined />}>
                                    <Link href="/reportes">
                                    <a>Reportes</a>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="5" icon={<UserOutlined />}>
                                    <Link href="/trabajadores">
                                    <a>Trabajadores</a>
                                    </Link>
                                </Menu.Item>
                                </Menu.ItemGroup>
                            </SubMenu>
                        </div>
                        
                    </Menu>
                </Sider>
            </Layout>
            
        </div>
    );
}

export default LeftNavbar;