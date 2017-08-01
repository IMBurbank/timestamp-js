// node app entry point

// init project
const express = require('express');

const app = express(),
      dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };


const createTimestamp = function createTimestamp(dateString) {
  let date = isNaN(+dateString) ? new Date(dateString) : new Date(+dateString);
  
  return {
    unix: date.getTime() || null,
    natural: date.toString() === 'Invalid Date'? null : date.toLocaleDateString('en-US', dateOptions)
  };
}


// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/:date", (req, res) => {
  res.json(createTimestamp(req.params.date));
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
