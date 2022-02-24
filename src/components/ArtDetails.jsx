import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import {BiLeftArrowAlt, BiRightArrowAlt, BiArrowToLeft, BiArrowToRight, BiFullscreen, BiExitFullscreen} from "react-icons/bi";
import axios from "axios";
import "./ArtDetails.scss";
import message from "./message";

const ArtDetails = ({collection, index, setPage, reload, api, url}) => {
    const [arts, setArts] = useState(collection)
    const [artIndex, setArtIndex] = useState(index)
    const [art, setArt] = useState(arts[artIndex]);
    const [updateForm, setUpdateForm] = useState(false);
    const [input, setInput] = useState({description: art ? art.description : "", tags: art ? art.tags : [], rating: art ? art.rating : 0});
    const navigate = useNavigate();

    const [imgFullscreen, setImgFullscreen] = useState(false);

    const saveArt = async () => {
        try {
            const newCollection = await axios.put(`${api}user/collection`, {
                ...art, ...input
            },{
                headers: {
                    "Authorization": localStorage.getItem("sessionId")
                }
            });
            setArts(newCollection.data);
            reload(newCollection.data);
            setUpdateForm(false)
            message("Artpiece updated.")
    
        } catch (error) {
            message("Could not update!");
            localStorage.removeItem("sessionId");
            navigate(`${url}/login`);
        };

    };

    const deleteArt = async () => {
        try {
            const newCollection = await axios.delete(`${api}user/collection?url=${art.url}`, {
                headers: {
                    "Authorization": localStorage.getItem("sessionId")
                }
            });
            reload(newCollection.data);
            message("Artpiece deleted.")
            setPage("list")
        } catch (error) {
            message("Could not delete!");
            localStorage.removeItem("sessionId");
            navigate(`${url}/login`);
        };
    };

    useEffect(() => {
        setArt(arts[artIndex]);
    }, [arts, artIndex]);

    const fullscreenStyle = {
        backgroundImage: 'url(' + art.url + ')'
      };

    return (
    <div className="details-container">
        <div className="details">
            <div className="details-image-container">
                <BiFullscreen className="details-image-button" style={{color: "#dc5252", transform: "scale(2.5)", cursor: "pointer"}} onClick={() => {
						  setImgFullscreen(!imgFullscreen);
					  }}/>
                <img className="details-image" src={art.url} alt={art.title} />
            </div>
            {imgFullscreen && 
                <div className="fullscreen-img-container" style={fullscreenStyle}>
                    <BiExitFullscreen className="fullscreen-img-button" style={{color: "#dc5252", transform: "scale(2.5)", cursor: "pointer"}} onClick={() => {
						  setImgFullscreen(!imgFullscreen);
					  }}/>
                </div>
                }
            <h3>{art.artist}</h3>
            <h2>{art.title}</h2>
            {input.description && <p>{input.description}</p>}
            {input.tags && <ul className="details-tags-list">{input.tags.map((tag, index) => <li className="details-tag" key={index}>{tag}</li>)}</ul>}
            <div className="rating-stars">
                <AiFillStar 
                    onClick={() => {setInput({...input, rating: 1}); setArt({...art, rating: 1})}} 
                    style={{color: art.rating > 0 ? "#ffc107" : "#999"}} 
                />
                <AiFillStar 
                    onClick={() => {setInput({...input, rating: 2}); setArt({...art, rating: 2})}} 
                    style={{color: art.rating > 1 ? "#ffc107" : "#999"}} 
                />
                <AiFillStar 
                    onClick={() => {setInput({...input, rating: 3}); setArt({...art, rating: 3})}} 
                    style={{color: art.rating > 2 ? "#ffc107" : "#999"}} 
                />
                <AiFillStar 
                    onClick={() => {setInput({...input, rating: 4}); setArt({...art, rating: 4})}} 
                    style={{color: art.rating > 3 ? "#ffc107" : "#999"}} 
                />
                <AiFillStar 
                    onClick={() => {setInput({...input, rating: 5}); setArt({...art, rating: 5})}} 
                    style={{color: art.rating > 4 ? "#ffc107" : "#999"}} 
                />
            </div>
            {!updateForm && <section className="update-form"><button className="nav-page" onClick={() => setUpdateForm(true)}>Edit</button></section>}
            {updateForm && <section className="update-form">
                    <textarea 
                        placeholder="Description"
                        value={input.description} 
                        onChange={(event)=> setInput({...input, description: event.target.value})} 
                    ></textarea>
                    <input 
                        placeholder="Tags, divided by ', '"
                        type="text" value={input.tags.join(", ")}
                        onChange={(event)=> setInput({...input, tags: event.target.value.split(", ")})}
                    />
                    <div className="form-buttons">
                        <button className="nav-page" onClick={saveArt}>Save</button>
                        <button className="nav-page" onClick={deleteArt}>Delete</button>
                    </div>
                </section>}
            <div className="pagination-container">
                <button 
                    className="nav-page"
                    disabled={artIndex < 1}
                    onClick={() => {setArt(collection[0]); setArtIndex(0)}}
                >    
                    <BiArrowToLeft />
                </button>

                <button 
                    className="nav-page"
                    disabled={artIndex < 1}
                    onClick={() => {; setArt(collection[artIndex-1]); setArtIndex(artIndex - 1)}}
                >
                    <BiLeftArrowAlt />
                </button>
                <button 
                    className="nav-page"
                    onClick={() => setPage("list")} >Back
                </button>
                <button 
                    className="nav-page"
                    disabled={artIndex > collection.length - 2}
                    onClick={() => {setArt(collection[artIndex + 1]); setArtIndex(artIndex + 1)}}
                >
                    <BiRightArrowAlt />
                </button>
                <button 
                    className="nav-page"
                    onClick={() => {
                        setArt(collection[collection.length - 1]); 
                        setArtIndex(collection.length - 1)
                    }}
                >    
                    <BiArrowToRight />
                </button>
            </div>
        </div>
    </div>
    )
}

export default ArtDetails