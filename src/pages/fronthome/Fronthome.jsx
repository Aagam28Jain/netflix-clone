import "./fronthome.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";
import { Key } from "@mui/icons-material";
const Fronthome = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTdjN2ZlMTkyNmJjM2QxMDhlYzE3OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5OTQzODcyMywiZXhwIjoxNjk5ODcwNzIzfQ.J_Eu6w63HO-_MaC-58W7bQV1OFc1GUjTxbH3qRw4YMQ",
            },
          }
        );
        console.log(res);
        setLists(res.data);
        
      } catch (err) {

        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists && lists.map((list,i) => (
        <List list={list} key={i}/>
      ))}
    </div>
  );
};

export default Fronthome;
