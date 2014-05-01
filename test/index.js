var path = require('path'),
    loc = require('../index.js');

var quadrant = new loc.Quadrant({
    filename: path.join(__dirname, './N47W123.hgt')
});

quadrant.read(47.234, -122.2340, function(err, height) {
    console.log(err);
    console.log(height);
});

quadrant.load(function(err, matrix) {
    console.log(matrix.length);
    console.log(matrix[matrix.length - 1].length)
});

var a = new loc.GraduatedArray(),
    b = new loc.GraduatedArray(),
    c = new loc.GraduatedMatrix();

a.push(0); a.push(1);
b.push(0); b.push(1);
c.push(a); c.push(b);

console.log(c);

console.log(c.get(1,.5));

console.log(quadrant);

quadrant.each(function(err, lat, long, el) {
    console.log(lat, long, el);
});
