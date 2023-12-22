import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useRef, useState } from "react";
import "./list.scss";
import ListItem from "../listItem/ListItem";

function List({ list }) {
  // in slide number se hm control kr rhe ki left button agar page open ho to click hone pe left na jaaye
  //hm ek row mai 11 movies rkhenege har ek baar mai screen pr 6 movies aayenge
  // 5 baar clcick krunga to lat window mai 6 movies aayegi uske baad right click band
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();
  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <div className="list">
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <ArrowBackIos
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          {list.content.map((item, i) => (
            <ListItem index={i} item={item} key={i}/>
          ))}
        </div>
        <ArrowForwardIos
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}

export default List;
