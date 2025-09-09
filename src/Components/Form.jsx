
import React, { useState } from 'react'
import { postMethod } from '../Api/CurdAxiosApi';

const Form = ({data, setData}) => {
    const [addData, setAdd] = useState({
        title: '',
        body: ''
    })

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAdd((prev) => {
            return {
                ...prev,
                [name]: value, // it is dynamic, it means title: value, and body:value
            }
        })
    }

    const addPostData = async() => {
       const res = await postMethod(addData);
       if(res.status === 201){
        setData([...data, res.data])
        setAdd({title:'', body:''})
       }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addPostData();
    }
  
    return (
    <form onSubmit={handleFormSubmit}>
        <div>
            <label htmlFor="title"></label>
            <input type="text" autoComplete='off' id='title' 
            name='title' placeholder='Add Title' value={addData.title} onChange={handleInputChange}/>    
        </div>
        <div>
            <label htmlFor="body"></label>
            <input type="text" autoComplete='off' id='body' 
            name='body' placeholder='Add Post' value={addData.body} onChange={handleInputChange} />    
        </div>
        <button type='submit'>Add</button>
    </form>
  )
}

export default Form