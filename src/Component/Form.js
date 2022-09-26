import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './style.css'

function Form() {

const[post, setPost]=useState(null)



const [create,setCreate]=useState({
    login: true,
    about: "",
    title: "",
    subtitle: "",
    files: null
  })


useEffect(()=>{
    axios.get("https://empappregular.herokuapp.com/getAllPosts")
    .then((res)=>{
      
    setPost(Object.values(res.data))
    console.log(Object.values(res.data))

    
   })
    },[])

    
  const changeHandler=(e)=>{
    setCreate({
      ...create,[e.target.name]:e.target.value
   })
  }

  const fileHandler=(e)=>{
    setCreate({
      ...create,[e.target.name]:e.target.files[0]
   })
   console.log(e.target.files[0])
  }
  






const submitHandler=(e)=>{
    e.preventDefault()
const formData=new FormData()

  formData.append("title", create.title)
formData.append('subtitle', create.subtitle)
formData.append('about', create.about)
formData.append('files', create.files, create.files.name)
console.log(formData)


   axios.post("https://empappregular.herokuapp.com/createPost",formData,{
    headers:{
      "token" : JSON.parse( sessionStorage.getItem("token")),
      "Content-Type":"multipart/form-data"
    }
   })
  .then((res)=>{alert("posted") 
  axios.get("https://empappregular.herokuapp.com/getAllPosts")
    .then((res)=>{
      
    setPost(Object.values(res.data))
    console.log(Object.values(res.data))
    
    
   }) 
  setCreate({login:true})

})
  }


return (
    <div>

{create.login ? (
      <div>
      <h1>ALL POSTS</h1>
      <button className='button' onClick={()=>setCreate({login:false})}>Create Post</button>
      {post?.map((item,index)=>
      <p className='block' key={index} >TITLE:{item.title}<br/>SUBTITLE:{item.subtitle}<br/>ABOUT:{item.about} <br/> Image:<img style={{height:200,width:200}} src={`https://empappregular.herokuapp.com/${item.images}`} alt=''/> </p>)}
    </div>
     ):
     
(
<div>
  <form style={{marginTop:30}} onSubmit={submitHandler} >
  <label>Title:-</label>
  <textarea type="text" name="title"  onChange={changeHandler} />
  <br/>
  <label> Subtitle:-</label>
  <textarea type="text" name="subtitle" onChange={changeHandler} /><br/>
  <label>About:-</label>
  <textarea type="text" name="about"  onChange={changeHandler}/><br/><br/>
   <input type="file" name="files"  onChange={fileHandler}/><br/><br/>
  <button>Submit</button>
</form>
</div>
     )
    }

</div>
  )
}

export default Form