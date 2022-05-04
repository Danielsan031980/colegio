import React, { useState, useEffect } from 'react';
import RegisterForm from '../components/RegisterForm';
import Login from './Login';
import { useUser } from '../contexts/userContext';
import axios from 'axios';
import {
    useNavigate,
} from "react-router-dom";

const Register = () => {
    
    const [errors, setErrors] = useState([]); 
    const {setUser}=useUser();
    const navigate=useNavigate();

    const registerUser = user => {
        const flagerrors = true
        const prueba = axios.post('/api/register/', user)
            .then(res=>{
                axios.get(`/api/user/${res.data._id}`, {withCredentials: true})
                .then(res=>{
                    setUser(res.data);
                    navigate("/");
                })
                .catch(err=>{
                    return { success: false, data: err.message };
                })
                
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            }) 
    }
    useEffect(() => {    
       

    },[]);

    return (
        <div className="col-6 main-registro  " >   
                <RegisterForm  className="col-6 "  onSubmitProp={registerUser} iFirstName='' iLastName='' iEmail='' iPassword='' iConfirm='' ></RegisterForm> 
                {errors.map((err, index) => <div  key = {index} className="alert alert-danger" role="alert">{err}</div>)}
        </div>
    );
}

export default Register;
