import React, {useState} from 'react';

export default function Authentication(props){
    const[credentials,setCredentials] = useState({
        username:"",
        password:""
    })

    function onChange(e){
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
    function handleClick(){
        props.getCredentails(credentials,'hi')
    }
    return(
        <>
        <p>{props.name}</p>
            <label>Username</label>
            <input type='text' placeholder='username' name='username' className='input' onChange={onChange}/><br></br>
            <label>Password</label>
            <input type='password' name='password' class='input' onChange={onChange}/>
            <button onClick={handleClick}>Submit</button>
        </>
    )
}