const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('site'));

app.get('/', (req, res) => {
  res.sendFile('site/index.html');
});
var cyan = "\x1b[36m%s\x1b[0m"
app.listen(5000, () => console.log(cyan, 'Website Online\nlocalhost:5000'));