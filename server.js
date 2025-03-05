const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const projectRoutes = require("./routes/projectRoutes")
const contactRoutes = require("./routes/contactRoutes")


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);
app.use("/images", express.static("public/images"));




const PORT = process.env.PORT || 5001;



mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Portfolio API is running...");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));