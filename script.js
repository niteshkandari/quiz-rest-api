const question = require ('./question.json');
const express = require('express');
const app = express();
app.use(express.json());

const data = question;

app.get('/' , (req,res) => {
  res.send('welcome to the rest api');
});

app.get('/api/q',(req,res) => {
  res.send(data);
})



const port = process.env.port || 3000;
app.listen(port ,() => console.log(`server is running at localhost:${port}`));
