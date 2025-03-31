const express = require('express');
const app = express();
const port = 3000;

app.get('/items', (req, res) => {
    res.status(200).json({ message: 'GET route' });
});

app.post('/items', (req, res) => {
    res.status(200).json({ message: 'POST route' });

});

app.put('/items/:index', (req, res) => {
    res.status(200).json({ message: 'PUT route' });

});

app.delete('/items/:index', (req, res) => {
    res.status(200).json({ message: 'DELETE route' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
