import { Grid } from '@mui/material'
import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import Header from './Header'
import Icon from '../Image/Icon.png'
import Image from '../Image/Image.png'
import './style.css'
import axios from 'axios'

function Signup() {


  const[data,setData]=useState({
    email:"",
    name:"",
    number:"",
    password:""
  })

  

   const handleChange=(e)=>{
    setData({
        ...data,[e.target.name]:e.target.value
     })
    }
        
    const submitHandle=(e)=>{
        e.preventDefault()
        const {email, password, name} = data;
        console.log(data)
       const newData = {"emp_id" : email,"name" : name ,"password" : password}
       axios.post("https://empappregular.herokuapp.com/signUp",newData)
      .then((res)=>alert("data posted"))  
      }

return (
    <div>

     <Header/> 
     <Grid container>
     <Grid item lg={6} sm={12} xs={12} style={{backgroundColor:"white",height:700,width:300,padding:90,fontStyle:"italic"}}>
      <h1 style={{fontsize:20,fontWeight:900}} >Sign up to</h1><br/>
      <h4 style={{fontsize:20,fontWeight:600}}>Lorem Ipsum is simply</h4><br/>
      <h5 style={{fontsize:20,fontWeight:500}}>If you already have an account </h5>
      <h5 style={{fontsize:20,fontWeight:500}}>You can   <Link to='/signin'>Login here !</Link></h5>
      <img id='img' style={{height:350,width:550,paddingLeft:200}}src={Image} alt=""/>
      </Grid>



     <Grid item lg={6} sm={12} xs={12} style={{backgroundColor:"white",height:700,width:300,padding:20}}>
     <h1>Sign up</h1>

     <form style={{padding:50}} onSubmit={submitHandle}>

       <input style={{height:40,borderRadius:8,width:250}} type="text" name="email"  placeholder="Enter your Em-id" onChange={handleChange}/><br/><br/>
       <input style={{height:40,borderRadius:8,width:250}} type="text" name="name"  placeholder="Enter your UserName" onChange={handleChange}/><br/><br/>
       <input style={{height:40,borderRadius:8,width:250}} type="number" name="number"  placeholder="Enter your Number" onChange={handleChange}/><br/><br/>
       <input style={{height:40,borderRadius:8,width:250}} type="password" name="password"  placeholder=" Password" onChange={handleChange}/> <br/><br/>
      <input  style={{height:40,borderRadius:8,width:250}} type="password" name="confirm password"  placeholder=" Confirm Password" onChange={handleChange}/> <br/><br/>
      <button style={{height:40,borderRadius:8,width:250}} className="btn btn-primary">Register Here</button>
      </form>

      <h6>or continue with</h6>
       <img src={Icon} alt=""/> 
     </Grid>
     </Grid>

    </div>
  )
}

export default Signup









































