import React, {useEffect, useState} from 'react';
import './style.scss';
import {getUsers} from "../../services/axios";
import UserDetails from "../user-details";

function WorkingWithGet() {
    const [users, setUsers] = useState<any>([])
    const [count,setCount] = useState<number>(6)
    useEffect(()=>{
        getUsers(count).then((value:any) => setUsers(value.data))
    },[count])
    return (
        <div className="with-get">
            <div className="with-get__title">
                Working with GET request
            </div>
            <div className='with-get__wrap-card'>
                {users.users?.map((value:any) => <UserDetails data={value}/>)}
            </div>
            <button className='with-get__button' onClick={()=> setCount(count+6)}>
                Show more
            </button>
        </div>
    );
}

export default WorkingWithGet;
