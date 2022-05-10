import React, {useState, useEffect} from 'react';
import Registeruser from '../components/Registeruser';
import Navimage from './Navimage';
import axios from 'axios';
import { useNavigate} from "react-router-dom"
import { useUser } from "../contexts/userContext";

const Firstlogin = (props) => {
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

    }

    const returnfunction = () => { 
        props.setFlag2(false)   
        navigate("/main");
    }
    useEffect(() => {   
         if(!user){
            registerUser()
         }
    },[]);
    return (
        <div>
            <p> se ha creado user: admin@admin.com y password: primeradmin123</p>
            <p> por favor eliminar despues del primer ingreso</p>
            <button className="col-3 "  onClick={() => returnfunction()}  > Regresar </button>
        </div>
    );
}

export default Firstlogin;
