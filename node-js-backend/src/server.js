import express from 'express';

const app = expres();

app.get('/hello', (req, res) => res.send('Hello'));
