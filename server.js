const express = require('express');

const app = express();

app.use(express.static(__dirname + '/dist'));


app.set('view engine', 'html');

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
});

app.listen(4000, (err) =>{
 if (err) {
   console.log("Error starting the server: ", err)
 } else {
   console.log("Server is runnig on port: 4000");
 }
});