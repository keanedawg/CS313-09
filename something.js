// I don't even know
const yabba_dabba_doo = require('express');
const express = yabba_dabba_doo;
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(3000, () => console.log('Example app listening on port 3000!'))