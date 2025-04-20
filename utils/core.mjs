import { createHash, createSign } from 'crypto'
import fs from 'fs';
import jwt from 'jsonwebtoken';
import path from 'path';


const Base = {
    test: () => console.log(`This is Test module`),
    hash: (payload) => createHash('sha256').update(payload).digest('hex'),
}

export const Math = {
    add: (a, b) => a + b,
}

const Response = {
    success: () => console.log('success res'),
}

export function fileRead(path) {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
        if (!err) {
            console.log(data);
            return;
        }
        console.log(err);
    })
}

export function fileWrite(path, payload) {
    fs.writeFileSync(path, payload, (err) => {
        if (!err) console.log(`File Save!`);
    })
}

const JWT = {
    sign: (payload, secrect_key) => jwt.sign(payload, secrect_key, { algorithm: 'HS256' }),
    verify: (token, secrect_key) => jwt.verify(token, secrect_key, (err, data) => {
        if (!err) {
            return data;
        }
        console.log(err);
    })
}

const Stream = {
    read: (dir, filename) => {
        return new Promise((resolve, reject) => {
            let result = "";
            let readStream = fs.createReadStream(path.join(dir, filename), { encoding: 'utf-8' });
            readStream.on('data', (chunk) => {
                result += chunk;
            });
            readStream.on('end', () => {
                console.log('Read Success =>', JSON.stringify(result));
                resolve(result);
            });
            readStream.on('error', (err) => {
                console.log(err);
                reject(err);
            });
        });
    },
    write(dir, fileName, payload) {
        return new Promise((resolve, reject) => {
            let writeStream = fs.createWriteStream(path.join(dir, fileName), { encoding: 'utf-8' });
            writeStream.write(JSON.stringify(payload));
            writeStream.end(() => {
                console.log('Write Success!');
                resolve(true)
            })
            writeStream.on('error', (err) => {
                reject(err.message)
            })
        })
    }
}

const defaultExport = 'this is default export'

export { Base, Response, JWT, Stream }

export default defaultExport;