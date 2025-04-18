import { createHash, createSign } from 'crypto'
import fs from 'fs';
import jwt from 'jsonwebtoken';


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

const defaultExport = 'this is default export'

export { Base, Response, JWT }

export default defaultExport;