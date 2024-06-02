import React, { useContext } from 'react'
import {Form, Link, useNavigate} from "react-router-dom"
import AuthContext from './context/AuthContext'
import Login from '../pages/Login'
import { CiSettings } from "react-icons/ci";
// import { IoMdSettings } from "react-icons/io";

const Navbar = () => {
  let store=useContext(AuthContext)
  let navigate=useNavigate()
  let  handlelogout=()=>{
    localStorage.removeItem('userDetail')
    store.setuserDetails({
      name:"",
      _id:"",
      Login:false
    })
    navigate('/login')
    
  }
 
  

  return (
    <div>
   <nav className="navbar navbar-expand-lg navbar-light bg-light" >
    <ul></ul>
  <Link className="navbar-brand" to="/"> <span className='text-white'>Blog Application</span></Link>
  <li className="nav-item active"style={{listStyle:"none"}}>

        <Link className="nav-link" to="/" style={{marginLeft:"30px",fontWeight:"bold",color:"white"}}>Home</Link>
      </li>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>

  <div className="collapse navbar-collapse " id="navbarSupportedContent" >
    <ul className="navbar-nav m-auto" >
  <div className="dropdown drp me-5">
  <button className="btn btn-secondary bg-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"style={{fontWeight:"bold",color:"white",fontFamily:"calibri"}}>
    Users
  </button>
  <ul className="dropdown-menu">  
  

    {   !store.userDetails.login &&<li><Link className="dropdown-item" to="/login">Login</Link></li>}  
{ !store.userDetails.login &&<li><Link className="dropdown-item" to="/register">Signup</Link></li>}
{  store.userDetails.login &&<li onClick={handlelogout}><Link className="dropdown-item" to="">Logout</Link></li>}
  </ul>
</div>


     
      <li className="nav-item">
        <Link className="nav-link mb-4" to="/yourpost"style={{marginLeft:"400px",position:"absolute",fontWeight:"bold",fontFamily:"calibri",color:"white"}} >YourPost</Link>
      </li>
    
      <li className="nav-item active" style={{listStyle:"none"}}>
<Link className="nav-link" to="/setting" style={{marginRight:"50px",fontWeight:"bold"}}>   <CiSettings style={{fontSize:"25px",fontWeight:"bold",marginRight:"10px",fontFamily:"calibri",color:"white"}} /> <span className='text-white'> Setting</span></Link>

      </li>
    </ul>
   
  </div>

{/* <li className="nav-item active" style={{listStyle:"none"}}>
<Link className="nav-link" to="/setting" style={{marginRight:"50px",fontWeight:"bold"}}>   <CiSettings style={{fontSize:"25px",fontWeight:"bold",marginRight:"10px"}} />   Setting</Link>

      </li> */}
</nav>

    </div>
  )
}

export default Navbar
