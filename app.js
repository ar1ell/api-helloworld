const express = require('express');
const app = express();

const rotaProdutos = require('./routes/produtos');

app.use('/teste', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Ok, Deu certo!'
    });
});


app.use('/produtos', rotaProdutos);

module.exports = app;