import express from "express"
import { overviews } from "./data/overviews-data.js"

const data = overviews

const app=express()
const port=3000

app.use(express.static('public'))

app.listen(port, ()=>{
    console.log(`app running on port ${port}`)
})

app.get("/", (req, res) => {
    res.render('index.ejs', {data:data})
})

app.get("/about", (req, res) => {
    res.render('about.ejs')
})