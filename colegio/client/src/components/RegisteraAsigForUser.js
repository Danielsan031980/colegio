import React, { useState, useEffect } from 'react';
import { Formik, Field, Form,ErrorMessage } from "formik";
import * as Yup from "yup";
import  { useNavigate} from "react-router-dom";
import '../App.css';

const RegisterAsigForUser = (props) => {
    const [formstatus, setFormstatus] = useState(false)
    
    let navigate = useNavigate();
    //let { id } = useParams();
    //cambia validaciones de backup al front
    const flag_errors = false;
    const { asignatureSelection, flag_edit,  onSubmitProp } = props 
    const selector =asignatureSelection[0]
    useEffect(() => {  
     
    },[]);
    return (
        <div className="Register">
            <Formik          
            initialValues={{
                selector:selector,
            }}
            validationSchema={ Yup.object().shape({
                //    selector: Yup.string()
                //    .min(3,"Pirate Phrase Description name too short")
                //    .required("Please write Pirate Phrase"),
                //    selector: Yup.string()
                //    .min(3,"Crew position  too short")
                //    .required("Please write crew position"),
            })}
            onSubmit={(values,{ setSubmitting, resetForm })=>{
                setSubmitting(false);
                onSubmitProp(values)  
                setFormstatus(true)
                setTimeout(()=>{ 
                    resetForm() 
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
                            <div  className="" >
                                <Form  className="form-group"  onSubmit={handleSubmit}>
                                    <div className="row form-divitions justify-content-center ">
                                        <label htmlFor="selector" className="row " >Agregar Materia</label>
                                        <Field className="form-select col-3" id='selector' type="text" as='select' name='selector'>
                                            {
                                                asignatureSelection.map((value,index)=>
                                                <option value={value} key={index}>{value}</option>
                                                )
                                            }
                                        </Field>
                                        <button type="submit" className="button_color border-white"  > Agregar Materia </button> 
                                    </div>                                   
                                    <br></br>
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

export default RegisterAsigForUser;
