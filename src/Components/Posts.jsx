import React, { useState } from 'react'
import { useEffect } from 'react';
import { getMethod } from '../Api/CurdAxiosApi';

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

    return (
        <section className='section-post'>
            <ol>
                {
                    dataItem.map((curEle) => {
                        // destructuring
                        const {id, body, title} = curEle
                        return (
                            <li key={id}>
                                <h3>{title}</h3>
                                <p>{body}</p>
                                <button>Edit</button>
                                <button>Delete</button>
                            </li>
                        )
                    })
                }
            </ol>
        </section>
    )
}

export default Posts