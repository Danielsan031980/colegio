import Navimage from './Navimage';
import { useNavigate, useParams } from "react-router-dom";
import { useUser } from "../contexts/userContext";
import React, {useEffect, useState} from 'react';

const Schedule = (props) => {
    const { id } = useParams();
    const  {schedule} = props
    const navigate = useNavigate();
    const { user, setUser } = useUser();
    const [flag, setFlag] = useState();
    const retornar = () => {
        navigate("/detail/" + id);
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
    },[]);
    return (
        <div>
            <Navimage tittle= {schedule.userName}  flag1={flag} flag2={false}  /> 
            <div className="row table">
                <div className="col-2" >Hora</div>
                <div className="col-2" >Lunes</div>
                <div className="col-2" >Martes</div>
                <div className="col-2" >Miercoles</div>
                <div className="col-2">Jueves</div>
                <div className="col-2">Viernes</div>
            </div>
            <div className="row">
                <div className="col-2" >7:00 am</div>
                <div className="col-2" >{schedule.monday[0]}</div>
                <div className="col-2" >{schedule.tuesday[0]}</div>
                <div className="col-2" >{schedule.wednesday[0]}</div>
                <div className="col-2" >{schedule.thursday[0]}</div>
                <div className="col-2" >{schedule.friday[0]}</div>
            </div>
            <div className="row">
                <div className="col-2" >8:00 am</div>
                <div className="col-2" >{schedule.monday[1]}</div>
                <div className="col-2" >{schedule.tuesday[1]}</div>
                <div className="col-2" >{schedule.wednesday[1]}</div>
                <div className="col-2" >{schedule.thursday[1]}</div>
                <div className="col-2" >{schedule.friday[1]}</div>
            </div>
            <div className="row">
                <div className="col-2" >9:00 am</div>
                <div className="col-2" >{schedule.monday[2]}</div>
                <div className="col-2" >{schedule.tuesday[2]}</div>
                <div className="col-2" >{schedule.wednesday[2]}</div>
                <div className="col-2" >{schedule.thursday[2]}</div>
                <div className="col-2" >{schedule.friday[2]}</div>
            </div>
            <div className="row">
                <div className="col-2" >10:00 am</div>
                <div className="col-2" >{schedule.monday[3]}</div>
                <div className="col-2" >{schedule.tuesday[3]}</div>
                <div className="col-2" >{schedule.wednesday[3]}</div>
                <div className="col-2" >{schedule.thursday[3]}</div>
                <div className="col-2" >{schedule.friday[3]}</div>
            </div>
            <div className="row">
                <div className="col-2" >11:00 am</div>
                <div className="col-2" >{schedule.monday[4]}</div>
                <div className="col-2" >{schedule.tuesday[4]}</div>
                <div className="col-2" >{schedule.wednesday[4]}</div>
                <div className="col-2" >{schedule.thursday[4]}</div>
                <div className="col-2" >{schedule.friday[4]}</div>
            </div>
            <div className="row">
                <div className="col-2" >12:00 am</div>
                <div className="col-2" >{schedule.monday[5]}</div>
                <div className="col-2" >{schedule.tuesday[5]}</div>
                <div className="col-2" >{schedule.wednesday[5]}</div>
                <div className="col-2" >{schedule.thursday[5]}</div>
                <div className="col-2" >{schedule.friday[5]}</div>
            </div>

            <button className="col-6 "  onClick={() => retornar()} > Retornar</button>
        </div>
    );
}

export default Schedule;
