import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import './Collection.css';
import axios from "axios";
import ArtDetails from "./ArtDetails";
import message from "./message";
import Spinner from "./Spinner";

const Collection = ( {api, url} ) => {

    const [savedPics, setSavedPics] = useState([]);
    const [page, setPage] = useState("list");
    const [artIndex, setArtIndex] = useState(1);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const load = async () => {
        setLoading(true);
        try {
            const collection = await axios.get(`${api}user/collection`, {
                headers: {
                    "Authorization": localStorage.getItem("sessionId")
                }
            });
            setSavedPics(collection.data);
            setLoading(false);
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
                    {loading && <Spinner />}
                    {savedPics.length === 0 && <h2 style={{marginTop: "43vh", textAlign: "center"}} >There is nothing saved in your collection yet.</h2>}
                    {savedPics.map((p, i) => (<Card key={i} title={p.title} source={p.url} artist_display={p.artist} date_display={p.date} addClickEvent={() => {setPage("single"); setArtIndex(i)}} />)
                    )}
                </div>}
        </>
    )
}
export default Collection