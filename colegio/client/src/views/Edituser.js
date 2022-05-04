import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import Registeruser from "../components/Registeruser";

const Edituser = () => {
    const { id } = useParams();
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
        getData()
        
    },[]);
    return (
        <div>
            hola
            <Registeruser  className="col-6 "  firstname={uservalue.firstname} lastname={uservalue.lastname} mail={uservalue.mail} image={uservalue.image}  address={uservalue.address} phoneNumber={uservalue.phoneNumber}></Registeruser > 
        </div>
    );
}

export default Edituser;
