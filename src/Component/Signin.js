import { Grid } from '@mui/material'
import React,{useState} from 'react'
import {Link} from "react-router-dom"
import Header from './Header'
import Icon from '../Image/Icon.png'
import Image from '../Image/Image.png'
import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';





function Signin() {


  const navigate = useNavigate();


const[details,setDetails]=useState({
  email:"",
  password:""

})



const changeHandle=(e)=>{
  setDetails({
    ...details,[e.target.name]:e.target.value
  })
}

const changeSubmit=(e)=>{
  e.preventDefault()
// console.log(details)
const {email, password} = details;
const newDetails = {"emp_id" : parseInt(email) ,"password" : password}
// console.log(newDetails)
axios.post("https://empappregular.herokuapp.com/login",newDetails)
.then((res)=>{alert(res.data)
sessionStorage.setItem('token', JSON.stringify(res.data.token))
sessionStorage.setItem('user', JSON.stringify(res.data.user))
navigate('/Dashboard')
})

}








return (
    <div>
       <Header/> 
     <Grid container>
     <Grid item lg={6} md={6} sm={12} xs={12} style={{backgroundColor:"white" ,height:640,width:400,padding:90,fontStyle:"italic" }}>
      <h1 style={{fontsize:20,fontWeight:900}} >Sign in to</h1><br/>
      <h4 style={{fontsize:20,fontWeight:600}}>Lorem Ipsum is simply</h4><br/>
      <h5 style={{fontsize:20,fontWeight:500}}>If you don’t have an account register</h5>
      <h5 style={{fontsize:20,fontWeight:500}}>You can <Link to='/signup'>Register here !</Link></h5>
      <img id='img' style={{height:350,width:550,paddingLeft:200}}src={Image} alt=""/>
      </Grid>
     <Grid item lg={6} md={6} sm={12} xs={12} style={{backgroundColor:"white",height:640,width:200,padding:20}}>
     <h1>Sign in</h1>
     <form style={{padding:50}} onSubmit={changeSubmit}>
       <input style={{height:40,borderRadius:8,width:250}} type="text" name="email"  placeholder="Enter your Em-id" onChange={changeHandle}/><br/><br/>

      <input style={{height:40,borderRadius:8,width:250}} type="password" onChange={changeHandle}  name="password" placeholder='password'  /> <br/><br/> 
               
      <button style={{height:40,borderRadius:8,width:250}} className="btn btn-primary">Sign in</button>
      </form>
      <h6>or continue with</h6>
       <img src={Icon} alt=""/> 

     </Grid>
     </Grid>
</div>
  )
}

export default Signin