import React,{useEffect, useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {get, post,del} from './Getreducer';


function Get() {
    const[state,setState]=useState({})
    let {name,email}=state;

     const dispatch=useDispatch();
     const Ace = useSelector(state=>state.user);

     console.log('ggg',Ace)

     useEffect(()=>{
        dispatch(get())
     },[])

     const handleChange = ({ target: { name, value } }) => {
        setState(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSave = () =>{
        let data ={
            name : '',
            email : ''
        }

        dispatch(post(data))
    }
    
   const onDelete=(id)=>{
        dispatch(del(id))
    }

    return(
        <div>

            <input type='text' name='name' value={name} onChange={handleChange}></input>
            <input type='text' name='email' value={email} onChange={handleChange}></input>
            <button onClick={handleSave}> submit</button>

            {Ace.map((each,id)=> {
                return(
                    <div key={id}>
                        <li>{each.username}</li>
                        <button onClick={()=>onDelete(id)}>delete</button>
                        
                    </div>

                )})
                }
                </div>
    )
}
export default Get
