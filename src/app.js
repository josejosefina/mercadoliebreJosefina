const express = require('express');
const path = require('path');

//Instanceo express
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home.html'));
});

const port = 3030;

app.listen(port, ()=>{
    console.log(`Servidor iniciado en http://localhost:${port}`);
});

app.post('/login', (req, res) => {
    res.redirect('/');
});