import Layouts from '../layout/Layout';
import React, { useState } from 'react';
import {  Table,Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Space} from 'antd';
import {  UserAddOutlined } from '@ant-design/icons';

import Link from 'next/link';

const FormLayoutDemo = () => {
const [visible, setVisible] = React.useState(false);
const showDrawer = () => {
  setVisible(true);
};
const onClose = () => {
  setVisible(false);
};

const state = { visible: false }; 
  const { Option } = Select;
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');
  const onSearch = value => console.log(value);
  const { Search } = Input;

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;
      const columns = [
        {
          title: 'Nombre',
          dataIndex: 'nombre',
          key: 'nombre',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Apellido',
          dataIndex: 'apellido',
          key: 'apellido',
        },
        {
          title: 'Usuario',
          dataIndex: 'usuario',
          key: 'usuario',
        },
        {
          title: 'Password',
          dataIndex: 'password',
          key: 'password',
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <a>Invite {record.name}</a>
              <a>Delete</a>
            </Space>
          ),
        },
      ];
    return (
      <Layouts>
        <Form
          {...formItemLayout}
          layout={formLayout}
          form={form}
          initialValues={{
            layout: formLayout,
          }}
          onValuesChange={onFormLayoutChange}
        >
          <div className='center'>
          <h1>Locales</h1>
          <Form.Item label="Nombre">

            <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
            />
          </Form.Item>
          </div>
             
          <div className='table'>
          <Table columns={columns} />
          </div>
          <Form.Item {...buttonItemLayout}>
            
            
          </Form.Item>
    </Form>
      </Layouts>
    );
};

export default FormLayoutDemo ;