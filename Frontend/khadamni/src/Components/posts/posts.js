import * as React from 'react';
import { viewPost } from "../../redux/Slices/post.slice";
import { useEffect, useState } from "react";
const Axios = require('axios');

export default function Post() {

   
    const [data, setData] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3500/api/post/all')
            .then(res => {
                console.log("Getting from ::::", res.data)
                setData(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const arr = data.map((data, index) => {
        return (
            <>
            <img width={10} height={"400"} src="https://img-0.journaldunet.com/aA_oQO2y9XDwPXM4qfgFI7_OnUw=/600x/smart/9547dd346990418fa8a7c313a6e687b0/ccmcms-jdn/25881197.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{data.field}</h5>
                <p className="card-text">Description</p>
            </div>
            
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{data.field}</li>
                <li className="list-group-item">{data.location}</li>
                <li className="list-group-item">{data.schedule}</li>
                <button>Check</button>
                <button>Delete</button>
                
            </ul>
            <></></>

        )
    })


    return (
        <container>
        <div className="card" /*style="width: 18rem;"*/>
            
                {arr}
            <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>
        </div>
        </container>
    );
}