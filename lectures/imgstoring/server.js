const express = require('express');
const multer = require("multer");
const db = require("./mongoose.js");
const Entry = require("./schema.js");

//BEGIN node setup
const port = process.env.PORT || 3000;
const app = express();


//body formats http into json
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
//END node setup

//BEGIN multer setup
const uploads = multer({ dest: "uploads/"});


//END multer setup

app.post("/images", uploads.single('example'), (req, res) => {
    // const username = req.body.username;
    // const filename = req.body.filename;
    // const entry = Entry({
    //     username: username,
    //     file : filename
    // })
    // entry.save();
    res.send(`User ${req.body.username} saved successfully`);
})

// app.get("/images", )


app.get("/", (req, res) => {
    res.send("imagesDB API")
})

app.listen(port, () => {
    console.log('listening on port ' + String(port))
})

