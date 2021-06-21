
const express = require('express');
const app = express();

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist/Front'));


app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/Front/'})
);

// Start the app by listening on the default
// Heroku port
// app.listen(process.env.PORT || 8080);

app.listen(process.env.port || 3000, () => { console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env); });