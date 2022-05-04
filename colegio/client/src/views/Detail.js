import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../App.css';
import Navimage from "./Navimage";
import { useUser } from '../contexts/userContext';
import { simpleAxiosGet} from '../accions/simpleAxios';
import axios from 'axios';
import Asignarasignature from "./Asignarasignature";

const Detail = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useUser();
    const { setSchedule, schedule } = props
    const [uservalue, setUservalue] = useState()
    const [teacherMaterias, setTeacherMaterias] = useState()

    
    const asignatures = async  (uservalue) => {
        const response = await simpleAxiosGet("http://localhost:8000/api/asignature")       
        const newAsignatures = []

        const asignaturesDistribution = {
            newAsignatures: [],
            positionAsignature:[]
        }

        const arraySchedule = {
            monday:["","","","",""],
            tuesday:["","","","",""],
            wednesday:["","","","",""],
            thursday:["","","","",""],
            friday:["","","","",""]
        }
        response.asignature.forEach((value)=>{
            uservalue.nameAsignatures.forEach((asignature) => {
                if(asignature === value._id) {    
                    asignaturesDistribution.newAsignatures.push(value.nameAsignature)
                    asignaturesDistribution.positionAsignature.push(value._id)

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
        setSchedule(arraySchedule)
        setTeacherMaterias(asignaturesDistribution)
    }

    const getData = async  () => {
        const usertemporal =[]
        if(user.rolType === "profesor"){
            // usertemporal = user
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
            const newUservalue = uservalue
            console.log(uservalue)
            const newArray = uservalue.nameAsignatures.filter((asignature)=>{
                if(asignature !==id ){
                    return asignature
                }           
            })
            const publishArray = {
                nameAsignatures:newArray 
            }
            console.log(publishArray)

            axios.put(`/api/user/update/${uservalue._id}`, publishArray, {withCredentials: true} )
               .then(res=>{
                    setUservalue(res.data)
                    console.log(res.data)
                })
                .catch(err=>{
                    return { success: false, data: err.message };
               })        
    }
    useEffect(() => {  
        getData()
    }, [uservalue])

    return (

        <div className="detail">
            <Navimage tittle= {"akjñlkd"}  flag1={false} flag2={true} />             
                <div className="row justify-content-evenly">
                    <img className="col-3" src={`${uservalue?.image}`} alt="foto"/>
                    <div className="col-3" >
                        <span className="col-6"> {uservalue?.firstname} </span>  <span className="col-6" > {uservalue?.lastname} </span>
                    </div>
                </div>
                <div className="row justify-content-start" >      
                    <span> {uservalue?.phoneNumber} </span>  
                    <span> {uservalue?.address} </span>   
                    <span> {uservalue?.mail} </span> 
                </div>
                <div>
                    <ul className="row" >
                        {
                            teacherMaterias?.newAsignatures?.map((asignature, index)=>
                                <li className="col-3" key={index}>
                                    {asignature}
                                    {
                                        <button onClick={() => deleteAsignature(teacherMaterias.positionAsignature[index])} > Eliminar</button>
                                    }
                                </li>    
                            )
                        }                        
                    </ul>
                </div>
                <button className="col-3"  onClick={() => scheduleView()}  > Horario </button>
                <Asignarasignature schedule={schedule}  />
        </div>
    );
}
export default Detail;
