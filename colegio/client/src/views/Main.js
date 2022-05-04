import { useNavigate, useParams } from "react-router-dom";
import { useUser } from "../contexts/userContext";
import Navimage from './Navimage';
import React, {useEffect, useState} from 'react';
import Userlist from "./Userlist";

const Main = () => {
    const { user } = useUser();
    

    useEffect(() => {  
        
    },[]);
    return (
        <div>
          <Navimage tittle= "Bienvenidos al Colegio Virtual"/> 
          <Userlist/>
        </div>
    );
}

export default Main;
