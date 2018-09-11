const express = require('express');
const app = express();

// create route handler
app.get('/', (req, res) => {
	res.send({ sam: 'is the best' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);