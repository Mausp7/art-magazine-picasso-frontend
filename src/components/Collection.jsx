import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import './Collection.css';
import axios from "axios";
import ArtDetails from "./ArtDetails";
import message from "./message";

const Collection = ( {api, url} ) => {

    const [savedPics, setSavedPics] = useState([]);
    const [page, setPage] = useState("list");
    const [artIndex, setArtIndex] = useState(1);
    const navigate = useNavigate();

    const load = async () => {

        try {
            const collection = await axios.get(`${api}user/collection`, {
                headers: {
                    "Authorization": localStorage.getItem("sessionId")
                }
            });
            setSavedPics(collection.data);
        } catch (error) {
            message("Collection could not load!");
            localStorage.removeItem("sessionId");
            navigate(`${url}/login`);
        };
    };

    useEffect(() => {
        load();
    }, []);

    return (
        <>
            {page === "single" && <ArtDetails url={url} api={api} collection={savedPics} index={artIndex} setPage={setPage} setIndex={setArtIndex} reload={setSavedPics} />}
            {page === "list" && 
                <div className="Collection">
                    {savedPics.length === 0 && <h2 style={{marginTop: "43vh", textAlign: "center"}} >There are nothing saved in your collection yet.</h2>}
                    {savedPics.map((p, i) => (<Card key={i} title={p.title} source={p.url} artist_display={p.artist} addClickEvent={() => {setPage("single"); setArtIndex(i)}} />)
                    )}
                </div>}
        </>
    )
}
export default Collection