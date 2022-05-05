import { simpleAxiosGet, simpleAxiosDelete} from '../accions/simpleAxios';
import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { useUser } from "../contexts/userContext";
import axios from 'axios';
import Navimage from './Navimage';

const Asignatureslist = () => {
    const navigate = useNavigate();
    const [flag, setFlag] = useState();
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
        if(!user){
            navigate("/login");
        }
        else if(user.rolType === "administrador"){
            setFlag(true)
  
        }
        else if(user.rolType === "profesor"){
            setFlag(false)   
        }  
        getData()
        
    },[]);
    return (
        <div>
            <Navimage tittle= {"Lista de Asignaturas"}  flag1={flag}  /> 
            <ul>
                <div className="row justify-content-center " >
                    <div className="col-3" >Materia</div>
                    <div className="col-2" >Curso</div>
                    <div className="col-3" ></div>
                    <div className="col-3" ></div>
                </div>
                {
                    asignatures?.map((valor,index)=>
                            
                        <li key={index} >
                            <div className="row">
                                <span className="col-3" >{valor.nameAsignature}  </span>
                                <span className="col-3" >{valor.grade}  </span>
                                <button className="col-3"  onClick={() => navigate("/asignature/schedule/" + valor._id) } >Ver Horario</button>
                                <button className="col-3" onClick={() => navigate("/editAsignature/" + valor._id )}  >Editar</button>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}
export default Asignatureslist;
