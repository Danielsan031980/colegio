import React, {useState, useEffect} from 'react';
import Registeruser from '../components/Registeruser';
import Navimage from './Navimage';
import axios from 'axios';
import Registerasignature from '../components/Registerasignature';
import { useNavigate} from "react-router-dom"
import { useUser } from "../contexts/userContext";

const Createuser = () => {
    const navigate = useNavigate();
    const { user, setUser } = useUser();
    const [flag, setFlag] = useState();
    const [errors, setErrors] = useState([]); 
    const registerUser = (values) => {
        console.log("hola")
        console.log(values)
        console.log("hola")
        axios.post('/api/register/', values)
        .catch(err=>{
            console.log(err)
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
    useEffect(() => {    
        if(!user){
            navigate("/login");
        }
        else if(user.rolType === "administrador"){
            setFlag(true)
        }
        else if(user.rolType === "profesor"){

            setFlag(false)
        }
    },[]);
    return (
        <div> 
            <Navimage tittle= "Crear Nuevo Usuario" flag1={flag} /> 
            <Registeruser  className="col-6 " onSubmitProp={registerUser} firstname="" lastname="" mail="" ></Registeruser >  
        </div>
    );
}

export default Createuser;
