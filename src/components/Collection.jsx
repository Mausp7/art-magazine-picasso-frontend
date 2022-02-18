import { useState, useEffect } from "react";
import Card from "./Card";
import './Collection.css';
import http from "axios";
import ArtDetails from "./ArtDetails";

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

    const [savedPics, setSavedPics] = useState([]);
    const [page, setPage] = useState("list");
    const [artIndex, setArtIndex] = useState(1);

    const load = async () => {
        try {
            const res = await http.get('http://localhost:5000/api/user/1');
            setSavedPics(res.data.collection);
        } catch (error) {
            alert("Collection not found!")
        }
    };

    useEffect(() => {
        load();
    }, []);

    return (
        <>
            {page === "single" && <ArtDetails collection={savedPics} index={artIndex} setPage={setPage} setIndex={setArtIndex}/>}
            {page === "list" && 
                <div className="Collection">
                    {savedPics.map((p, i) => (<Card key={i} title={p.title} source={p.url} addClickEvent={() => {setPage("single"); setArtIndex(i)}} />)
                    )}
                </div>}
        </>
    )
}
export default Collection