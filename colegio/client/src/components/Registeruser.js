import React, { useState, useEffect } from 'react';
import { Formik, Field, Form,ErrorMessage } from "formik";
import * as Yup from "yup";
import  { useNavigate} from "react-router-dom";
import '../App.css';

const Registeruser = (props) => {

    const [formstatus, setFormstatus] = useState(false)
    

    let navigate = useNavigate();
    //let { id } = useParams();
    //cambia validaciones de backup al front
    const flag_errors = true;
    const { firstname, lastname, image, mail, address, phoneNumber, rolType, onSubmitProp, pass, confirmPassword} = props 
    useEffect(() => {  
   
    },[]);



    return (
        <div >
            <Formik          
            initialValues={{
                firstname:firstname, 
                lastname:lastname,
                image:image, 
                mail:mail,
                address:address,
                phoneNumber:phoneNumber,
                rolType:rolType,
                pass:pass
            }}
            validationSchema={ Yup.object().shape({
                    firstname: Yup.string()
                    .min(3,"El nombre no debe ser de menos de 3 caracteres")
                    .max(30,"El nombre no de ser de mas de 30 caracteres")
                    .required("por favor escribe tu nombre"),
                    lastname: Yup.string()
                    .min(3,"El apellido no debe ser de menos de 3 caracteres")
                    .max(30,"El apellido no de ser de mas de 30 caracteres")
                    .required("por favor escribe tu apellido"),
                    image: Yup.string()
                    .required("Por favor incluye la url de tu imagen"), 
                    mail: Yup.string()
                    .email("Correo no valido")
                    .min(3, "Este correo electrónico es incorrecto")
                    .required("Por favor, ingresa un correo electrónico válido"),
                    address: Yup.string()
                    .min(3,"Dirección no debe tener menos de 3 caracteres")
                    .max(50,"Dirección no debe tener mas de 50 caracteres")
                    .required("Por favor escribe una dirección valida"),
                    pass: Yup.string()
                    .equals([Yup.ref('confirmPassword'), null], "las contraseñas no son iguales")
                    .min(8, "La clave debe contener más de 8 caractes")
                    .required("Por favor ingrese una contraseña"),
        
                    confirmPassword: Yup.string()
                    .equals([Yup.ref('pass'), null], "las contraseñas no son iguales")
                    .min(8, "La clave debe contener más de 8 caractes")
                    .required("Por favor ingrese la confirmación de la contraseña"),

            })}
            onSubmit={(values,{ setSubmitting, resetForm })=>{
                setSubmitting(false);
                onSubmitProp(values)
                setFormstatus(true)
                setTimeout(()=>{ 
                    navigate('/')  
                }, 1000)
            }}
            >
            {({errors,
                    touched,
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    })=>{
                        return(
                            <div  className=" row" >
                                <Form  className="form-group col-12"  onSubmit={handleSubmit}>

                                      <div className="row  justify-content-between ">
                                        <div className="col-6 ">

                                            <label htmlFor='firstname' className="col-sm-12" >Primer Nombre</label>
                                            <Field className="col-sm-6" onChange={handleChange} onBlur={handleBlur}  id="firstname" type="text" placeholder={firstname} name="firstname" ></Field>
                                            {flag_errors && <ErrorMessage name="firstname">{(msg)=> <p className='error'>{msg}</p>}</ErrorMessage>}                                                              

                                            <label htmlFor='lastname' className="col-sm-12" >Apellido</label>
                                            <Field className="col-sm-6" onChange={handleChange} onBlur={handleBlur}  id="lastname" type="text" placeholder={lastname} name="lastname" ></Field>
                                            {flag_errors && <ErrorMessage name="lastname">{(msg)=> <p className='error'>{msg}</p>}</ErrorMessage>}                                                              

                                            <label htmlFor='image' className="col-sm-12" >Imagen URL:</label>
                                            <Field className="col-sm-6" onChange={handleChange} onBlur={handleBlur}  id="image" type="text" placeholder={image} name="image" ></Field>
                                            {flag_errors && <ErrorMessage name="image">{(msg)=> <p className='error'>{msg}</p>}</ErrorMessage>}                                                              

                                            <label htmlFor='pass' className="col-sm-12" >Password:</label>
                                            <Field className="col-sm-6" onChange={handleChange} onBlur={handleBlur}  id="pass" type="password" placeholder={pass} name="pass" ></Field>
                                            {flag_errors && <ErrorMessage name="pass">{(msg)=> <p className='error'>{msg}</p>}</ErrorMessage>}  

                                            <label htmlFor='confirmPassword' className="col-sm-12" >Confirmar Password:</label>
                                            <Field className="col-sm-6" onChange={handleChange} onBlur={handleBlur}  id="confirmPassword" type="password" placeholder={confirmPassword} name="confirmPassword" ></Field>
                                            {flag_errors && <ErrorMessage name="confirmPassword">{(msg)=> <p className='error'>{msg}</p>}</ErrorMessage>}  
                       
                                        </div>

                                        <div className="col-6 " >

                                            <label htmlFor='mail' className="col-sm-12" >Email:</label>
                                            <Field className="col-sm-6" onChange={handleChange} onBlur={handleBlur}  id="mail" type="text" placeholder={mail} name="mail" ></Field>
                                            {flag_errors && <ErrorMessage name="mail">{(msg)=> <p className='error'>{msg}</p>}</ErrorMessage>}                              

                                            <label htmlFor='address' className="col-sm-12" >Dirección:</label>
                                            <Field className="col-sm-6" onChange={handleChange} onBlur={handleBlur}  id="address" type="text" placeholder={address} name="address" ></Field>
                                            {flag_errors && <ErrorMessage name="address">{(msg)=> <p className='error'>{msg}</p>}</ErrorMessage>}                              

                                            <label htmlFor='phoneNumber' className="col-sm-12" >Telefono:</label>
                                            <Field className="col-sm-6" onChange={handleChange} onBlur={handleBlur}  id="phoneNumber" type="number" placeholder={phoneNumber} name="phoneNumber" ></Field>
                                            {flag_errors && <ErrorMessage name="phoneNumber">{(msg)=> <p className='error'>{msg}</p>}</ErrorMessage>}                              


                                            <label htmlFor='rolType' className=" col-sm-12 " >Rol de Trabajo</label>
                                            <Field className="col-sm-6" id='rolType' type="text" as='select' name='rolType'>
                                                <option value="administrador">Administrador</option>
                                                <option value="profesor">Profesor</option>
                                            </Field>

                                        </div>
                                        <br></br> 
                                        <div className="col-12 ">
                                            <button type="submit" className="btn btn-success border border-white " >Register</button>
                                        </div>
                                    </div>
                                    
                                    
                        
                                </Form>  
                            </div>
                        )
                    }}

            </Formik>

            <div className="errores-form">
            </div>
                    {formstatus && <p className="formulario-enviado">formulario enviado</p>}
            
        </div>
    );
}

export default Registeruser;
