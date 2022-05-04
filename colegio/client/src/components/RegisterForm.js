import React, { useState, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegisterForm = (props) => {

    const {iName,iDireccion,iEmail,iPassword,iConfirm,onSubmitProp}=props;
    useEffect(() => {    
       

    },[]);
    return (
        <div >
          <Formik
          initialValues={{
          name : iName,
          mail:iEmail,
          pass:iPassword,
          direccion:iDireccion,
          confirmPassword:iConfirm,
        }}
        validationSchema={Yup.object().shape({
            // name: Yup.string()
            // .min(3, "Tu nombre es muy corto")
            // .required ("Por favor ingresa tu nombre"),
                       
            // mail: Yup.string()
            // .email("Correo no valido")
            // .min(3, "Este correo electrónico es incorrecto")
            // .required("Por favor, ingresa un correo electrónico válido"),
            
            //  pass: Yup.string()
            //  .equals([Yup.ref('confirmPassword'), null], "las contraseñas no son iguales")
            // .min(8, "La clave debe contener más de 8 caractes")
            // .required("Por favor ingrese una contraseña"),
            
            // confirmPassword: Yup.string()
            // .equals([Yup.ref('pass'), null], "las contraseñas no son iguales")
            // .min(8, "La clave debe contener más de 8 caractes")
            // .required("Por favor ingrese la confirmación de la contraseña"),


        })}

        onSubmit={(values, {setSubmitting}) =>{
            console.log("aqui")
            onSubmitProp(values);
            setSubmitting(false);
            const timeOut = setTimeout(( )=>{
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
            
            <div className= "ventana-registro container">
                <h1 className="col-3 " >REGISTRO</h1>
                <Form className="form-group formulario-registro p-3 mb-2 bg-secondary text-white " method= "post" onSubmit={handleSubmit}>

                    <label htmlFor="name" className="col-sm-12">Nombre</label>
                    <Field id='name'type="text" className="form-control" placeholder="Nombre" name='name'/>
                    {errors.name && touched.name && <p>{errors.name}</p>}

                    <label htmlFor="mail" className="col-sm-12 ">mail</label>
                    <Field  id='mail' type="text" placeholder="mail" className="form-control" name='mail'/>
                    {errors.mail && touched.mail && <p>{errors.mail}</p>}

                    <label htmlFor="pass" className="col-sm-12 ">Contraseña</label>
                    <Field  id='pass' type="password" placeholder="Contraseña" className="form-control" name='pass'/>
                    {errors.pass && touched.pass && <p>{errors.pass}</p>}
        
                    <label htmlFor="confirmPassword" className="col-sm-12">Confirmar Contraseña</label>
                    <Field  id='confirmPassword' type="password" placeholder="Confirmar Contraseña" className="form-control" name='confirmPassword'/>
                    {errors.confirmPassword && touched.confirmPassword && <p>{errors.confirmPassword}</p>}

                    <label htmlFor="pais" className="col-sm-12 ">Pais</label>
                    <Field  id='pais' type="text" placeholder="Pais" className="form-control" name='pais'/>
                    {errors.pais && touched.pais && <p>{errors.pais}</p>}

                    <label htmlFor="direccion" className="col-sm-12 ">Direccion</label>
                    <Field  id='direccion' type="text" placeholder="Direccion" className="form-control" name='direccion'/>
                    {errors.direccion && touched.direccion && <p>{errors.direccion}</p>}
                    <br></br>
                    <button type="submit" className="btn btn-success border border-white" >Register</button>
                </Form>
                </div>
        );
        }}
        </Formik>
        </div>
      );
    }
export default RegisterForm