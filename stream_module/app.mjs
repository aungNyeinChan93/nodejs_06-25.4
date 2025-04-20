import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url';
import { Stream } from '../utils/core.mjs'

// createReadStream
const readStream = fs.createReadStream(path.join(import.meta.dirname, 'stream_test.txt'), 'utf-8');
readStream.on('data', (chunk) => {
    console.log('Chunk data : ' + chunk);
})
readStream.on('end', () => {
    console.log('Done ');
})
readStream.on('error', (err) => {
    console.log(err);
})

// createWriteStream
const writeStream = fs.createWriteStream(path.join(path.dirname(fileURLToPath(import.meta.url)), 'stream_test3.txt'), 'utf-8');
writeStream.write('this is createWriteStream...')
writeStream.end(() => {
    console.log('WriteStream is end');
})

// async await
const res = await Stream.read(path.dirname(fileURLToPath(import.meta.url)), 'stream_test2.txt');
console.log(res);

// .then , .catch
const res2 = Stream.read(path.dirname(fileURLToPath(import.meta.url)), 'stream_test2.txt');
res2.then(result => console.log(result)).catch(err => console.log(err)).finally(() => console.log('Done'));

const data = `Contrary to popular belief, 
    Lorem Ipsum is not simply random text. 
    It has roots in a piece of classical Latin literature from 45 BC, 
    making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
    looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
    and going through the cites of the word in classical literature, discovered the undoubtable source. 
    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
    (The Extremes of Good and Evil) by Cicero,
    written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
    The first line of Lorem Ipsum, 
    "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32`

const writeResult = await Stream.write(path.dirname(fileURLToPath(import.meta.url)), '/stream_test3.txt', data)
writeResult ? console.log('success') : console.log('fail');


//
// writeStream.pipe(readStream)



