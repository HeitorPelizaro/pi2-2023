const express = require('express');
const app = express();
const port = 3000;

// Importe os dados de cada série
const bbt = require('./data/bd_bbt.js');
const sn = require('./data/bd_sn.js');
const st = require('./data/bd_st.js');
// Adicione mais séries conforme necessário

app.set('views', './views');
app.set('view engine', 'pug');

// Middleware para adicionar dados das séries a todas as respostas
app.use((req, res, next) => {
    res.locals.bbt = bbt;
    res.locals.sn = sn;
    res.locals.st = st;
    next();
});

// Rota para a página inicial
app.get('/', (req, res) => {
    // Combine todos os dados das séries em um único objeto
    const allShows = {
        bbt: bbt,
        sn: sn,
        st: st
    };

    // Renderize a visualização 'home' com todos os dados das séries
    res.render('home', allShows);
});

// Rota para a série Big Bang Theory
app.get('/bbt', (req, res) => {
    res.render('index', bbt);
});

// Rota para a série Supernatural
app.get('/sn', (req, res) => {
    res.render('index', sn);
});

// Rota para a série Stranger Things
app.get('/st', (req, res) => {
    res.render('index', st);
});

// Adicione mais rotas conforme necessário

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
