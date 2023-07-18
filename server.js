const express = require('express');
const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/dashboard.html');
  });


app.get('/display', (req, res) => {
    res.sendFile(__dirname + '/public/display.html');
  });
    
const port = 3000; // Choose the port number you prefer
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

module.exports = app;
  
  