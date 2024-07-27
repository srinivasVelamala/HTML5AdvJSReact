import axios, { AxiosError } from 'axios';
import React, { FormEvent, useEffect, useRef, useState } from 'react'
interface User {
    id:number;
    name:string;
    username:string;
    email:string;
  }
export const GetUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
  
    const [error, setError] = useState('')
      // useEffect(() => {
      //   axios.get<User[]>('https://jsonplaceholder.typicode.com/xusers')
      //   .then(res => setUsers(res.data))
      //   .catch(err => setError(err.message));
      // }, []);
      useEffect(() => {
        const fetchUsers = async () => {
        // get -> promise -> res / err
          try{
            //const res = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
            const res = await axios.get<User[]>('http://localhost:3001/getUsers')
            console.log(res.data);
            setUsers(res.data);
          }
          catch(err){
            setError((err as AxiosError).message);
          }
        }
        fetchUsers();
        }, []);
      return (
        <>
        {error && <p className='text-danger'>{error}</p> }
          <ul>
          {users.map(user => <li key={user.id}>{user.id} - {user.name} -- {user.username}</li>)}
          </ul>
          <div className="container">
                    {users.map((item) => (
                        <div className="item">
                            <ol key={item.id}>
                                <div>
                                    <strong>
                                        {"User_Name: "}
                                    </strong>
                                    {item.username},
                                </div>
                                <div>
                                    Full_Name: {item.name},
                                </div>
                                <div>
                                    User_Email: {item.email}
                                </div>
                            </ol>
                        </div>
                    ))}
                </div>
        </>
      );
}
