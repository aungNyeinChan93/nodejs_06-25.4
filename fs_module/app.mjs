import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";


fs.readFile(path.join(path.dirname(fileURLToPath(import.meta.url)), '/test1.txt'), (err, data) => {
    if (!err) {
        console.log(data.toString());
    }
});

fs.writeFile('test1.txt', 'add text', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Save file!');
})

console.log(fileURLToPath(import.meta.url));

console.log(import.meta);

const myPath = path.join(import.meta.dirname, 'test-2.txt')

fs.writeFile(myPath, 'test-2', (err) => {
    if (!err) console.log('save!');
    if (err) console.log(err);
})

fs.readFile(path.join(myPath), { encoding: 'ascii' }, (err, data) => {
    if (!err) console.log(data);
})

fs.readFile(path.join(myPath), { encoding: 'base64url' }, (err, data) => {
    if (!err) console.log(data);
})


