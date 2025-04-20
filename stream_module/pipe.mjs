import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const readStream = fs.createReadStream(path.join(path.dirname(fileURLToPath(import.meta.url)), 'test_1.txt'), { encoding: 'ascii' });
readStream.on('data', (chunk) => {
    console.log(chunk);
})
readStream.on('end', () => {
    console.log('Read End!');
})
readStream.on('error', (err) => {
    console.log(err.message);
})

const writeStream = fs.createWriteStream(path.join(path.dirname(fileURLToPath(import.meta.url)), 'test_2.txt'), { encoding: 'ascii' })
// writeStream.write('This is test_2 write Stream!');
// writeStream.end(() => {
//     console.log(`end Write Stream!`);
// })


// pipe
const secStream = fs.createWriteStream(path.join(path.dirname(fileURLToPath(import.meta.url)), 'test_3.txt'), { encoding: 'utf-8' });
readStream.pipe(writeStream)
readStream.pipe(secStream);
readStream.on('finish', () => {
    console.log('Copy file finish!');
})


