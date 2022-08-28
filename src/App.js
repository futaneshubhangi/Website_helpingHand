import{BrowserRouter as Router,Routes,Route}from "react-router-dom";
import Navbar from './component/navbar.component';
import Header from './component/header.component';
import Home from   './pages/Home'
import About from './pages/About'
import Register from './pages/Register'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Team from './pages/Team'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      
      <Routes>

         <Route path="/"  element={<Home/>}/> 
        <Route path="/about" element={<About/>}/>
         <Route path="/register" element={<Register/>}/> 
        <Route path="/login" element={<Login/>}/>
        <Route path="/contact" element={<Contact/>}/>  
        <Route path="/team" element={<Team/>}/>  
         
        </Routes>
        </Router>
         <Header/> 
       
    </div>
  );
}

export default App;
