import React, { useContext, useEffect, useRef, useState} from 'react'

import Sidebar from '../components/Sidebar';
import AuthContext from '../components/context/AuthContext';
import { Link } from 'react-router-dom';

const Home = () => {
  let store=useContext(AuthContext)
  const [click, setclick] = useState(false);
  const [image, setimage] = useState('');
  let titleRef = useRef();
  let descriptionRef = useRef();
  // let imageRef=useRef();
  const [post, setpost] = useState([]);
  const allpost = async () => {
    let res = await fetch('http://localhost:8080/post/allusersPosts')
    let data = await res.json()
    setpost(data.allposts)
    console.log(data.allposts)
   
    setclick(false)
    // set click false mean  after post hide form

  }


  useEffect(() => {
    allpost()
  }, [])
  const handleFilechange = (e) => {
    let value = e.target.files[0];
    console.log(value)
    setimage(value)
  }
  function doConvert(img) {
    return new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onload = function () {
        resolve(reader.result)
      }
      reader.onerror = function (err) {
        reject(reader.error);
      }
    })

  }
  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    let convertImage = await doConvert(image)
    console.log(convertImage)
    let obj = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      image: convertImage,
      author:store.userDetails._id


    }
    console.log(obj)
    
      let res=await fetch('http://localhost:8080/post/create',{
      method:'POST',
        headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify(obj)
      })
      let data=await res.json()
      console.log(data)
      allpost()  // main function
      setclick(false)  // after post do not show my post form
  }

  return (
    <div className='row'>
      <div className='col-2 bg-warning d-flex justify-content-center'>
        <Sidebar setclick={setclick} click={click} />
      </div>
      <div className='col-10 bg-success'>
        <div className='row row-cols-2 pe-4 d-flex justify-content-center row mt-3 ms-5 gap-5' style={{ display: "flex", justifyContent: "space-evenly" }}>
          {post.map((ele) => {
            return <div className="card  " style={{ height:"25rem",width: '19.5rem', gap: "10px", marginTop: "20px" }}>
              <img  style={{ height: "14rem", width: "18rem" }} src={ele.image} className="home-img card-img-top mt-2" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Title:{ele.title}</h5>
    <p className="card-title text-truncate" style={{}}>Des : {ele.description}</p>



                <Link to="/singlepost" state={ele} className="btn btn-primary"style={{color:"white"}}>See More Details</Link>
              </div>
            </div>

          })}
        </div>
      </div>
      {click && <div className=' formBox mt-4' style={{}}>
        <form action='' className='col-md-4 p-2'>
          <button onClick={() => setclick(false)} type="button" className="btn-close mb-5" aria-label="Close"></button>
          <label htmlFor='' style={{fontWeight:"bold"}}>Title</label>
          <input ref={titleRef}></input>
          <label htmlFor='file' className='btn btn-primary  upload-img' style={{fontWeight:"bold"}}>upload image</label>
          <input on onChange={handleFilechange} type="file" id='file' hidden></input>

          {!image && <img style={{height:"12rem",width:"19rem",marginLeft:"2rem"}} src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?w=740&t=st=1716437680~exp=1716438280~hmac=316ce96201a98d6662e0277c5db5b94b6427dbc7ad16150ce173150597209200" alt="" />}
          {image && <img style={{height:"12rem",width:"15rem",marginLeft:"5rem"}} src={URL.createObjectURL(image)} alt="" />}
          <label htmlFor='' style={{fontWeight:"bold"}}>Description</label>
          <textarea ref={descriptionRef} name='' id=''></textarea>
          <button style={{fontWeight:"bold", color:"blue"}} onClick={handleBlogSubmit} className='btn btn-info blg'>Blog Post</button>
        </form>
      </div>}
    </div>
  )

}

export default Home
