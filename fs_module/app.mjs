import fs from "fs";
import path from "path";
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

