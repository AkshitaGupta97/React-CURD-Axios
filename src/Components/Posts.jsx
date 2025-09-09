import React, { useState } from 'react'
import { useEffect } from 'react';
import { deleteMethod, getMethod } from '../Api/CurdAxiosApi';
import Form from './Form';

function Posts() {
    const [dataItem, setData] = useState([])

    const getPostData = async () => {
        const res = await getMethod();
        // console.log(res)
        setData(res.data);
    }

    useEffect(() => {
        getPostData();
    }, [])

    const handleDelete = async (id) => {
        try {
            const res = await deleteMethod(id)
            if (res.status === 200) { // means item is deleted from api. now to delete it from ui
                const newUpdates = dataItem.filter((curele) => {
                    return curele.id !== id;
                })
                setData(newUpdates)
            }
            else {
                console.log("Failed to delete", res.status);
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <>
           <section className='section-form'>
                <Form data={dataItem} setData={setData}/>
           </section>

            <section className='section-post'>
                <ol>
                    {
                        dataItem.map((curEle) => {
                            // destructuring
                            const { id, body, title } = curEle
                            return (
                                <li key={id}>
                                    <h3>{title}</h3>
                                    <p>{body}</p>
                                    <button>Edit</button>
                                    <button className='delBtn' onClick={() => handleDelete(id)}>Delete</button>
                                </li>
                            )
                        })
                    }
                </ol>
            </section>
        </>
    )
}

export default Posts