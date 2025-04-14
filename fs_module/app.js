const fs = require('fs')

fs.readFile('test1.txt', { encoding: 'utf-8' }, (err, data) => {
    if (!err) {
        console.log(data);
        return true;
    }
    console.log(err);
})

fs.writeFile('test1.txt', 'This is write from app.js', (err) => {
    console.log(err);
})