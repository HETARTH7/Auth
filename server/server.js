const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const connectDB = require("./config/dbConfig");

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

connectDB();

app.use("/login", require("./routes/auth"));
app.use("/register", require("./routes/register"));
app.use("/refresh", require("./routes/refresh"));
app.use("/logout", require("./routes/logout"));

app.use("/user", require("./routes/user"));
app.use("/admin", require("./routes/user"));

const port = 5000;

app.listen(port, () => {
  console.log(`listenting at port ${port}`);
});
