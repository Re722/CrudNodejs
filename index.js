const express = require('express');

const server = express();

server.use(express.json());

const papelaria = ['caneta', 'lapis', 'borracha'];

server.get('/papelaria/:index', (req, res) => {
    const { index } = req.params;

    return res.json(papelaria[index]);

});

server.get('/papelaria', (req, res) => {
    return res.json(papelaria);
});

server.post('/papelaria', (req, res) => {
    const { name } = req.body;
    papelaria.push(name);

    return res.json(papelaria);
});

server.put('/papelaria/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    papelaria[index] = name;

    return res.json(papelaria);
});

server.delete('/papelaria/:index', (req, res) => {
    const { index } = req.params;
    papelaria.splice(index, 1);

    return res.json({ message: "o item foi deletado da base" });
});


server.listen(3000);