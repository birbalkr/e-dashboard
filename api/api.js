const express = require('express');
const dbConnect = require('./mongodb');
const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
    res.send({ data })
});

app.post('/', async (req, rep) => {
    let data = await dbConnect();
    let result = await data.insertOne(req.body)
    rep.send(result)
}),
app.put('/', async (req, rep) => {
    let data = await dbConnect();
    let result = await data.insertOne(req.body)
    rep.send(result)
}),
app.delete('/:id', async (req, res) => {
    // let data = await dbConnect();
    // let result = await data.insertOne(req.body)
    // rep.send(result)
    console.log(req.params.id);
    res.send("done")
}),

app.listen(5000)