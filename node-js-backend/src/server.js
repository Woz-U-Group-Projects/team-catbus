import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.get('/api/GameInfo', (req, res) => {
  const gameName = req;
})

app.get('/hello', (req, res) => res.send('Hello'));

app.listen(8000, () => console.log('Listening on port 8000'));