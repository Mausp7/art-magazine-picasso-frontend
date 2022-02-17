import { useState, useEffect } from "react";
import Card from "./Card";
import './Collection.css';
import http from "axios";

/* const dummyData = [
    {
        title: 'Painting One'
    },
    {
        title: 'Painting Two'
    },
    {
        title: 'Painting Three'
    },
    {
        title: 'Painting Four'
    },
    {
        title: 'Painting Five'
    },
] */

const Collection = () => {

    const [savedPics, setSavedPics] = useState("");

    const load = async () => {
        const res = await http.get('http://localhost:5000/api/user/1');
        setSavedPics(res.data.collection);
    };
    console.log(savedPics);

    useEffect(() => {
        load();
      }, [])

    return (
        <div className="Collection">
            {savedPics.map(p => (<Card title={p.title} source={p.url}/>))}
        </div>
    )
}

export default Collection