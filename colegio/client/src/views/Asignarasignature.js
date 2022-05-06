import React, {useState, useEffect} from 'react';
import Registerasignature from '../components/Registerasignature';
import axios from 'axios';
import Navimage from './Navimage';
import RegisterAsigForUser from '../components/RegisteraAsigForUser';
import { useNavigate, useParams } from "react-router-dom";

const Asignarasignature = (props) => {
    const { id } = useParams();
    const [errors, setErrors] = useState([]);
    const [uservalue, setUservalue] = useState();
    const [asignatureSelection, setAsignatureSelection] = useState({
        asignatures:["Elegir"],
        asignaturesIds:[""]
    }
    );
    const {schedule} = props
    const compare = async (values) => {
        const array = ["Elegir"]
        const arrayIds = [""]
        const response = await axios.get("/api/asignature/", {withCredentials: true})
            .then(res=>{
                res.data.asignature.forEach((asignature, indexA)=>{
                    let flag=true
                    schedule.monday.forEach((value, indexB)=>{
                        if( value !== "" &&  asignature.schedule.monday[indexB] === true ){
                         flag=false
                        }
                     })
                    schedule.tuesday.forEach((value, indexB)=>{
                        if( value !== "" &&  asignature.schedule.tuesday[indexB] === true ){
                            flag=false
                        }
                    })
                    schedule.wednesday.forEach((value, indexB)=>{
                        if( value !== "" &&  asignature.schedule.wednesday[indexB] === true ){
                            flag=false
                        }
                    })
                    schedule.thursday.forEach((value, indexB)=>{
                        if( value !== "" &&  asignature.schedule.thursday[indexB] === true ){
                            flag=false
                        }
                    })
                    schedule.friday.forEach((value, indexB)=>{
                        if( value !== "" &&  asignature.schedule.friday[indexB] === true ){
                            flag=false
                        }
                    })
                    
                    if(flag){
                        array.push(asignature.nameAsignature)
                        arrayIds.push(asignature._id)
                    }
                })                           
            })
            .catch(err=>{
                return { success: false, data: err.message };
            })  
            setAsignatureSelection(
                {
                    asignatures:array,
                    asignaturesIds:arrayIds
                }
            )
            axios.get(`/api/user/${id}`, {withCredentials: true} )
            .then(res=>{
                setUservalue(res.data)
             })
             .catch(err=>{
                 return { success: false, data: err.message };
            })
    }
    const asignAsignature= (values) => {
        const publishArray = {
            nameAsignatures:[...uservalue.nameAsignatures, values.selector]
        }
        axios.put(`/api/user/update/${id}`, publishArray, {withCredentials: true} )
        .then(res=>{
         })
         .catch(err=>{
             return { success: false, data: err.message };
        })        
        compare(values)
    }
    
    useEffect(() => { 
        compare()
    },[asignatureSelection]);
    return (
        <div>
            <RegisterAsigForUser onSubmitProp={asignAsignature}  asignatureSelection={asignatureSelection.asignatures} asignatureIds={asignatureSelection.asignaturesIds}  />  
        </div>
    );
}

export default Asignarasignature;
