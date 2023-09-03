const express = require('express')
const app = express()
const Sequelize = require('sequelize');
const db = new Sequelize('postgres://postgresUser:postgresPW@localhost:5455/postgres');
const bodyParser = require('body-parser')
const cors = require('cors')

const port = 3100

app.use(bodyParser.json())
app.use(cors())

db.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});
let WeightSchema = db.define('weights', {
    sets: {
        type: Sequelize.INTEGER
    },
    reps: {
        type: Sequelize.INTEGER
    },
    weight: {
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.DATE
    },
}, {timestamps: false});
db.sync().then(() => {
    console.log('weights table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

app.get('/weight', async (req, res, next) => {
    const allWeights = await WeightSchema.findAll()
    res.status(200).send(allWeights)
})

app.get('/weight/:id', async (req, res) => {
    const weight = await WeightSchema.findOne({
        where: {id: req.params.id }
    })
    res.status(200).send(weight)
})

app.post('/weight', (req, res) => {
    let data = req.body

    WeightSchema.create({
        name: data.name,
        sets: data.sets,
        reps: data.reps,
        weight: data.weight,
        date: new Date().toISOString()
    });

    res.status(200).send("Successfully added record")
})

app.delete('/weight', async (req, res) => {
    await WeightSchema.destroy({where: {}}).then(function () {});
    res.status(200).send("All entries deleted")
})

app.listen(port, () => {})