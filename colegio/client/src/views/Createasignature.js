import React, {useState} from 'react';
import Registerasignature from '../components/Registerasignature';
import axios from 'axios';
import Navimage from './Navimage';

const Createasignature = () => {
    
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
    return (
        <div>
            <Navimage tittle= "Crear Nueva Materia" /> 
            <Registerasignature onSubmitProp={registerAsignature} nameAsignature="" grade=""  valuesCheck={valuesCheck}    />
        </div>
    );
}

export default Createasignature;
