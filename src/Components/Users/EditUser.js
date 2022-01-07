import axios from 'axios';
import React, { useState,useEffect } from 'react';
import {useHistory,useParams} from 'react-router-dom';

const EditUser = () => {
    let history=useHistory();
    let {id} =useParams();
    // alert(id);
    const[userData,setUserData]=useState({
        name:"",
        username:"",
        email:"",
        website:"",
        phone:""
        
    });

    const{name,email,username,website,phone}=userData;
    const onInputChange=(e)=>{
        // const newData={name,username,email,website,phone};
        setUserData({...userData,[e.target.name] : [e.target.value]});
        // setUserData((prevState)=>[...prevState,newData]);
    }

    useEffect(()=>{
      loadUser();
    },[])
      

    const handleSubmit= async (e)=>{
       e.preventDefault();
       await axios.put(`http://localhost:3003/users/${id}`,userData);
       history.push("/");
    }

    const loadUser= async ()=>{
        const result= await axios.get(`http://localhost:3003/users/${id}`);
        setUserData(result.data);
    }

   
    return (
        <div className='container'>
            <div className='w-75 mx-auto shadow p-5'>
            <h2 className='text-center mb-4'>Edit User</h2>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <input className='form-control form-control-lg my-2' type='text' name='name' value={name} onChange={(e)=>onInputChange(e)} placeholder='enter your name'/>
            <input className='form-control form-control-lg my-2' type='text' name='username' value={username} onChange={(e)=>onInputChange(e)} placeholder='enter your username'/>
            <input className='form-control form-control-lg my-2' type='email'name='email' value={email} onChange={(e)=>onInputChange(e)}placeholder='enter your email'/>
            <input className='form-control form-control-lg my-2' type='text' name='website' value={website} onChange={(e)=>onInputChange(e)} placeholder='enter your website'/>
            <input className='form-control form-control-lg my-2' type='text'name='phone' value={phone} onChange={(e)=>onInputChange(e)} placeholder='enter your phone'/>
            <button className='form-control btn btn-warning'>Update</button>
            </form>
            </div>
        </div>
    )
}

export default EditUser;
