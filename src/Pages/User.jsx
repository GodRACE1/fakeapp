import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';

function User(){
    const {id} = useParams();
    const [user, setUser] = useState(null);
    useEffect(()=>{
        fetch(`https://reqres.in/api/users/${id}`)
        .then(response=>response.json())
        .then(data=>setUser(data.data))
    }, [setUser])
    console.log(user)
    return(
        <div className="container">
            <h1>User Details</h1>
            {
                user == null? <div>fetching user data...</div>:
                <div className="card">
                    <img src={user.avatar} width="200" />
                    <p>First Name: {user.first_name}</p>
                    <p>Last Name: {user.last_name}</p>
                    <p>Email: {user.email}</p>
                </div >
            }
        </div>
    )
}

export default User;