const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('site'));

app.get('/', (req, res) => {
  res.sendFile('site/index.html');
});

app.listen(5000, () => console.log('Website Online\nlocalhost:5000'));