const path = require('path');
const fs = require('fs');

// join
const fullPath = path.join(__dirname, '../public/src/', 'test.txt');
console.log(`this is fullPath : ${fullPath}`);


fs.writeFile(fullPath, "this is path moduel testing", { encoding: 'utf-8' }, (err) => {
    if (!err) {
        console.log('File Saved!');
    }
})

fs.readFile(fullPath, { encoding: 'ascii' }, (err, data) => {
    err
        ? console.log(err.message)
        : console.log(data);
})

// basename
const fileName = path.basename(fullPath);
console.log(`this is fileName : ${fileName}`);

// dirname
const dirName = path.dirname(fullPath);
console.log(`this is dirname : ${dirName}`);

// extname
console.log(`this is extension name ${path.extname(fullPath)}`);

// parse
console.log(path.parse(fullPath));
// {
//     root: 'D:\\',
//     dir: 'D:\\VS_COde\\node_25\\node_js_01.25.4\\public\\src',
//     base: 'test.txt',
//     ext: '.txt',
//     name: 'test'
//   }
console.log(path.parse(fullPath).name);
console.log(path.parse(fullPath).dir);
console.log(path.parse(fullPath).root);

// format
console.log(`this is format : ${path.format(path.parse(fullPath))}`);

//  matchesGlob
console.log(path.matchesGlob(fullPath, '/public/src/test.txt'));
console.log(path.matchesGlob("/public/src/test", '/public/src/*'));

// isAbsolute
console.log(`this is real file path : ${path.isAbsolute(fullPath)}`);

// normalize
console.log(path.normalize('/test/api/user//:id')); // \test\api\user\:id
