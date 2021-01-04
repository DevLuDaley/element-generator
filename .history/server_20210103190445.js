const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

//! the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
// app.use(express.static(path.join(__dirname, 'dist')));
// app.set('port', process.env.PORT || 8080);
// var server = app.listen(app.get('port'), function() {
//   console.log('listening on port ', server.address().port);
// });

//! send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.listen(port);
