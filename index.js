const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

const app = express()
const PORT = 3333

dotenv.config()

app.use(express.json())

MONGO_URI = process.env.MONGO_URI

mongoose.connect(MONGO_URI)
.then(() => {
    console.log(`Connected!`)
    app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`)
    })
    
})
.catch((err) => {
    console.log(`Unable to connect to the database, ${err}`)
    process.exit(1)
})

// Create a schema
const studentSchema = new mongoose.Schema({
    name : String,
    subjects : [String]
})

const Student = mongoose.model('Student', studentSchema)

app.get('/get', (req, res) => {
    Student.find()
    .then((students) => {
        res.status(200).json(students)
    })
    .catch((err) => {
        console.log(err)
        res.status(500).json({message : "Unable to fetch students"})
    })
})

app.post('/create', (req, res) => {
    if (req) {
        if (req.body != undefined) {
            Student.create({
                name : req.body.name,
                subjects : req.body.subjects
            })
            .then((student) => {
                console.log(`new entry: ${student}`)
                res.status(200).json(student)
            })
            .catch((err) => {
                console.log(`unable to add student ${err}`)
                res.status(500).json({message : "Unable to add new staudent. Try again."})
            })
        }
    }
})

app.put('/update/:id', (req, res) => {
    //
})

app.delete('/delete/:id', (req, res) => {
    //
})