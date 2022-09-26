import React, {  useEffect, useState } from 'react'
import axios from 'axios'
import './style.css'

const Dashboard = () => {

const[post, setPost]=useState('')

const [create,setCreate]=useState({
  login: true,
  about: "",
  title: "",
  subtitle: "",
})

  useEffect(()=>{
  axios.get("https://empappregular.herokuapp.com/getAllPosts")
  .then((res)=>{
    
  setPost(Object.values(res.data))
  
 })
  },[])


console.log(post)

  const changeHandler=(e)=>{
    setCreate({
      ...create,[e.target.name]:e.target.value
   })
  }

  const submitHandler=(e)=>{
    e.preventDefault()
    const {about,title,subtitle} = create;
    console.log(create)
   const newCreate = {"title" : title,"subtitle" : subtitle ,"about" : about}
   console.log(newCreate)
   axios.post("https://empappregular.herokuapp.com/createPost",newCreate,{
    headers:{
      "token" : JSON.parse( sessionStorage.getItem("token"))
    }
   })
  .then((res)=>alert("posted"))  
  setCreate({login:true})
  }

return (
   <div>
     {create.login ? (
      <div>
      <h1>ALL POSTS</h1>
      <button className='button' onClick={()=>setCreate({login:false})}>Create Post</button>
      {post.map((post,index)=>
      <p className='block' >TITLE:{post.title}<br/>SUBTITLE:{post.subtitle}<br/>ABOUT:{post.about}</p>)}
    </div>
     ):
     
(
<div>
  <form style={{marginTop:30}} onSubmit={submitHandler}>
  <label>Title:-</label>
  <textarea type="text" name="title"  onChange={changeHandler}/>
  <br/>
  <label> Subtitle:-</label>
  <textarea type="text" name="subtitle" onChange={changeHandler}/><br/>
  <label>About:-</label>
  <textarea type="text" name="about" onChange={changeHandler}/><br/>
  <button>Submit</button>
</form>
</div>
     )
    }
</div>
)
}

export default Dashboard