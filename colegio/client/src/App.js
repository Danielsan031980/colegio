import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';
import Home from './views/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from './contexts/userContext';
import Login from './views/Login';
import Main from './views/Main';
import Detail from './views/Detail';
import Schedule from './views/Schedule';
import Createuser from './views/Createuser';
import Edituser from './views/Edituser';
import Createasignature from './views/Createasignature';
import Asignatureslist from './views/Asignatureslist';
import Scheduleasignature from './views/Scheduleasignature';
import Editasignature from './views/Editasignature';
import Firstlogin from './views/Firstlogin';
import axios from 'axios';
import { useUser } from "./contexts/userContext";


function App() {

  const [flag2, setFlag2] = useState(true);
  const [update, setUpdate] = useState();
  const [asignaturelist, setAsignaturelist] = useState({
    free:{
        materia:[]
    },
    used:{
        materia:[]
    }
})
  const [schedule, setSchedule] = useState({
    monday:["","","","","",""],
    tuesday:["","","","","",""],
    wednesday:["","","","","",""],
    thursday:["","","","","",""],
    friday:["","","","","",""],
})

const  getData = async () =>{
  let newMateria = []
  let newMateria2 = []
  const nofreeAsigantures = []
  await axios.get("/api/user/", {withCredentials: true})
      .then(res=>{  
          res.data.forEach((asignature)=>{
                  asignature.nameAsignatures.forEach((valor)=>{
                      nofreeAsigantures.push(valor)
                  })
          })                                  
      })
      .catch(err=>{
          return { success: false, data: err.message };
      })  
      await axios.get("/api/asignature")
      .then(res=>{
          res.data.asignature.forEach((materia,index)=>{
              let flag = true
              nofreeAsigantures.forEach((nofreemateria, ind)=>{
                  if(materia._id === nofreemateria){
                      flag = false
                  }                  
              })
              if(flag){
                  newMateria.push(materia)
              }
              else{
                 newMateria2.push(materia)
              }
          })                
      })
      .catch(err=>{
          return { success: false, data: err.message };
      })             
      setAsignaturelist({
          free:{
              materia:newMateria
          },
          used:{
              materia:newMateria2
          }
      })
}


  return (
    <div className="App container-sm">
      
      <UserProvider>
        <Router>
          {/* <Link to="/">Home</Link> */}
          {/* <Link to="/registro">logout</Link> */}
          <Routes>           
            <Route path="/detail/:id" element={<Detail setSchedule={setSchedule} schedule={schedule} asignaturelist={asignaturelist}  setAsignaturelist={setAsignaturelist} onSubmitprop={getData} />} />
            <Route path="/login" element={<Login flag2={flag2}/>} />
            <Route path="/PrimerLogueo" element={<Firstlogin flag2={flag2} setFlag2={setFlag2}/>} />
            <Route path="/main" element={<Main asignaturelist={asignaturelist} setAsignaturelist={setAsignaturelist} />} />
            <Route path="/schedule/:id" element={<Schedule schedule={schedule}/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/createUser" element={<Createuser/>} />
            <Route path="/editUser/:id" element={<Edituser/>} />
            <Route path="/createAsignature" element={<Createasignature/>} />
            <Route path="/asignaturelist" element={<Asignatureslist asignaturelist={asignaturelist}  setAsignaturelist={setAsignaturelist} onSubmitprop={getData} />} />
            <Route path="/asignature/schedule/:id" element={<Scheduleasignature/>} />
            <Route path="/editAsignature/:id" element={<Editasignature />} />
          </Routes>
        </Router>
      </UserProvider>

    </div>
  );
}

export default App;
