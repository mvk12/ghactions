var asciify = require('asciify-image');

var options = {
  fit:    'box',
  width:  200,
  height: 100
}

asciify('https://octodex.github.com/images/octofez.png', options)
  .then(function (asciified) {
    // Print asciified image to console
    console.log(asciified);
  })
  .catch(function (err) {
    // Print error to console
    console.error(err);
  });