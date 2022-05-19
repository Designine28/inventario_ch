import Swal from "sweetalert2";
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios';
import 'antd/dist/antd.css'
import { Form, Input, Button, Checkbox } from 'antd';
import Router , {useRouter}  from 'next/router';



  
export default function iniciarsesion() {
  const router = useRouter();
  const onSubmit = event => {
    event.preventDefault() // don't redirect the page
    // where we'll add our form logic
    
    let usuario = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    axios.post('http://localhost:3005/api/login', {
     
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
          title: "Has iniciado sesion correctamente",
          confirmButtonText:'Exito',
          showConfirmButton: true,
          timer: 5000,

        }).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    
  } else if (result.isDenied) {
    
  }
});
      }else{
        Swal.fire({
          position: "center",
          icon: "warning",
          title: "Credenciales Incorrectas",
          showConfirmButton: false,
          timer: 1500,
        });
      }
  });
  

  }


  return (
    <div>
      <h1 className='centrar'>
        Iniciar sesion
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
          <Input 
          id = "email"/>
        </Form.Item>

          </div>
          <div className='inpu1'>
            
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Porfavor ingresa tu password' }]}
      >
        <Input.Password 
        id = "password"/>
      </Form.Item>
          </div>
          
          

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
        
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <span className='button'></span>
        <Button type="button"  href="ventas">
          Iniciar
          
        </Button>

        
      </Form.Item>
      </Form>
      </div>
    </div>
  );
};