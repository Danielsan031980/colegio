import { simpleAxiosGet, simpleAxiosDelete} from '../accions/simpleAxios';
import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { useUser } from "../contexts/userContext";
import axios from 'axios';
import Navimage from './Navimage';
import '../App.css';

const Asignatureslist = (props) => {
    const navigate = useNavigate();
    const [flag, setFlag] = useState();
    const [flagEliminar, setFlagEliminar] = useState(false);
    const { user, setUser } = useUser();
    const [asignatures, setAsignatures] = useState()
    const {asignaturelist, setAsignaturelist, onSubmitprop} = props
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

        onSubmitprop()
        const asignaturelist2 = asignaturelist.free.materia.filter((valor)=> {
            if(valor._id === id){
                console.log("entre")
                axios.delete("/api/asignature/delete/" + id) 
                .then(res=>{
                        console.log(res)                
                })
                .catch(err=>{
                    return { success: false, data: err.message };
                })  
                return valor
            }
            else{
                setFlagEliminar(true)
            }
        })
        setTimeout(()=>{ 
            setFlagEliminar(false)
        }, 5000)
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

        onSubmitprop()
        getData()

        
    },[asignatures,flagEliminar]);
    return (
        <div>
            <Navimage tittle= {"Lista de Asignaturas"}  flag1={flag}  /> 
             <ul>
                <div className="row justify-content-center titulo-lista-asignaturas " >
                    <div className="col-3" >Materia</div>
                    <div className="col-3" >Curso</div>
                    <div className="col-3" ></div>
                    <div className="col-3" ></div>
                </div>
                {
                    asignatures?.map((valor,index)=>
                            
                        <li key={index} >
                            <div className="row">
                                <span className="col-3" >{valor.nameAsignature}  </span>
                                <span className="col-3" >{valor.grade}  </span>
                                <button className="col-2 btn btn-primary border-white"  onClick={() => navigate("/asignature/schedule/" + valor._id) } >Ver Horario</button>
                                <button className="col-2 btn btn-secondary border-white" onClick={() => navigate("/editAsignature/" + valor._id )}  >Editar</button>
                                <button className="col-2 btn btn-danger border-white" onClick={() => deleteAsignature(valor._id)}  >Eliminar</button>

                            </div>
                            
                        </li>
                    )
                }
            </ul> 
                {flagEliminar && <p className="error">No puedes eliminar una materia asigdada a un profesor</p>}
        </div>
    );
}
export default Asignatureslist;
