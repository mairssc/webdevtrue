const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/db-image"

mongoose.connect(url, { useNewUrlParser: true })

const db = mongoose.connection

db.once('open', () => {
    console.log("Database connected")
})

db.on('error', (error) => {
    console.log(error)
})

module.exports = db;