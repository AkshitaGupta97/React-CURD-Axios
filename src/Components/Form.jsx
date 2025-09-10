
import React, { useEffect, useState } from 'react'
import { postMethod, putMethod } from '../Api/CurdAxiosApi';

const Form = ({ data, setData, updateData, setUpdate }) => {
    const [addData, setAdd] = useState({
        title: '',
        body: ''
    })

    useEffect(() => {
        updateData && setAdd({
            title: updateData.title || '',
            body: updateData.body || '',
        })
    }, [updateData])

    const handleInputChange = (e) => {
        const name = e.target.name;  // name = key
        const value = e.target.value;   // value = value
        setAdd((prev) => {
            return {
                ...prev,
                [name]: value, // it is dynamic, it means title: value, and body:value, as form of key-value pair.
            }
        })
    }

    const addPostData = async () => {
        const res = await postMethod(addData);
        if (res.status === 201) {
            setData([...data, res.data])
            setAdd({ title: '', body: '' })
        }
    }

    const updatePostData = async () => {
        try {
            const res = await putMethod(updateData.id, addData) //yaha hum jis data ko update karna hai uska id pass karte hai and addData me updated data hai.
            console.log(res);
            if (res.status === 200) {
                setData((prev) => {  // here api data is fetched in prev
                    return prev.map((curEle) => {  // updateData.id == res.id
                        return curEle.id === res.data.id ? res.data : curEle
                    })
                })
                setAdd({ title: '', body: '' })
                setUpdate({})
            }
        }
        catch (err) {
            console.log(err);
        }
    }


    const handleFormSubmit = (e) => {
        e.preventDefault();
        const action = e.nativeEvent.submitter.value;   // it means we get value of either add or edit
        addPostData();
        if (action === 'Add') {
            addPostData();
        }
        else if (action === 'Edit') {
            updatePostData();
        }
    }

    let isEmpty = Object.keys(updateData).length === 0;  // check if legth of update data is empty

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="title"></label>
                <input type="text" autoComplete='off' id='title'
                    name='title' placeholder='Add Title' value={addData.title} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="body"></label>
                <input type="text" autoComplete='off' id='body'
                    name='body' placeholder='Add Post' value={addData.body} onChange={handleInputChange} />
            </div>
            <button type='submit' value={isEmpty ? 'Add' : 'Edit'}>
                {isEmpty ? "Add" : "Edit"}
            </button>

        </form>
    )
}

export default Form