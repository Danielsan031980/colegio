import { simpleAxiosGet, simpleAxiosDelete} from '../accions/simpleAxios';
import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { useUser } from "../contexts/userContext";
import axios from 'axios';
import Navimage from './Navimage';

const Asignatureslist = () => {
    const navigate = useNavigate();
    const { user, setUser } = useUser();
    const [asignatures, setAsignatures] = useState()
    const  getData = async () =>{
        await axios.get("/api/asignature/", {withCredentials: true})
            .then(res=>{
                setAsignatures(res.data.asignature)                         
            })
            .catch(err=>{
                return { success: false, data: err.message };
            })  
    }
    const  deleteAsignature = async (id) => {
        await axios.delete("/api/delete/" + id, {withCredentials: true}) 
        getData()
    }
    useEffect(() => {  
        getData()
    },[]);
    return (
        <div>
            <Navimage tittle= {"akjñlkd"}  flag1={false} flag2={true} /> 
            <ul>
                {
                    asignatures?.map((valor,index)=>
                        <li key={index} >
                            <div>
                                <span>{valor.nameAsignature}  </span>
                                <span>{valor.grade}  </span>
                                <button  onClick={() => navigate("/asignature/schedule/" + valor._id) } >Ver Horario</button>
                                <button  onClick={() => navigate("/editAsignature/" + valor._id )}  >Editar</button>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}
export default Asignatureslist;
