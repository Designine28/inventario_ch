import Swal from 'sweetalert2/dist/sweetalert2.js'
import Head from 'next/head'
import Image from 'next/image'

import 'antd/dist/antd.css'
import { Form, Input, Button, Checkbox } from 'antd';




  
export default function Home() {

  
  return (
    <div>
      <h1 className='centra'>
        Registrar usuario
      </h1>
      <div className='centered'>

    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}

      autoComplete="off"
      >
        
          <div className='inpu1'>
              <Form.Item
            l
          >
            

            
            
          </Form.Item>
          </div>
          
          <div className='inpu1'>

        <Form.Item
          
        >
         
          </Form.Item>
          </div>
          <div className='inpu1'>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Porfavor Ingresa tu email' }]}
        >
          <Input />
        </Form.Item>

          </div>
          <div className='inpu1'>
            
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Porfavor ingresa tu password' }]}
      >
        <Input.Password />
      </Form.Item>
          </div>
          
          

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
        
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <span className='button'></span>
        <Button type="primary" htmlType="submit">
          Submit
          
        </Button>
        
      </Form.Item>
      </Form>
      </div>
    </div>
  );
};