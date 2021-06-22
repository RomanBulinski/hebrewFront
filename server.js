
const express = require('express');
const app = express();

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + "/dist/Front"));


app.get('/*', (req, res) =>
  res.sendFile("index.html", {root: "/src/"})
);

// Start the app by listening on the defaultd
// Heroku port
  app.listen(process.env.PORT || 3000);
// app.listen("fronthebrew.herokuapp.com"  || 3000);
