import React, { useState, useEffect, useDebugValue } from 'react';
import { Formik, Field, Form,ErrorMessage } from "formik";
import * as Yup from "yup";
import  { useNavigate} from "react-router-dom";
import '../App.css';

const Registerasignature = (props) => {

    const [formstatus, setFormstatus] = useState(false)
    

    let navigate = useNavigate();
    //let { id } = useParams();
    //cambia validaciones de backup al front
    const flag_errors = false;
    const { nameAsignature, grade,  onSubmitProp, valuesCheck} = props 
    // useEffect(() => {  
   
    // },[]);



    return (
        <div className="Register">
            <Formik      
            initialValues={{
                nameAsignature:nameAsignature, 
                grade:grade,
                horario_1_1:valuesCheck.monday[0],
                horario_1_2:valuesCheck.tuesday[0], 
                horario_1_3:valuesCheck.wednesday[0], 
                horario_1_4:valuesCheck.thursday[0], 
                horario_1_5:valuesCheck.friday[0], 
                horario_1_1:valuesCheck.monday[1],
                horario_1_2:valuesCheck.tuesday[1], 
                horario_1_3:valuesCheck.wednesday[1], 
                horario_1_4:valuesCheck.thursday[1], 
                horario_1_5:valuesCheck.friday[1], 
                horario_1_1:valuesCheck.monday[2],
                horario_1_2:valuesCheck.tuesday[2], 
                horario_1_3:valuesCheck.wednesday[2], 
                horario_1_4:valuesCheck.thursday[2], 
                horario_1_5:valuesCheck.friday[2], 
                horario_1_1:valuesCheck.monday[3],
                horario_1_2:valuesCheck.tuesday[3], 
                horario_1_3:valuesCheck.wednesday[3], 
                horario_1_4:valuesCheck.thursday[3], 
                horario_1_5:valuesCheck.friday[3], 
                horario_1_1:valuesCheck.monday[4],
                horario_1_2:valuesCheck.tuesday[4], 
                horario_1_3:valuesCheck.wednesday[4], 
                horario_1_4:valuesCheck.thursday[4], 
                horario_1_5:valuesCheck.friday[4]
            }}
            validationSchema={ Yup.object().shape({
                //    nameAsignature: Yup.string()
                //    .min(3,"first name too short")
                //    .max(30,"first name too long")
                //    .required("Please write your name"),
                //    grade: Yup.string()
                //    .min(3,"last name too short")
                //    .max(30,"last name too long")
                //    .required("Please write your name"),
                //    Schedule: Yup.string()
                //    .required("Please write your url Schedule"), 
                //    mail: Yup.string()
                //    .email("Correo no valido")
                //    .min(3, "Este correo electrónico es incorrecto")
                //    .required("Por favor, ingresa un correo electrónico válido"),
                //    address: Yup.string()
                //    .min(3,"address too short")
                //    .max(30,"address too long")
                //    .required("Please write your address")
                //      horario_1_1: Yup.boolean().equals
                      

            })}
            onSubmit={(values,{ setSubmitting, resetForm })=>{
                setSubmitting(false);
                console.log(values)
                const values2 = {
                    nameAsignature:values.nameAsignature,
                    grade:values.grade,
                    schedule:{
                        monday:     [values.horario_1_1,values.horario_2_1,values.horario_3_1,values.horario_4_1,values.horario_5_1],
                        tuesday:    [values.horario_1_2,values.horario_2_2,values.horario_3_2,values.horario_4_2,values.horario_5_2],
                        wednesday:  [values.horario_1_3,values.horario_2_3,values.horario_3_3,values.horario_4_3,values.horario_5_3],
                        thursday:   [values.horario_1_4,values.horario_2_4,values.horario_3_3,values.horario_4_4,values.horario_5_4],
                        friday:     [values.horario_1_5,values.horario_2_5,values.horario_3_5,values.horario_4_4,values.horario_5_5]
                    }
                }

                onSubmitProp(values2)  
                // navigate('/') 
                setFormstatus(true)
                setTimeout(()=>{ 
                    //resetForm() 
                }, 10000)
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
                            <div  className="ventana-formulario-data row" >
                                <Form  className="form-group col-12"  onSubmit={handleSubmit}>

                                      <div className="row form-divitions justify-content-between ">
                                        <div className="col-12 ">

                                            <label htmlFor='nameAsignature' className="col-sm-12" >Nombre Materia</label>
                                            <Field className="col-sm-6" onChange={handleChange} onBlur={handleBlur}  id="nameAsignature" type="text" placeholder={nameAsignature} name="nameAsignature"   ></Field>
                                            {flag_errors && <ErrorMessage name="nameAsignature">{(msg)=> <p className='error'>{msg}</p>}</ErrorMessage>}                                                              

                                            <label htmlFor='grade' className="col-sm-12" >Grado</label>
                                            <Field className="col-sm-6" onChange={handleChange} onBlur={handleBlur}  id="grade" type="text" placeholder={grade} name="grade" ></Field>
                                            {flag_errors && <ErrorMessage name="grade">{(msg)=> <p className='error'>{msg}</p>}</ErrorMessage>}                                                              


                                            <div className="row d-flex justify-content-around">

                                                <div className="form-check form-check-inline col-1 ">
                                                    <p>Hora/Dia</p>
                                                </div>
                                                <div className="form-check form-check-inline col-1 ">
                                                    <p>Lunes</p>
                                                </div>
                                                <div className="form-check form-check-inline col-1">
                                                    <p>martes</p>
                                                </div>
                                                <div className="form-check form-check-inline col-1">
                                                    <p>miercoles</p>
                                                </div>
                                                <div className="form-check form-check-inline col-1">
                                                    <p>jueves</p>
                                                </div>
                                                <div className="form-check form-check-inline col-1">
                                                    <p>viernes</p>
                                                </div>
                                            </div>
                                            <div className="row d-flex justify-content-around">
                                                <div className="form-check form-check-inline col-1 ">
                                                    <p>7:00 am</p>
                                                </div>
                                                <div className="form-check form-check-inline col-1 ">
                                                    <Field className="form-check-input col-1" id="horario_1_1" type="checkbox" name="horario_1_1"  />
                                                    <label className="form-check-label" htmlFor='horario_1_1'></label>
                                                    {errors.horario_1_1 && touched.horario_1_1 && <p className='error'>{errors.horario_1_1} </p>}
                                                </div>
                                                <div className="form-check form-check-inline col-1">
                                                    <Field className="form-check-input col-1" id="horario_1_2" type="checkbox" name="horario_1_2"  checked={values.horario_1_2} />
                                                    <label className="form-check-label" htmlFor='horario_1_2'></label>
                                                    {errors.horario_1_2 && touched.horario_1_2 && <p className='error'>{errors.horario_1_2} </p>}
                                                </div>
                                                <div className="form-check form-check-inline col-1">
                                                    <Field className="form-check-input col-1" id="horario_1_3" type="checkbox" name="horario_1_3" checked={values.horario_1_3} />
                                                    <label className="form-check-label" htmlFor='horario_1_3'></label>
                                                    {errors.horario_1_3 && touched.horario_1_3 && <p className='error'>{errors.horario_1_3} </p>}
                                                </div>
                                                <div className="form-check form-check-inline col-1">
                                                    <Field className="form-check-input col-1" id="horario_1_4" type="checkbox" name="horario_1_4" checked={values.horario_1_4} />
                                                    <label className="form-check-label" htmlFor='horario_1_4'></label>
                                                    {errors.horario_1_4 && touched.horario_1_4 && <p className='error'>{errors.horario_1_4} </p>}
                                                </div>
                                                <div className="form-check form-check-inline col-1">
                                                    <Field className="form-check-input col-2 " id="horario_1_5" type="checkbox" name="horario_1_5" checked={values.horario_1_5}/>
                                                    <label className="form-check-label" htmlFor='horario_1_5'></label>
                                                    {errors.horario_1_5 && touched.horario_1_5 && <p className='error'>{errors.horario_1_5} </p>}
                                                </div>
                                            </div>
                                            <div className="row d-flex justify-content-around">
                                                <div className="form-check form-check-inline col-1 ">
                                                    <p>8:00 am</p>
                                                </div>
                                                <div className="form-check form-check-inline col-1 ">
                                                    <Field className="form-check-input col-1" id="horario_2_1" type="checkbox" name="horario_2_1" checked={values.horario_2_1}/>
                                                    <label className="form-check-label" htmlFor='horario_2_1'></label>
                                                    {errors.horario_2_1 && touched.horario_2_1 && <p className='error'>{errors.horario_2_1} </p>}
                                                </div>
                                                <div className="form-check form-check-inline col-1">
                                                    <Field className="form-check-input col-1" id="horario_2_2" type="checkbox" name="horario_2_2" checked={values.horario_2_2} />
                                                    <label className="form-check-label" htmlFor='horario_2_2'></label>
                                                    {errors.horario_2_2 && touched.horario_2_2 && <p className='error'>{errors.horario_2_2} </p>}
                                                </div>
                                                <div className="form-check form-check-inline col-1">
                                                    <Field className="form-check-input col-1" id="horario_2_3" type="checkbox" name="horario_2_3" checked={values.horario_2_3}/>
                                                    <label className="form-check-label" htmlFor='horario_2_3'></label>
                                                    {errors.horario_2_3 && touched.horario_2_3 && <p className='error'>{errors.horario_2_3} </p>}
                                                </div>
                                                <div className="form-check form-check-inline col-1">
                                                    <Field className="form-check-input col-1" id="horario_2_4" type="checkbox" name="horario_2_4" checked={values.horario_2_4} />
                                                    <label className="form-check-label" htmlFor='horario_2_4'></label>
                                                    {errors.horario_2_4 && touched.horario_2_4 && <p className='error'>{errors.horario_2_4} </p>}
                                                </div>
                                                <div className="form-check form-check-inline col-1">
                                                    <Field className="form-check-input col-2 " id="horario_2_5" type="checkbox" name="horario_2_5" checked={values.horario_2_5} />
                                                    <label className="form-check-label" htmlFor='horario_2_5'></label>
                                                    {errors.horario_2_5 && touched.horario_2_5 && <p className='error'>{errors.horario_2_5} </p>}
                                                </div>
                                            </div>
                                            <div className="row d-flex justify-content-around">
                                                <div className="form-check form-check-inline col-1 ">
                                                    <p>9:00 am</p>
                                                </div>
                                                <div className="form-check form-check-inline col-1 ">
                                                    <Field className="form-check-input col-1" id="horario_3_1" type="checkbox" name="horario_3_1" checked={values.horario_3_1} />
                                                    <label className="form-check-label" htmlFor='horario_3_1'></label>
                                                    {errors.horario_3_1 && touched.horario_3_1 && <p className='error'>{errors.horario_3_1} </p>}
                                                </div>
                                                <div className="form-check form-check-inline col-1">
                                                    <Field className="form-check-input col-1" id="horario_3_2" type="checkbox" name="horario_3_2" />
                                                    <label className="form-check-label" htmlFor='horario_3_2'></label>
                                                    {errors.horario_3_2 && touched.horario_3_2 && <p className='error'>{errors.horario_3_2} </p>}
                                                </div>
                                                <div className="form-check form-check-inline col-1">
                                                    <Field className="form-check-input col-1" id="horario_3_3" type="checkbox" name="horario_3_3" />
                                                    <label className="form-check-label" htmlFor='horario_3_3'></label>
                                                    {errors.horario_3_3 && touched.horario_3_3 && <p className='error'>{errors.horario_3_3} </p>}
                                                </div>
                                                <div className="form-check form-check-inline col-1">
                                                    <Field className="form-check-input col-1" id="horario_3_4" type="checkbox" name="horario_3_4" />
                                                    <label className="form-check-label" htmlFor='horario_3_4'></label>
                                                    {errors.horario_3_4 && touched.horario_3_4 && <p className='error'>{errors.horario_3_4} </p>}
                                                </div>
                                                <div className="form-check form-check-inline col-1">
                                                    <Field className="form-check-input col-2 " id="horario_3_5" type="checkbox" name="horario_3_5" />
                                                    <label className="form-check-label" htmlFor='horario_3_5'></label>
                                                    {errors.horario_3_5 && touched.horario_3_5 && <p className='error'>{errors.horario_3_5} </p>}
                                                </div>
                                            </div>
                                            <div className="row d-flex justify-content-around">
                                                <div className="form-check form-check-inline col-1 ">
                                                    <p>10:00 am</p>
                                                </div>
                                                <div className="form-check form-check-inline col-1 ">
                                                    <Field className="form-check-input col-1" id="horario_4_1" type="checkbox" name="horario_4_1" />
                                                    <label className="form-check-label" htmlFor='horario_4_1'></label>
                                                    {errors.horario_4_1 && touched.horario_4_1 && <p className='error'>{errors.horario_4_1} </p>}
                                                </div>
                                                <div className="form-check form-check-inline col-1">
                                                    <Field className="form-check-input col-1" id="horario_4_2" type="checkbox" name="horario_4_2" />
                                                    <label className="form-check-label" htmlFor='horario_4_2'></label>
                                                    {errors.horario_4_2 && touched.horario_4_2 && <p className='error'>{errors.horario_4_2} </p>}
                                                </div>
                                                <div className="form-check form-check-inline col-1">
                                                    <Field className="form-check-input col-1" id="horario_4_3" type="checkbox" name="horario_4_3" />
                                                    <label className="form-check-label" htmlFor='horario_4_3'></label>
                                                    {errors.horario_4_3 && touched.horario_4_3 && <p className='error'>{errors.horario_4_3} </p>}
                                                </div>
                                                <div className="form-check form-check-inline col-1">
                                                    <Field className="form-check-input col-1" id="horario_4_4" type="checkbox" name="horario_4_4" />
                                                    <label className="form-check-label" htmlFor='horario_4_4'></label>
                                                    {errors.horario_4_4 && touched.horario_4_4 && <p className='error'>{errors.horario_4_4} </p>}
                                                </div>
                                                <div className="form-check form-check-inline col-1">
                                                    <Field className="form-check-input col-2 " id="horario_4_5" type="checkbox" name="horario_4_5" />
                                                    <label className="form-check-label" htmlFor='horario_4_5'></label>
                                                    {errors.horario_4_5 && touched.horario_4_5 && <p className='error'>{errors.horario_4_5} </p>}
                                                </div>
                                            </div>
                                            <div className="row d-flex justify-content-around">
                                                <div className="form-check form-check-inline col-1 ">
                                                    <p>11:00 am</p>
                                                </div>
                                                <div className="form-check form-check-inline col-1 ">
                                                    <Field className="form-check-input col-1" id="horario_5_1" type="checkbox" name="horario_5_1" />
                                                    <label className="form-check-label" htmlFor='horario_5_1'></label>
                                                    {errors.horario_5_1 && touched.horario_5_1 && <p className='error'>{errors.horario_5_1} </p>}
                                                </div>
                                                <div className="form-check form-check-inline col-1">
                                                    <Field className="form-check-input col-1" id="horario_5_2" type="checkbox" name="horario_5_2" />
                                                    <label className="form-check-label" htmlFor='horario_5_2'></label>
                                                    {errors.horario_5_2 && touched.horario_5_2 && <p className='error'>{errors.horario_5_2} </p>}
                                                </div>
                                                <div className="form-check form-check-inline col-1">
                                                    <Field className="form-check-input col-1" id="horario_5_3" type="checkbox" name="horario_5_3" />
                                                    <label className="form-check-label" htmlFor='horario_5_3'></label>
                                                    {errors.horario_5_3 && touched.horario_5_3 && <p className='error'>{errors.horario_5_3} </p>}
                                                </div>
                                                <div className="form-check form-check-inline col-1">
                                                    <Field className="form-check-input col-1" id="horario_5_4" type="checkbox" name="horario_5_4" />
                                                    <label className="form-check-label" htmlFor='horario_5_4'></label>
                                                    {errors.horario_5_4 && touched.horario_5_4 && <p className='error'>{errors.horario_5_4} </p>}
                                                </div>
                                                <div className="form-check form-check-inline col-1">
                                                    <Field className="form-check-input col-2 " id="horario_5_5" type="checkbox" name="horario_5_5" />
                                                    <label className="form-check-label" htmlFor='horario_5_5'></label>
                                                    {errors.horario_5_5 && touched.horario_5_5 && <p className='error'>{errors.horario_5_5} </p>}
                                                </div>
                                            </div>




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

export default Registerasignature;
