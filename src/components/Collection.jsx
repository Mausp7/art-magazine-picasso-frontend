import { useState } from "react";
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
        setSavedPics(res.data);
    };
    load();
    console.log(savedPics);

    return (
        <div className="Collection">
            {savedPics.map((p) => {
                return <Card title={p.title}/>
            })}
        </div>
    )
}

export default Collection