import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import Registeruser from "../components/Registeruser";
import { useUser } from "../contexts/userContext";
import React, {useState, useEffect} from 'react';
import Navimage from "./Navimage";

const Edituser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user, setUser } = useUser();
    const [flag, setFlag] = useState();
    const [uservalue, setUservalue] = useState(
        {
            firstname:"",
            lastname:"",
            image:"",
            mail:"",
            address:"",
            phoneNumber:"",
            rolType:"",
        }
    )
    const  getData = async () =>{
        await axios.get("/api/user/" + id, {withCredentials: true})
        .then(res=>{
            console.log(res.data)
            setUservalue(res.data)                         
        })
        .catch(err=>{
            return { success: false, data: err.message };
        })  
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
            <Navimage tittle= "Editar Usuario" flag1={flag} /> 
            <Registeruser  className="col-6 "  firstname={uservalue.firstname} lastname={uservalue.lastname} mail={uservalue.mail} image={uservalue.image}  address={uservalue.address} phoneNumber={uservalue.phoneNumber}></Registeruser > 
        </div>
    );
}

export default Edituser;
