import { useState } from "react";
import Card from "./Card";
import './Collection.css';

const dummyData = [
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
]

const Collection = () => {

    const [savedPics, setSavedPics] = useState(dummyData);

    return (
        <div className="Collection">
            {savedPics.map((p) => {
                return <Card title={p.title}/>
            })}
            {/* <Card /> */}
        </div>
    )
}

export default Collection