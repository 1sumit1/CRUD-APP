import axios from 'axios';
import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

const AddUser = () => {
    let history=useHistory();
    const[userData,setUserData]=useState({
        name:"",
        username:"",
        email:"",
        website:"",
        phone:""
        
    })

    const{name,username,email,website,phone}=userData;
    const onInputChange=(e)=>{
        // const newData={name,username,email,website,phone};
        setUserData({...userData,[e.target.name] : [e.target.value]});
        // setUserData((prevState)=>[...prevState,newData]);
    }

    const handleSubmit= async (e)=>{
       e.preventDefault();
       await axios.post('http://localhost:3003/users',userData);
       history.push("/");
    }
    return (
        <div className='container'>
            <div className='w-75 mx-auto shadow p-5'>
            <h2 className='text-center mb-4'>Add New User</h2>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <input className='form-control form-control-lg my-2' type='text' name='name' value={name} onChange={(e)=>onInputChange(e)} placeholder='enter your name'/>
            <input className='form-control form-control-lg my-2' type='text' name='username' value={username} onChange={(e)=>onInputChange(e)} placeholder='enter your username'/>
            <input className='form-control form-control-lg my-2' type='email'name='email' value={email} onChange={(e)=>onInputChange(e)}placeholder='enter your email'/>
            <input className='form-control form-control-lg my-2' type='text' name='website' value={website} onChange={(e)=>onInputChange(e)} placeholder='enter your website'/>
            <input className='form-control form-control-lg my-2' type='text'name='phone' value={phone} onChange={(e)=>onInputChange(e)} placeholder='enter your phone'/>
            
            <button className='form-control btn btn-primary'>Submit</button>
            </form>
            </div>
        </div>
    )
}

export default AddUser;
