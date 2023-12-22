import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.scss";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
        </div>
       
        <video
          className="video"
          autoPlay
          progress
          controls
          src="https://video.adsninja.ca/valnetinc/MakeUseOf/64d534fde218c-projectRssVideoFile.mp4"
        />
   
    </div>
  );
};

export default Watch;
