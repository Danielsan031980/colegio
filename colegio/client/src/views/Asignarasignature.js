import React, {useState} from 'react';
import Registerasignature from '../components/Registerasignature';
import axios from 'axios';
import Navimage from './Navimage';
import RegisterAsigForUser from '../components/RegisteraAsigForUser';

const Asignarasignature = (props) => {

    const [errors, setErrors] = useState([]);
    const [asignatureSelection, setAsignatureSelection] = useState([]);
    const {schedule} = props

    const compare = async (values) => {

        const array = []
        const arrayIds = []
        const response = await axios.get("/api/asignature/", {withCredentials: true})
            .then(res=>{

                res.data.asignature.forEach((asignature, indexA)=>{
                    let flag=true
                    //console.log("indexA:" + indexA)
                    schedule.monday.map((value, indexB)=>{
                        // console.log("indexB:" + indexB)
                        // console.log(value)
                        // console.log(asignature.schedule.monday[indexB])
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
                    console.log(flag)
                    if(flag){
                        array.push(asignature.nameAsignature)
                        arrayIds.push(asignature._id)
                        
                        setAsignatureSelection(
                            {
                                asignatures:array,
                                asignaturesIds:arrayIds
                            }
                        )
                    }
                })           
                
            })
            .catch(err=>{
                return { success: false, data: err.message };
            })  
        
    }

    const asignAsignature= (values) => {
        // console.log(schedule)
        // console.log(values)
        compare(values)
        
    }
    return (
        <div>
            <RegisterAsigForUser onSubmitProp={asignAsignature}  asignatureSelection={["matematicas", "filosofia","ciencias naturales"]}  />  
        </div>
    );
}

export default Asignarasignature;
