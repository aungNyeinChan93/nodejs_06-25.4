import { log } from 'console';
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const data = `Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
The point of using Lorem Ipsum is that 
it has a more-or-less normal distribution of letters, 
as opposed to using 'Content here, content here', 
making it look like readable English. Many desktop publishing packages and web page editors 
now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
Various versions have evolved over the years, sometimes by accident, 
sometimes on purpose (injected humour and the like).`;

// writeFile
fs.writeFile(path.join(path.dirname(fileURLToPath(import.meta.url)), 'testing_01.txt'), JSON.stringify(data), (err) => {
    if (!err) {
        console.log('File Write Success!');
        return true;
    }
    console.log(err);
})

// readFile
const readFile = await fs.promises.readFile(path.join(path.dirname(fileURLToPath(import.meta.url)), 'testing_01.txt'), { encoding: 'utf-8' });
console.log(readFile);

// appenedFile
fs.appendFile(path.join(path.dirname(fileURLToPath(import.meta.url)), 'testing_01.txt'), 'this is appended data ...', { encoding: 'utf-8' }, (err) => {
    if (!err) {
        console.log('Appended data!');
    }
});

// unlink
// fs.unlink(path.join(path.dirname(fileURLToPath(import.meta.url)), 'delete.txt'), (err) => {
//     if (err) {
//         console.log(err);
//         return false
//     }
//     console.log('Delete Success');
// })


// Create directory 
fs.mkdir(path.join(path.dirname(fileURLToPath(import.meta.url)), 'sample1_dir'), { recursive: true }, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Directory created successfully!');
});

fs.mkdir(path.join(import.meta.dirname, '../testing_dir1'), { recursive: true }, (err) => {
    if (!err) {
        console.log("MKDIR success");
    }
})

// 
fs.mkdirSync('newDir_1', { recursive: true });
console.log('new dir successfully created!');


// read directory
fs.readdir('newDir_1', { encoding: 'ascii' }, (err, files) => {
    if (err) return console.error(err.message);
    console.log(files);
    console.log('Read Dir ...');
})

// remove directory
// fs.rmdir('newDir_1', (err) => {
//     if (err) return console.error(err);
//     console.log('rmdir ...');
// })

const files = await fs.promises.readdir(path.join(path.dirname(fileURLToPath(import.meta.url)), '../node_modules'), { encoding: 'utf-8' }, (err, files) => {
    return new Promise((resolve, reject) => {
        if (err) return reject(err);
        resolve(files);
    })
})
console.log(files);

const files_2 = await fs.promises.readdir(
    path.join(path.dirname(fileURLToPath(import.meta.url)), '../controllers'),
    { encoding: 'utf-8' }
);
console.log(files_2);

const testPromise1 = new Promise(reslove => {
    setTimeout(() => {
        reslove('test promise 1');
    }, 3000);
})

testPromise1.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

console.log(await testPromise1);

const my_files = fs.readdirSync('./');
console.log(my_files);

/**
readdirSync()	Yes	Array	Simple scripts
readdir()	No	Callback	Legacy async
promises.readdir()	No	Promise	Async/await
 */


// existsSync , 
fs.existsSync(path.join(path.dirname(fileURLToPath(import.meta.url)), '../node_modules'))
    ? console.log('exists')
    : console.log('not exists');

// access
// fs.access('../node_modules', (err) => {
//     if (err) {
//         console.log(err);
//         return false;
//     }
//     console.log('access success');
// })


//
// fs.rmdir('./testing_dir1', (err) => {
//     if (err) {
//         console.log(`Error: ${err.code}`);
//         console.log(`Error: ${err}`);
//         return false;
//     }
//     console.log('rmdir success');
// })

// fs.rmdirSync('./testing_dir1');

// rm
// fs.rm('./node_modules', { recursive: true }, (err) => {
//     err ? console.log(err) : console.log('rm success');
// });

// fs.rmSync('./node_modules', { recursive: true });

// rename
// fs.rename('./fs_module/rename.txt', './fs_module/rename_1.txt', (err) => {
//     if (err) {
//         console.log(err);
//         return false;
//     }
//     console.log('rename success');
// });

// fs.renameSync(path.join(path.dirname(fileURLToPath(import.meta.url)), 'test-2.txt'), path.join(path.dirname(fileURLToPath(import.meta.url)), 'test-3.txt'))

// stat
// fs.stat(path.join(path.dirname(fileURLToPath(import.meta.url)), 'stat.txt'), (err, stats) => {
//     if (err) {
//         console.log(err);
//         return false;
//     }
//     console.log(stats);
//     console.log(`is file: ${stats.isFile()}`);
//     console.log(`is directory: ${stats.isDirectory()}`);
//     console.log(`is block device: ${stats.isBlockDevice()}`);
//     console.log(`is character device: ${stats.isCharacterDevice()}`);
//     console.log(`is FIFO: ${stats.isFIFO()}`);
//     console.log(`is socket: ${stats.isSocket()}`);
//     stats.isFile() ? console.log('is file') : console.log('not file');
// });

// const stat = fs.statSync(path.join(path.dirname(fileURLToPath(import.meta.url))));
// console.log(stat.isDirectory() ? 'is directory' : 'not directory');


const size = await fs.promises.stat(path.join(path.dirname(fileURLToPath(import.meta.url)), 'rename_1.txt'));
console.log(`this is file size: ${size.size}`);
if (size.isFile) console.log('is file');
console.log(size);




