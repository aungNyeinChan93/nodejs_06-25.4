import defaultVal, { Base, Math, Response, fileRead, fileWrite, JWT } from '../utils/core.mjs'
import path from 'path'

Base.test();

console.log(Base.hash('aung'));

console.log(Math.add(2, 3));

console.log(defaultVal);

Response.success()

fileRead(path.join(import.meta.dirname, '../fs_module/test-2.txt'))

fileWrite(path.join(import.meta.dirname, '../fs_module/test-2.txt'), 'hello world!')

const token = JWT.sign('aungnyeinchan123', '123qwe');
console.log(token); //eyJhbGciOiJIUzI1NiJ9.YXVuZ255ZWluY2hhbjEyMw.GUihFp91GCI7uDjX3I-tZ9JI8vJZad95zjpXOxGOHK8

const decodeVal = JWT.verify(token, '123qwe');
console.log(`decode : ${decodeVal}`);



