import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navimage from "./Navimage";
import { useUser } from '../contexts/userContext';
import { simpleAxiosGet} from '../accions/simpleAxios';
import axios from 'axios';
import Asignarasignature from "./Asignarasignature";

const Detail = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useUser();
    const { setSchedule, schedule, asignaturelist, setAsignaturelist, onSubmitprop } = props
    const [uservalue, setUservalue] = useState()
    const [teacherMaterias, setTeacherMaterias] = useState()
    const [flag, setFlag] = useState();
    const [flagAdmin, setFlagAdmin] = useState();
    //data from function asignature.

    const asignatures = async  (uservalue) => {
        const response = await simpleAxiosGet("http://localhost:8000/api/asignature")       
        // asignaturas disponibles
        const newAsignatures = []
        // posicion asignaturas disponibles
        const positionAsignature = []
        // matriz de asignaturas
        const arraySchedule = {
            monday:["","","","",""],
            tuesday:["","","","",""],
            wednesday:["","","","",""],
            thursday:["","","","",""],
            friday:["","","","",""],
            userName:""
        }
        // calculo asignaturas, Ids disponibles, matriz de IDs
        
        response.asignature.forEach((value, index)=>{
            uservalue.nameAsignatures.forEach((asignature) => {
                if(asignature === value._id) {    
                    newAsignatures.push(value.nameAsignature)
                    positionAsignature.push(value._id)
                    value.schedule.monday.forEach((hour, index)=>{
                        if(hour === true){
                            arraySchedule.monday[index] = value.nameAsignature
                        }
                    })
                    value.schedule.tuesday.forEach((hour, index)=>{
                        if(hour === true){
                            arraySchedule.tuesday[index] = value.nameAsignature
                        }
                    })
                    value.schedule.wednesday.forEach((hour, index)=>{
                        if(hour === true){
                            arraySchedule.wednesday[index] = value.nameAsignature
                        }
                    })
                    value.schedule.thursday.forEach((hour, index)=>{
                        if(hour === true){
                            arraySchedule.thursday[index] = value.nameAsignature
                        }
                    })
                    value.schedule.friday.forEach((hour, index)=>{
                        if(hour === true){
                            arraySchedule.friday[index] = value.nameAsignature
                        }
                    })
                }
            })
        })

       
        setTeacherMaterias({
            newAsignatures:newAsignatures,
            positionAsignature:positionAsignature
        })
        arraySchedule.userName = "Horario: " +  uservalue.firstname + " " + uservalue.lastname
        setSchedule(arraySchedule)
    }

    const getData = async  () => {
        const usertemporal =[]
        if(user.rolType === "profesor"){
            asignatures(user)
            setUservalue(user)
        }
        else{
            axios.get(`/api/user/${id}`, {withCredentials: true})
            .then(res=>{
                asignatures(res.data)
                setUservalue(res.data)                                     
            })
            .catch(err=>{
                return { success: false, data: err.message };
            })  
        }

     
    }   
    const scheduleView = () => {
        navigate("/schedule/"+ id)
    }
    const  deleteAsignature = async (id) => {

        const newArray = uservalue.nameAsignatures.filter((asignature)=>{
            if(asignature !==id ){
                return asignature
            }           
        })
        const publishArray = {
            nameAsignatures:newArray 
        }
        axios.put(`/api/user/update/${uservalue._id}`, publishArray, {withCredentials: true} )
            .then(res=>{
                setUservalue(res.data)
                console.log(res.data.api)
            })
            .catch(err=>{
                return { success: false, data: err.message };
            }) 
            onSubmitprop()      

    }
    useEffect(() => {  
        if(!user){
            navigate("/login");
        }
        else if(user.rolType === "administrador"){
            setFlag(true)
            if(uservalue?.rolType === "administrador"){
                setFlagAdmin(false)
            }
            else{
                setFlagAdmin(true)
            }
            
        }
        else if(user.rolType === "profesor"){
            setFlag(false)
            setFlagAdmin(false)
        }
       
        getData()
    }, [uservalue, asignaturelist])

    return (

        <div >
            <Navimage tittle= {uservalue?.firstname + "  " + uservalue?.lastname}   flag1={flag} flag2={false} />             
                <div className="row justify-content-evenly align-items-center  data-detail">
                    <img className="col-3" src={`${uservalue?.image}`} alt="foto"/>
                    <div className="col-7" >   
                        <div className="row align-items-start justify-content-start" >                       
                            <span className="col-2" > Celular</span> <span className="col-9"> {uservalue?.phoneNumber} </span>  
                            <span className="col-2" > Dirección </span > <span className="col-9" > {uservalue?.address} </span>   
                            <span className="col-2" > Email </span> <span className="col-9"  > {uservalue?.mail} </span> 
                            <span className="col-2" > Cargo </span> <span className="col-9"  > {uservalue?.rolType} </span>
                        </div>   
                    </div>
                </div>
                <div className="row align-items-center">
                     <h2>Materias</h2>
                    <div  >
                        <ul >
                            {
                                teacherMaterias?.newAsignatures?.map((asignature, index)=>
                                    <li className="row  justify-content-center "  key={index}> 
                                        <div className="col-6  " >
                                                <div className="row  justify-content-center" >
                                                    <div className="col-6 asignature">{asignature}</div>
                                                {flag &&  <button className="col-6 btn btn-primary border-white asignature"  onClick={() => deleteAsignature(teacherMaterias.positionAsignature[index])} > Eliminar</button>}
                                                </div>
                                        </div>
                                    </li>    
                                )
                            }                        
                        </ul>
                    </div>
                        {flagAdmin && <Asignarasignature schedule={schedule} asignaturelist={asignaturelist} setAsignaturelist={setAsignaturelist} onSubmitprop={onSubmitprop} />}
                </div>
                        {flagAdmin && <button className="col-3 btn btn-primary border-white"  onClick={() => scheduleView()}  > Horario </button>}
        </div>
    );
}
export default Detail;
