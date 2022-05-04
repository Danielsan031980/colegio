import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import Navimage from './Navimage';
import axios from 'axios';
const Scheduleasignature = () => {
    const [schedule_, setSchedule_] = useState(
        {
            monday:["","","","",""],
            tuesday:["","","","",""],
            wednesday:["","","","",""],
            thursday:["","","","",""],
            friday:["","","","",""]
        }
    ); 
    const { id } = useParams(); 
    const  getData = async () =>{
        await axios.get("/api/asignature/" + id)
        .then(res=>{
            
            console.log(res.data.asignature)
            setSchedule_(
                {
                    monday:   [res.data.asignature.schedule.monday[0]?res.data.asignature.nameAsignature:""    ,res.data.asignature.schedule.monday[1]?res.data.asignature.nameAsignature:""   ,res.data.asignature.schedule.monday[2]?res.data.asignature.nameAsignature:""   ,res.data.asignature.schedule.monday[3]?res.data.asignature.nameAsignature:""      ,res.data.asignature.schedule.monday[4]?res.data.asignature.nameAsignature:""   ,res.data.asignature.schedule.monday[5]?res.data.asignature.nameAsignature:""   ],
                    tuesday:  [res.data.asignature.schedule.tuesday[0]?res.data.asignature.nameAsignature:""   ,res.data.asignature.schedule.tuesday[1]?res.data.asignature.nameAsignature:""  ,res.data.asignature.schedule.tuesday[2]?res.data.asignature.nameAsignature:""  ,res.data.asignature.schedule.tuesday[3]?res.data.asignature.nameAsignature:""     ,res.data.asignature.schedule.tuesday[4]?res.data.asignature.nameAsignature:""  ,res.data.asignature.schedule.tuesday[5]?res.data.asignature.nameAsignature:""  ],                    
                    wednesday:[res.data.asignature.schedule.wednesday[0]?res.data.asignature.nameAsignature:"" ,res.data.asignature.schedule.wednesday[1]?res.data.asignature.nameAsignature:"",res.data.asignature.schedule.wednesday[2]?res.data.asignature.nameAsignature:"",res.data.asignature.schedule.wednesday[3]?res.data.asignature.nameAsignature:""   ,res.data.asignature.schedule.wednesday[4]?res.data.asignature.nameAsignature:"",res.data.asignature.schedule.wednesday[5]?res.data.asignature.nameAsignature:""],
                    thursday: [res.data.asignature.schedule.thursday[0]?res.data.asignature.nameAsignature:""  ,res.data.asignature.schedule.thursday[1]?res.data.asignature.nameAsignature:"" ,res.data.asignature.schedule.thursday[2]?res.data.asignature.nameAsignature:"" ,res.data.asignature.schedule.thursday[3]?res.data.asignature.nameAsignature:""    ,res.data.asignature.schedule.thursday[4]?res.data.asignature.nameAsignature:"" ,res.data.asignature.schedule.thursday[5]?res.data.asignature.nameAsignature:"" ],
                    friday:   [res.data.asignature.schedule.friday[0]?res.data.asignature.nameAsignature:""    ,res.data.asignature.schedule.friday[1]?res.data.asignature.nameAsignature:""   ,res.data.asignature.schedule.friday[2]?res.data.asignature.nameAsignature:""   ,res.data.asignature.schedule.friday[3]?res.data.asignature.nameAsignature:""      ,res.data.asignature.schedule.friday[4]?res.data.asignature.nameAsignature:""   ,res.data.asignature.schedule.friday[5]?res.data.asignature.nameAsignature:""   ]
                }

            )                         
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
            <Navimage tittle= {"akjñlkd"}  flag1={false} flag2={true} /> 
            <div className="row">
                <div className="col-2" >Hora</div>
                <div className="col-2" >Lunes</div>
                <div className="col-2" >Martes</div>
                <div className="col-2" >Miercoles</div>
                <div className="col-2">Jueves</div>
                <div className="col-2">Viernes</div>
            </div>
            <div className="row">
                <div className="col-2" >7:00 am</div>
                <div className="col-2" >{schedule_.monday[0]}</div>
                <div className="col-2" >{schedule_.tuesday[0]}</div>
                <div className="col-2" >{schedule_.wednesday[0]}</div>
                <div className="col-2" >{schedule_.thursday[0]}</div>
                <div className="col-2" >{schedule_.friday[0]}</div>
            </div>
            <div className="row">
                <div className="col-2" >8:00 am</div>
                <div className="col-2" >{schedule_.monday[1]}</div>
                <div className="col-2" >{schedule_.tuesday[1]}</div>
                <div className="col-2" >{schedule_.wednesday[1]}</div>
                <div className="col-2" >{schedule_.thursday[1]}</div>
                <div className="col-2" >{schedule_.friday[1]}</div>
            </div>
            <div className="row">
                <div className="col-2" >9:00 am</div>
                <div className="col-2" >{schedule_.monday[2]}</div>
                <div className="col-2" >{schedule_.tuesday[2]}</div>
                <div className="col-2" >{schedule_.wednesday[2]}</div>
                <div className="col-2" >{schedule_.thursday[2]}</div>
                <div className="col-2" >{schedule_.friday[2]}</div>
            </div>
            <div className="row">
                <div className="col-2" >10:00 am</div>
                <div className="col-2" >{schedule_.monday[3]}</div>
                <div className="col-2" >{schedule_.tuesday[3]}</div>
                <div className="col-2" >{schedule_.wednesday[3]}</div>
                <div className="col-2" >{schedule_.thursday[3]}</div>
                <div className="col-2" >{schedule_.friday[3]}</div>
            </div>
            <div className="row">
                <div className="col-2" >11:00 am</div>
                <div className="col-2" >{schedule_.monday[4]}</div>
                <div className="col-2" >{schedule_.tuesday[4]}</div>
                <div className="col-2" >{schedule_.wednesday[4]}</div>
                <div className="col-2" >{schedule_.thursday[4]}</div>
                <div className="col-2" >{schedule_.friday[4]}</div>
            </div>
            <div className="row">
                <div className="col-2" >12:00 am</div>
                <div className="col-2" >{schedule_.monday[5]}</div>
                <div className="col-2" >{schedule_.tuesday[5]}</div>
                <div className="col-2" >{schedule_.wednesday[5]}</div>
                <div className="col-2" >{schedule_.thursday[5]}</div>
                <div className="col-2" >{schedule_.friday[5]}</div>
            </div>
            
        </div>
    );
}

export default Scheduleasignature;
