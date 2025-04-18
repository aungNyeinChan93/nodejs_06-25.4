const crypto = require('crypto')

let password = "this is my password"

// const hash = crypto.createHash("sha256").update('test').digest('binary');
const hash = crypto.createHash("sha256").update(password).digest('base64');
console.log(hash);


