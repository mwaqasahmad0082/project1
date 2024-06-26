import Project from "./components/project";
import Registration from "./components/registration";
import Login from "./components/login";
import { Routes, Route } from "react-router-dom";


function App() {
  return(
    <div>
      <Routes>
    <Route path="/" element={ <Project />}/>
    <Route path="/registration" element={ <Registration />}/>
    <Route path="/login" element={ <Login />}/>
    </Routes>
    
   </div>


  )
  
}

export default App;
