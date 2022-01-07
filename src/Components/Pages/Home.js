import React, { useEffect, useState } from 'react';
import axios  from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const[users,setUsers]=useState([]);

    useEffect(()=>{
       loadUser();
    },[])

    const loadUser= async ()=>{
        const result= await axios.get('http://localhost:3003/users');
        console.log(result);
        setUsers(result.data);
    }

    const deleteUser = async (id)=>{
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUser();
    }
    return (
        <div className='container mt-3'>
         <table className="table table-striped">
            <thead className='table-dark'>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope='col'>UserName</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((item,index)=>(
                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            
            
                            <td>
                                <Link className='btn btn-primary btn-sm mx-1'to={`/user/${item.id}`}>View</Link>
                                <Link className='btn btn-outline-success btn-sm mx-1'to={`/editUser/${item.id}`}>Edit</Link>
                                <button className='btn btn-danger btn-sm mx-1' onClick={()=>deleteUser(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
                
            </tbody> 
            </table>   
        </div>
    )
}

export default Home;
