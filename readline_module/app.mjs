import readline from 'readline';
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';

// 
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question('how are you?', (answer) => {
    console.log(`this is answer ${answer}`);
})
r1.close();

// readfile line by line 
const rl = readline.createInterface({
    input: fs.createReadStream(path.join(path.dirname(fileURLToPath(import.meta.url)), 'example1.txt'), 'utf-8'),
    crlfDelay: Infinity
});

rl.on('line', (line) => {
    console.log(`Line from file: ${line}`);
});

rl.on('close', () => {
    console.log('Finished reading file');
});

// rl /line /close
const rl2 = readline.createInterface({
    input: fs.createReadStream(path.join(path.dirname(fileURLToPath(import.meta.url)), 'example1.txt'), 'utf-8')
})

rl2.on('line', (line) => {
    console.log(line);
});
rl2.on('close', () => {
    console.log('close');
})