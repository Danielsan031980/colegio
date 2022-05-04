import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import Registeruser from "../components/Registeruser";
import Navimage from "./Navimage";
import Registerasignature from "../components/Registerasignature";

const Editasignature = () => {

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
                asignature && <Registerasignature nameAsignature={asignature.nameAsignature} grade={asignature.grade}  valuesCheck={asignature.schedule}    />
            }


        </div>
    );
}

export default Editasignature;
