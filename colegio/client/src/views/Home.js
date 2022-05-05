import React, {useEffect, useState} from 'react';
import { useNavigate} from "react-router-dom"
import { useUser } from "../contexts/userContext";
import Navimage from './Navimage';

const Home = () => {
    const navigate = useNavigate();
    const { user, setUser } = useUser();
    const [flag, setFlag] = useState();

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
            <Navimage tittle= "Bienvenidos al Colegio Virtual"  flag1={flag}  />
            {/* <Link className="col-3 " to="/registro" onClick={() => logOut()}>Logout</Link> */}
        </div>
    );
}

export default Home;
