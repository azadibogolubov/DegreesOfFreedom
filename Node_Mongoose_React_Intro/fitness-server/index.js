const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const port = 3100

app.use(bodyParser.json())
app.use(cors())

mongoose.connect(
    'mongodb://localhost:27017',
    {useNewUrlParser: true, useUnifiedTopology: true}
)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

let WeightSchema = new mongoose.Schema({
    _id: { type: mongoose.ObjectId, required: true, index: { unique: true } },
    sets: { type: Number, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
    name: { type: String, required: true },
    date: { type: Date, required: true }
})

const Weight = mongoose.model('WeightSchema', WeightSchema);

app.get('/weight', async (req, res, next) => {
    const allWeights = await Weight.find({})
    res.status(200).send(allWeights)
})

app.get('/weight/:id', async (req, res) => {
    const weight = await Weight.findById(req.params.id)
    res.status(200).send(weight)
})

app.post('/weight', (req, res) => {
    let data = req.body

    const w = new Weight({
        id: new mongoose.Types.ObjectId(),
        name: data.name,
        sets: data.sets,
        reps: data.reps,
        weight: data.weight,
        date: new Date().toISOString()
    });

    w.save().then(() => console.log("Successfully added record"), (err) => console.log(err))
    res.status(200).send("Successfully added record")
})

app.delete('/weight', async (req, res) => {
    await Weight.deleteMany()
    res.status(200).send("All entries deleted")
})

app.listen(port, () => {})