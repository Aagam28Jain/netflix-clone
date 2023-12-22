const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

mongoose
  .connect(
    "mongodb+srv://aagam:aagam123@cluster0.oyibz4o.mongodb.net/netflix?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB connnected succes");
    app.listen(8800, () => {
      console.log("Running in background");
    });
  })
  .catch((err) => console.log(err));

