const crypto = require('crypto');
const secretKey = crypto.randomBytes(64).toString('hex');  // Generates a 64-byte key in hexadecimal
console.log(secretKey);