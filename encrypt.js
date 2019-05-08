const AES = require("crypto-js/aes");
const SHA256 = require("crypto-js/sha256");
const CryptoJS = require('crypto-js');
const { KEY_PATH } = require('./env')

const fs = require('fs')
// // console.log(KEY_PATH)
const key = fs.readFileSync(KEY_PATH, 'utf8')

let encrypyt = CryptoJS.AES.encrypt("Password", `${key}`);
let decrypt  = CryptoJS.AES.decrypt(encrypyt.toString(), `${key}`);
let plaintext = decrypt.toString(CryptoJS.enc.Utf8);
 
// console.log(plaintext);

// console.log(`${key}`)


console.log(encrypyt);
console.log(JSON.stringify(decrypt) );
console.log(plaintext);
