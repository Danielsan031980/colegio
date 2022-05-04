import { simpleAxiosGet, simpleAxiosDelete} from '../accions/simpleAxios';
import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";


const Piratelist = (props) => {
    const [pirates, setPirates] = useState()
    const navigate = useNavigate();
    const {user} = props
    const getData = async  () => {
        
        const response = await simpleAxiosGet("http://localhost:8000/api/pirates")    
        const response2 = response.api.sort((a,b)=> {
           if(a.petType > b.petType){
               return 0
           }
           else if(a.petType < b.petType){
               return -1
           }
           return ""
        }
        )
        setPirates(response2)
    }
    const deletePirate = (id) => {
        simpleAxiosDelete("/api/pirate/delete/" + id) 
        getData()
    }
    useEffect(() => {  
        if(!user){
            navigate("/registro");
        }
        else{
           
        }     
        getData()
    },[pirates]);

    return (
        <div className="container"> 
           <ul>
                {
                    pirates?.map((pirate,index)=>
                        <li key={index}  >
                            <div className="row justify-content-evenly">
                                <div className="col-12  "  > <h2>{pirate.pirateName}</h2>    </div>   
                                <div className="col-3 "> <img src={pirate.image} alt="MDN" ></img> </div> 
                                <button className="col-3  button_color" onClick={() => navigate("/pirate/" + pirate._id)}>Detail</button>
                                <button className="col-3 button_color2" onClick={() => deletePirate(pirate._id)}>Walk the plank</button>  
                            </div>
                                         
                        </li>
                    )
                }
           </ul>
        </div>
    );
}

export default Piratelist;
