const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/about.html'));
});

app.get('/user', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/user.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/login.html'));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public/404.html'));
});

app.listen(3000, () => {
  console.log('Aplicativo rodando na porta 3000');
});
