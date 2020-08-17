import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';

const app = express();

app.use(bodyParser.json());

app.get('/api/GameInfo', aync(req, res) => {
  try {
    const gameName = req;

    const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true })
    const db = client.db('gameInfo');

    const gameInfo = await db.collection('godOfWar').findOne({ name: gameName })
    res.status(200).json(gameInfo);

    client.close();
  } catch(error) {
    res.status(500).json({ message: 'Error connecting to db', error });
  }


})

app.get('/hello', (req, res) => res.send('Hello'));

app.listen(8000, () => console.log('Listening on port 8000'));