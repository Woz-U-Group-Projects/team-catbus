import express from 'express';

const app = expres();

app.get('/hello', (req, res) => res.send('Hello'));

app.listen(8000, () => console.log('Listening on port 8000'));