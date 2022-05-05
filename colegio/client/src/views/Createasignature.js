import React, {useState, useEffect} from 'react';
import Registerasignature from '../components/Registerasignature';
import axios from 'axios';
import Navimage from './Navimage';
import { useUser } from "../contexts/userContext";
import { useNavigate} from "react-router-dom"

const Createasignature = () => {
    const [flag, setFlag] = useState();
    const navigate = useNavigate();
    const { user, setUser } = useUser();
    const [errors, setErrors] = useState([]);
    const valuesCheck={
        monday:[false,false,false,false,false],
        tuesday:[false,false,false,false,false],
        wednesday:[false,false,false,false,false],
        thursday:[false,false,false,false,false],
        friday:[false,false,false,false,false]
    } 
    const registerAsignature = (values) => {
        axios.post('/api/asignature/create', values)
        .catch(err=>{
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
            <Navimage tittle= "Crear Nueva Materia" flag1={flag} /> 
            <Registerasignature onSubmitProp={registerAsignature} nameAsignature="" grade=""  valuesCheck={valuesCheck}    />
        </div>
    );
}

export default Createasignature;
