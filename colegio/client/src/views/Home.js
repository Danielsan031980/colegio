import React, {useEffect, useState} from 'react';
import { useNavigate} from "react-router-dom"
import { useUser } from "../contexts/userContext";
import Navimage from './Navimage';

const Home = () => {
    const navigate = useNavigate();
    const { user, setUser } = useUser();

    useEffect(() => {    
        if(!user){
            navigate("/login");
        }
        else if(user.rolType === "administrador"){
            navigate("/main");
        }
        else if(user.rolType === "profesor"){
            navigate("/detail/" + user._id );
        }
    },[]);
    return (
        
        <div>
            <Navimage tittle= "Bienvenidos al Colegio Virtual"  flag1={true} flag2={false} user={user} />
            {/* <Link className="col-3 " to="/registro" onClick={() => logOut()}>Logout</Link> */}
        </div>
    );
}

export default Home;
