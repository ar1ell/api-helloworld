const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o GET dentro de produtos'
    });
});

router.post('/', (req, res, next) => {
    
    const produto = {
        nome: req.body.nome,
        preco: req.body.preco
    };

    res.status(201).send({
        mensagem: 'Insere um produto',
        produtoCriado: produto 
    });
});

// Retorna os dados de um produto

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


// Altera um produto
router.patch('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o PATCH dentro de produtos'
    });
});

// Deleta um produto
router.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o DELETE dentro de produtos'
    });
});


module.exports = router;