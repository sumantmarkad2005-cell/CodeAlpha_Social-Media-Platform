const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/socialapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/users", require("./routes/users"));
app.use("/posts", require("./routes/posts"));

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
