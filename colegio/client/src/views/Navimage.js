import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom"
import { useUser } from "../contexts/userContext";
import logout from '../accions/logout';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Firstlogin from './Firstlogin';

const Navimage = (props) => {
    const {onPropsSubmit, tittle, flag1, flag2} = props
    const { user, setUser } = useUser();
    const navigate = useNavigate();

    const logOut = async () => { 
        const { success } = await logout();
        if (success) setUser(null);
        else window.alert("Error, could not log out");
        navigate("/login");
    };
    const CreateNewUser = async () => {
        navigate("/createUser");
     }
    const CreateAsignature = async () => {
        navigate("/createAsignature");
     }
    useEffect(() => {  
        if(!user){
            navigate("/login");
        }
        else{
            
        }     
        
    },[]);

    return (
        <div className="row navegation-tittle align-items-center">
            <h1> Colegio Nueva Virtualidad </h1>
            <h2 className="col-9 classh1" >{tittle}</h2>
            <nav className="row justify-content-around">
                {flag2 && <Link className="col-2 " to="/firstlogin" >Firstlogin</Link>}
                <Link className="col-2 " to="/" >Home</Link>
                <Link className="col-2 " to="/login" onClick={() => logOut()}>Logout</Link>
                {flag1 && <Link className="col-2 " to="/createUser" onClick={() => CreateNewUser()}>Nuevo Usuario</Link>}
                {flag1 && <Link className="col-2 " to="/createAsignature" onClick={() => CreateAsignature()}>Nueva Materia </Link>}
                {flag1 && <Link className="col-2 " to="/asignaturelist" > Materias </Link>}
            </nav>
        </div>
    );
}

export default Navimage;
