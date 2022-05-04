import React, { useState, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginForm = (props) => {
    const {onSubmitProp}=props;

    return (
        <div >
          <Formik
          initialValues={{
          email:'',
          password:'',
        }}
        validationSchema={Yup.object().shape({
            email: Yup.string()
            // .email("Correo no valido")
            // .min(3, "Este correo electrónico es incorrecto")
            // .required("Por favor, ingresa un correo electrónico válido"),
            
            // password: Yup.string()
            // .min(8, "La clave debe contener más de 8 caractes")
            // .required("Por favor ingrese una contraseña")
        })}

        onSubmit={(values, {setSubmitting}) =>{
            
            const timeOut = setTimeout(( )=>{
                
                onSubmitProp(values);
                setSubmitting(false);
                clearTimeout(timeOut);
            }, 1000);
        }}
        >
            {({
                values,
                errors,
                touched,
                handleSubmit,
                //isSubmitting,
                //validating,
                valid,
            }) =>{
        return (
            <div className= "ventana-login">
                <h1 className="col-sm-12" >LOGIN</h1>
                <div className="row justify-content-center">
                    <Form className= "form-group  col-6  formulario-login p-3 mb-2 bg-secondary text-white" method= "post" onSubmit={handleSubmit}>
                        <label htmlFor="email" className="col-sm-12">Correo Electrónico</label>
                        <Field id='email' type="text" placeholder="Email" className={`form-control`} name='email'/>
                        <ErrorMessage name="email">{(msg) => <p>{msg}</p>}</ErrorMessage>
                        <label htmlFor="password" className="col-sm-12">Contraseña</label>
                        <Field  id='password' type="password" placeholder="Contraseña" className={`form-control`} name='password'/>
                        {errors.password && touched.password && <p>{errors.password}</p>}
                        <br></br>
                        <button type="submit" className="btn btn-success border border-white" disabled={Object.values(errors).length > 0} >Login</button>
                    </Form>
                </div>
                </div>
        );
        }}
        </Formik>
        </div>
    );

}

export default LoginForm;
