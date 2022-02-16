import { useState } from "react";
import Card from "./Card";
import './Search.css';

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

const Search = () => {

    const [paintings, setPaintings] = useState(dummyData);

    return (
        <div className="Search">
            {paintings.map((p) => {
                return <Card title={p.title}/>
            })}
            {/* <Card /> */}
        </div>
    )
}

export default Search