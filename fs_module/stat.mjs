import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

fs.existsSync('./public/src/images/bagan_2.jpg') ? console.log('File exists') : console.log('File does not exist');

fs.stat(path.join(path.dirname(fileURLToPath(import.meta.url)), '../public/src/images/bagan_2.jpg'), (err, stats) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(stats);
    console.log(`is file: ${stats.isFile()}`);
    console.log(`is directory: ${stats.isDirectory()}`);
    console.log(`is block device: ${stats.isBlockDevice()}`);
    console.log(`is character device: ${stats.isCharacterDevice()}`);
    console.log(`is FIFO: ${stats.isFIFO()}`);
    console.log(`is socket: ${stats.isSocket()}`);
    console.log(`is symbolic link: ${stats.isSymbolicLink()}`);
});

// fs.readFile(path.join(path.dirname(fileURLToPath(import.meta.url)), '../public/src/images/bagan_2.jpg'), { encoding: 'hex' }, (err, data) => {
//     if (err) {
//         console.log(err);
//         return false;
//     }
//     console.log(data);
// });


fs.exists(path.join(path.dirname(fileURLToPath(import.meta.url)), '../public/src/images/bagan_3.webp'), (exists) => {
    if (exists) {
        fs.unlink(path.join(path.dirname(fileURLToPath(import.meta.url)), '../public/src/images/bagan_3.webp'), (err) => {
            if (err) {
                console.log(err);
                return false;
            }
            console.log('File deleted successfully');
        });
    } else {
        console.log('File does not exist');
    }
});

const folders = fs.readdirSync('./', { recursive: true });
console.log(folders);
// console.log(`Folders: ${folders}`);

// watchFile and watch
// fs.watchFile(path.join(path.dirname(fileURLToPath(import.meta.url)), 'test-3.txt'), (curr, prev) => {
//     console.log(`File changed: ${curr.mtime}`);
//     console.log(`Previous modification time: ${prev.mtime}`);
//     console.log(`Current modification time: ${curr.mtime}`);
// })

// fs.watch(path.join(path.dirname(fileURLToPath(import.meta.url)), 'test-3.txt'), (eventType, filename) => {
//     if (eventType === 'change') {
//         console.log(`File changed: ${filename}`);
//         console.log(eventType);
//     }
// });



