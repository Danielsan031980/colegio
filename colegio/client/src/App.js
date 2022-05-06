import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
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


function App() {
  const [schedule, setSchedule] = useState({
    monday:["","","","",""],
    tuesday:["","","","",""],
    wednesday:["","","","",""],
    thursday:["","","","",""],
    friday:["","","","",""],
    userName:""
})



  return (
    <div className="App container">
      
      <UserProvider>
        <Router>
          {/* <Link to="/">Home</Link> */}
          {/* <Link to="/registro">logout</Link> */}
          <Routes>           
            <Route path="/login" element={<Login/>} />
            <Route path="/main" element={<Main/>} />
            <Route path="/detail/:id" element={<Detail setSchedule={setSchedule} schedule={schedule}/>} />
            <Route path="/schedule/:id" element={<Schedule schedule={schedule}/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/createUser" element={<Createuser/>} />
            <Route path="/editUser/:id" element={<Edituser/>} />
            <Route path="/createAsignature" element={<Createasignature/>} />
            <Route path="/asignaturelist" element={<Asignatureslist/>} />
            <Route path="/asignature/schedule/:id" element={<Scheduleasignature/>} />
            <Route path="/editAsignature/:id" element={<Editasignature/>} />
          </Routes>
        </Router>
      </UserProvider>

    </div>
  );
}

export default App;
