import { simpleAxiosGet, simpleAxiosDelete} from '../accions/simpleAxios';
import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { useUser } from "../contexts/userContext";
import axios from 'axios';

const Userlist = (props) => {
    const navigate = useNavigate();
    const { user, setUser } = useUser();
    const [users, setUsers] = useState()
    const {asignaturelist, setAsignaturelist, update, setUpdate} = props
    const  getData = async () =>{
        let newMateria = []
        let newMateria2 = []
        const nofreeAsigantures = []
        await axios.get("/api/user/", {withCredentials: true})
            .then(res=>{
                setUsers(res.data)  
                res.data.forEach((asignature)=>{
                        asignature.nameAsignatures.forEach((valor)=>{
                            nofreeAsigantures.push(valor)
                        })
                })                                  
            })
            .catch(err=>{
                return { success: false, data: err.message };
            })  
            await axios.get("/api/asignature")
            .then(res=>{
                res.data.asignature.forEach((materia,index)=>{
                    let flag = true
                    nofreeAsigantures.forEach((nofreemateria, ind)=>{
                        if(materia._id === nofreemateria){
                            flag = false
                        }                  
                    })
                    if(flag){
                        newMateria.push(materia)
                    }
                    else{
                       newMateria2.push(materia)
                    }
                })                
            })
            .catch(err=>{
                return { success: false, data: err.message };
            })             
            setAsignaturelist({
                free:{
                    materia:newMateria
                },
                used:{
                    materia:newMateria2
                }
            })
    }
    const  deleteUser = async (id) => {
        await axios.delete("/api/delete/" + id, {withCredentials: true}) 
        getData()
    }
    const  edit = async (id) => {

    }
    useEffect(() => {  
        getData()
        
    },[asignaturelist]);
    return (
        <div>
            <ul>
                {
                    users?.map((valor,index)=>
                        <li key={index} >
                            <div className="row align-items-center">
                                <img className="col-sm-2" src={valor.image} alt="MDN" ></img>
                                <div className="col-sm-2">
                                    <span >{valor.firstname}  </span>
                                    <span >{valor.lastname}  </span>
                                </div>
                                <span className="col-sm-2">{valor.rolType}  </span>
                                <button className="col-sm-2 btn btn-danger"  onClick={() => deleteUser(valor._id)}  >Eliminar</button>
                                <button className="col-sm-2 btn btn-primary "  onClick={() => navigate("/detail/" + valor._id) } >Ver Detalle</button>
                                <button  className="col-sm-2 btn btn-secondary" onClick={() => navigate("/editUser/" + valor._id )}  >Editar</button>
                            </div>    
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default Userlist;
