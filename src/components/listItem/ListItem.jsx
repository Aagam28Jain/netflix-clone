import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import "./listItem.scss";
import { useState ,useEffect} from "react";
 import axios from "axios";
const ListItem = ({ index,item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [Movie, setMovie] = useState({});
  //const trailer="https://player.vimeo.com/progressive_redirect/playback/796225085/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=83fcbfabcf85fcbf86f7bf194fada0495ab3b5e326896b504800f5848a62bfa8"
 
  useEffect(()=>{
   const getMovie=async ()=>{
    try{
     const res=await axios.get("/movies/find/"+item  , {
      headers: {
        token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTdjN2ZlMTkyNmJjM2QxMDhlYzE3OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5ODk1ODY5MSwiZXhwIjoxNjk5MzkwNjkxfQ.aSNg5Ww3jcgsPkS5xvFm_Wr1yUAKp6HQHLlLQpZd28o",
      },
    }
  );
 
  setMovie(res.data);
    }catch(err){console.log("its  mine fault its all mine fault")
      console.log(err)
    }
   }
   getMovie()
  },[item]);
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={Movie.img} alt="movie " />
      {isHovered && (
        <>
          <video
            src={Movie.trailer}
            autoPlay={true}
            loop
          />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span> {Movie.duration} </span>
              <span className="limit"> +{Movie.limit} </span>
              <span>{Movie.year}</span>
            </div>
            <div className="desc">
              {item.desc}
            </div>
            <div className="genre">{Movie.genre}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
