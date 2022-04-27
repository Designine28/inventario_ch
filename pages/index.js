import { useForm } from "react-hook-form";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import Head from 'next/head'
import Image from 'next/image'
import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';

export default function index() {
  const {
    handleSubmit,  
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log("estos son los datos",data);
    axios.post('http://localhost:3005/api/usuarios', {
        nombre: data.firstName,
        apellidos: data.lastName,
        usuario: data.Email,
        password: data.Password,
    })
    .then(response => {
        console.log(response);
    });
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Su registro se ha guardado con exito",
      showConfirmButton: false,
      timer: 1500,
    });
  } // Su funcion de envio de formulario que invoca despues de una validacion exitosa

  //console.log(watch("example"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            label="Nombre(s)"
            name="nombre"
            rules={[{ required: true, message: 'Porfavor Ingresa tu usuario' }]}
          >
            <Input />

            
            
          </Form.Item>
          </div>
          
          <div className='inpu1'>

        <Form.Item
          label="Apellidos"
          name="apellidos"
          rules={[{ required: true, message: 'Porfavor Ingresa tu apellido' }]}
        >
          <Input />
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
    </form>
  );
}
