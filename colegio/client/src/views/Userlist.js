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
                            <div>
                                <img src={valor.image} alt="MDN" ></img>
                                <span>{valor.firstname}  </span>
                                <span>{valor.lastname}  </span>
                                <span>{valor.rolType}  </span>
                                <button  onClick={() => deleteUser(valor._id)}  >Eliminar</button>
                                <button  onClick={() => navigate("/detail/" + valor._id) } >Ver Detalle</button>
                                <button  onClick={() => navigate("/editUser/" + valor._id )}  >Editar</button>
                            </div>

                            
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default Userlist;
