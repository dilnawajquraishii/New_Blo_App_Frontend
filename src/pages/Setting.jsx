import React, { useContext, useRef } from 'react'
import AuthContext from '../components/context/AuthContext'

const Setting = () => {
    let store=useContext(AuthContext)
    console.log(store.userDetails)
    let id=store.userDetails._id
    console.log(id)
    let nameRef=useRef()
    let passwordRef=useRef()
    // console.log(nameRef.current.value)
    async function handlesubmit(e){
  e.preventDefault()
let obj={
    name:nameRef.current.value,
    password:passwordRef.current.value
}


console.log(obj)

let updatadata=await  fetch(`https://new-blog-app-backend.onrender.com/update/${id}`,{
  method:"PUT",
  headers: {
    "Context-Type":"application/json"
  },
    body:JSON.stringify(obj)

})
let res=await updatadata.json()
console.log(res)

    }



  return (
    <div className='updiv m-auto pt-5 bg-white  mt-5' style={{height:"400px",width:"400px",marginTop:"50px",gap:"10px"}} >
      <form className='updatefrm  bg-waning'style={{height:"300px",width:"400px",fontWeight:"bold",color:"white"}}>
        <label htmlFor=''>
            Name:
        </label>
        <input ref={nameRef} type='text'/>
        <label htmlFor=''>
            Password:
        </label>
        <input   ref={passwordRef} type='password'></input>
        <button  className='Updatebtn' onClick={handlesubmit} style={{height:"50px",borderRadius:"20px",color:"blue",fontWeight:"bold"}}>Update Button</button>
        
      </form>
    </div>
  )
}

export default Setting
