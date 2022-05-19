
import { useForm } from "react-hook-form";
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios';
import 'antd/dist/antd.css'
import Swal from "sweetalert2";
import { Form, Input, Button, Checkbox } from 'antd';


export default function index() {

  let nombre;
  let apellido;

  
  const onSubmit = event => {
    event.preventDefault() // don't redirect the page
    // where we'll add our form logic
    let nombre = document.getElementById('nombre').value;
    let apellidos = document.getElementById('apellido').value;
    let usuario = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    axios.post('http://localhost:3005/api/usuarios', {
      nombre,
      apellidos,
      usuario,
      password,
  })
  .then(response => {
      const {ok} = response.data;

      console.log(ok);
      if(ok){
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Su registro se ha guardado con exito",
          showConfirmButton: false,
          timer: 1500,
        });
      }else{
        Swal.fire({
          position: "center",
          icon: "warning",
          title: "Su registro no se ha guardado con exito",
          showConfirmButton: false,
          timer: 1500,
        });
      }
  });
  

  }

  return (

    <div>
      <h1 className='centrar'>
        Registrar usuario
      </h1>
      <div className='centered'>

    <Form
    onSubmit={onSubmit}
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
            <Input
                id = "nombre"
                 />
            

            
            
          </Form.Item>
          </div>
          
          <div className='inpu1'>

        <Form.Item
          label="Apellidos"
          name="apellidos"
          rules={[{ required: true, message: 'Porfavor Ingresa tu apellido' }]}
        >
          <Input 
            id = "apellido"
          
          />

          </Form.Item>
          </div>
          <div className='inpu1'>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Porfavor Ingresa tu email' }]}
        >
          <Input
          id="email"/>
        </Form.Item>

          </div>
          <div className='inpu1'>
            
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Porfavor ingresa tu password' }]}
      >
        <Input.Password
        id="password" />
      </Form.Item>
          </div>
          
          

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="submit" onClick={onSubmit} htmlType="submit">
          Guardar
        </Button>
      </Form.Item>
      </Form>
      </div>
    </div>
  );
}