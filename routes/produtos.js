const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o GET dentro de produtos'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando POST dentro de produtos'
    });
});

router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto

    if (id == 'especial'){
        res.status(200).send({
            mensagem: 'Usando o GET de um produto exclusivo',
            id: id
        });
    } else {
        res.status(200).send({
            mensagem: 'Voce passou um ID'
        });
    }
});

module.exports = router;