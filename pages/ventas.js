import React, { useState } from 'react';
import { Form, Input, Button, Cascader, DatePicker, } from 'antd';
import Link from 'next/link';

export default function ventas() {

  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');

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
      
  
  return (
    <Form
      {...formItemLayout}
      layout={formLayout}
      form={form}
      initialValues={{
        layout: formLayout,
      }}
      onValuesChange={onFormLayoutChange}
    >
      <div className="login">
        <h1>VENTAS</h1>
      </div>
      <Form.Item label="Id ventas">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Folio">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Id local">
      <Cascader
        options={[
          {
            value: '1',
            label: 'Local 1',
          },
          {
            value: '2',
            label: 'Local 2',
          },
          {
            value: '3',
            label: 'Local 3',
          },
          {
            value: '4',
            label: 'Local 4',
          },
          {
            value: '5',
            label: 'Local 5',
          },
          {
            value: '6',
            label: 'Local 6',
          },
          {
            value: '7',
            label: 'Local 7',
          },
        ]}  placeholder="Seleccione un local"
        />
      </Form.Item>
      <Form.Item label="Codigo barra">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Precio">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Cantidad">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Fecha">
        <DatePicker />
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Button type="primary">Agregar</Button>
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Button type="primary">Terminar</Button>
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Link href="/Dashboard">
          <a>Regresar</a>
        </Link>
      </Form.Item>
      
    </Form>
  );
}