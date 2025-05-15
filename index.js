const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Dockerised image deployed on Render');
});

app.get('/hello', (req, res) => {
    res.send('Hello from Dockerised image deployed on Render');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});
