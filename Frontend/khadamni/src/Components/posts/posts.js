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
           
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{data.field}</li>
                <li className="list-group-item">{data.location}</li>
                <li className="list-group-item">{data.schedule}</li>
            </ul>

        )
    })


    return (
        <div className="card" /*style="width: 18rem;"*/>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
                {arr}
            <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>
        </div>
        
    );
}