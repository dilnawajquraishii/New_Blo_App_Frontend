import React from 'react'
import { useLocation } from 'react-router-dom'

const Singlepost = () => {
    let location=useLocation()
    console.log(location.state)

       

  return (
   <div className="card m-auto mt-5" style={{width: '25rem',height:"400px"}}>
      {/* <h3 className='m-auto fw-5'>User Details </h3> */}

  <img src={location.state.image}  className="card-img-top" style={{height:"12rem"}} alt="..." />
  <div className="singlepage card-body mt-3 m-auto fw-bold" style={{fontFamily:"sans-serif",color:"hotpink",fontSize:"25px"}} >
    <p className="card-title">Name : {location.state.author.name}</p>
    <p>Title  :  {location.state.title}</p>

    <p className="card-text">Description  :  {location.state.description}</p>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
</div>

    // <div className='row'style={{width:"300px",height:"300px"}}>
    //   <h1>Single Page</h1>
    //   <div className='col'>
    // <img  src={location.state.image} style={{height:"200px",width:"200px"}} />
    // <h5>{location.state.author.name}</h5>
    // <p>Title:{location.state.title}</p>
    // <p>Description:{location.state.description}</p>


    //   </div>
    // </div>
  )
}

export default Singlepost
