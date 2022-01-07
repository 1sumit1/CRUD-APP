import React,{useState,useEffect} from 'react';
import {Link,useParams} from 'react-router-dom';
import axios from 'axios';

const User = () => {
    
    const[userData,setUserData]=useState({
        name:"",
        username:"",
        email:"",
        website:"",
        phone:""
    });
    let {id}=useParams();
    
    useEffect(()=>{
        loadUser();
    },[])

    const loadUser= async () =>{
        const result=await axios.get(`http://localhost:3003/users/${id}`);
        setUserData(result.data);
    }
    return (
        <div className='container'>
            <Link className='btn btn-primary my-3' to='/'>Back to Home</Link>
            <h2 className='display-4'>User Id : {id}</h2>
            <hr/>
            <ul className='list-group w-50'>
                <li className='list-group-item'>Name : {userData.name}</li>
                <li className='list-group-item'>UserName : {userData.username}</li>
                <li className='list-group-item'>Email : {userData.email}</li>
                <li className='list-group-item'>Website : {userData.website}</li>
                <li className='list-group-item'>Phone : {userData.phone}</li>

            </ul>
            
        </div>
    )
}

export default User;
