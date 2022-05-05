import { useNavigate, useParams } from "react-router-dom";
import { useUser } from "../contexts/userContext";
import Navimage from './Navimage';
import React, {useEffect, useState} from 'react';
import Userlist from "./Userlist";

const Main = () => {
    const { user } = useUser();
    const [flag, setFlag] = useState();
    const navigate = useNavigate();
    

    useEffect(() => {  
      if(!user){
        navigate("/login");
    }
    else if(user.rolType === "administrador"){
        setFlag(true)
        navigate("/main");
    }
    else if(user.rolType === "profesor"){

        setFlag(false)
        navigate("/detail/" + user._id );
    }
    },[]);
    return (
        <div>
          <Navimage tittle= "Bienvenidos al Colegio Virtual" flag1={flag} /> 
          <Userlist/>
        </div>
    );
}

export default Main;
