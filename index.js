var fs = require('fs');
var colors = require('colors');

fs.readdir('./', 'utf-8', function(err, data) {
    console.log('Zawartość katalogu:'.red);
    console.log(data);
    fs.writeFile('./log.txt', '\n ' + data, function(err) {
        if (err) throw err;
        console.log('Zapisano!'.grey);
        fs.readFile('./log.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.red)
            console.log(data);
        });
    });
});