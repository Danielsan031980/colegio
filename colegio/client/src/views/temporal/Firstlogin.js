import React, {useState, useEffect} from 'react';
import Registeruser from '../components/Registeruser';
import Navimage from './Navimage';
import axios from 'axios';
import { useNavigate} from "react-router-dom"
import { useUser } from "../contexts/userContext";




const Firstlogin = async (props) => {
    const { user, setUser } = useUser();
    const [errors, setErrors] = useState([]); 
    const navigate = useNavigate();
    const registerUser = () => {
        const values = {
            firstname:"admin",
            lastname:"admin",
            image:" ",
            mail:"admin@admin.com",
            pass:"primeradmin123",
            confirmPassword:"primeradmin123",
            rolType:"administrador",
            address: " ",
        }
       axios.post('/api/register/', values)
        .catch(err=>{
            console.log(err)
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
            console.log(errorArr)
        }) 

            // axios.post('/api/login', {mail: values.mail,pass: values.pass})
            // .then(res=>{ 
            //     axios.get(`/api/user/${res.data._id}`, {withCredentials: true})
            //     .then(res=>{
            //         setUser(res.data);                                             
            //     })
            //     .catch(err=>{
            //         return { success: false, data: err.message };
            //     })
                
            // })
            // .catch(err=>{
            //     const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            //     const errorArr = []; // Define a temp error array to push the messages in
            //     for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
            //         errorArr.push(errorResponse[key].message)
            //     }
            //     // Set Errors
            //     setErrors(errorArr);
            // }) 
        

    }
    const returnfunction = () => {
       
        navigate("/main");
    }
    useEffect(() => {   
         
       

    },[]);


    return (
        <div>
           <p> se ha creado user: admin@admin.com y password: primeradmin123</p>
           <p> por favor eliminar despues del primer ingreso</p>
           <button className="col-3 "  onClick={() => returnfunction()}  > Reresar </button>
        </div>
    );
}

export default Firstlogin;
