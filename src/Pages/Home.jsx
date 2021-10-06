import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'


function Home() {
    const [users, setUsers] = useState(null);

    useEffect(()=>{
        fetch('https://reqres.in/api/users')
        .then(response=>response.json())
        .then(data=>setUsers(data.data));
    }, [setUsers])

     console.log(users)

    if(users == null){
        return<div>loading...</div>
    }

    return(
        <div className="container">
            <h1>All Users</h1>

            {
                users == null? <div>fetching users...</div>:
                users.map((val, key)=>{
                    return(
                    <Link to={`/${val.id}`} key={key}>
                    <div className="card">
                        <h3>{val.first_name} {val.last_name}</h3>
                        <p>{val.email}</p>
                    </div>
                </Link>
                    )
                })
            }

           
        </div>
    );
}

export default Home;