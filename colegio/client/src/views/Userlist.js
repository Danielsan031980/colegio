import { simpleAxiosGet, simpleAxiosDelete} from '../accions/simpleAxios';
import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { useUser } from "../contexts/userContext";
import axios from 'axios';

const Userlist = () => {
    const navigate = useNavigate();
    const { user, setUser } = useUser();
    const [users, setUsers] = useState()
    const  getData = async () =>{
        await axios.get("/api/user/", {withCredentials: true})
            .then(res=>{
                setUsers(res.data)                         
            })
            .catch(err=>{
                return { success: false, data: err.message };
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
    },[]);
    return (
        <div>
            <ul>
                {
                    users?.map((valor,index)=>
                        <li key={index} >
                            <div className="row align-items-center">
                                <img className="col-2" src={valor.image} alt="MDN" ></img>
                                <div className="col-2">
                                    <span >{valor.firstname}  </span>
                                    <span >{valor.lastname}  </span>
                                </div>
                                <span className="col-2">{valor.rolType}  </span>
                                <button className="col-2"  onClick={() => deleteUser(valor._id)}  >Eliminar</button>
                                <button className="col-2"  onClick={() => navigate("/detail/" + valor._id) } >Ver Detalle</button>
                                <button  className="col-2" onClick={() => navigate("/editUser/" + valor._id )}  >Editar</button>
                            </div>

                            
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default Userlist;
