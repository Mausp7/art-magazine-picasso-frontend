import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import axios from "axios";
import "./ArtDetails.scss";

const ArtDetails = ({collection, index, setPage}) => {
    const [artIndex, setArtIndex] = useState(index)
    const [art, setArt] = useState(collection[artIndex]);
    const [input, setInput] = useState({description: art.description, tags: art.tags, rating: art.rating});

    const deleteArt = async () => {
        await axios.delete(`http://localhost:5000/api/user/1?url=${art.url}`);
    };

    return (
    <div className="details-container">
        <div className="details">
            <h2>{art.artist}</h2>
            <h2>{art.title}</h2>
            {art.description && <p>{input.description}</p>}
            {input.tags && <ul>{art.tags.map((tag, index) => <li key={index}>{tag}</li>)}</ul>}
            <div>
                <AiFillStar style={{color: art.rating > 0 ? "#ffc107" : "#999"}} />
                <AiFillStar style={{color: art.rating > 1 ? "#ffc107" : "#999"}} />
                <AiFillStar style={{color: art.rating > 2 ? "#ffc107" : "#999"}} />
                <AiFillStar style={{color: art.rating > 3 ? "#ffc107" : "#999"}} />
                <AiFillStar style={{color: art.rating > 4 ? "#ffc107" : "#999"}} />
            </div>
            <img src={art.url} alt={art.title} />
            <textarea 
                value={input.description} 
                onChange={(event)=> setInput({...input, description: event.target.value})} 
            ></textarea>
            <input 
                type="text" value={input.tags.join(", ")}
                onChange={(event)=> setInput({...input, tags: event.target.value.split(", ")})}
            />
            <button className="nav-page" onClick={deleteArt}>Delete</button>
            <div>
{/*                 <button 
                    className="nav-page"
                    disabled={artIndex < 1}
                    onClick={() => {; setArt(collection[artIndex-1]); setArtIndex(artIndex - 1)}} >{"<-"}
                </button>
 */}
                <button 
                    className="nav-page"
                    onClick={() => setPage("list")} >List view
                </button>
{/*                 <button 
                    className="nav-page"
                    disabled={artIndex > collection.length - 2}
                    onClick={() => {setArt(collection[artIndex + 1]); setArtIndex(artIndex + 1)}} >{"->"}
                </button>
 */}            </div>
        </div>
    </div>
    )
}

export default ArtDetails