import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import Registeruser from "../components/Registeruser";
import Navimage from "./Navimage";
import Registerasignature from "../components/Registerasignature";

const Editasignature = () => {
    const [errors, setErrors] = useState([]);
    const { id } = useParams();
    const [asignature, setAsignature] = useState(
        {
            nameAsignature:"",
            grade:"",
            schedule:{
                monday:[false,false,false,false,false],
                tuesday:[false,false,false,false,false],
                wednesday:[false,false,false,false,false],
                thursday:[false,false,false,false,false],
                friday:[false,false,false,false,false]
            }
        }
    )
    const registerAsignature = (values) => {
        axios.put('/api/asignature/update/' + id  , values)
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
    const  getData = async () =>{
        await axios.get("/api/asignature/" + id)
        .then(res=>{
            console.log(res.data.asignature)
            setAsignature(res.data.asignature)                         
        })
        .catch(err=>{
            return { success: false, data: err.message };
        })  
    }
    useEffect(() => {  
        getData()
        
    },[]);
    return (
        <div>
            <Navimage tittle= "Crear Nueva Materia" /> 
            {
                asignature && <Registerasignature onSubmitProp={registerAsignature} nameAsignature={asignature.nameAsignature} grade={asignature.grade}  valuesCheck={asignature.schedule}    />
            }


        </div>
    );
}

export default Editasignature;
