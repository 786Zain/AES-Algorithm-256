// run `node index.js` in the terminal

console.log(`Encryption Algorithm`);
var CryptoJS = require('crypto-js');

// Generate random 16 bytes to use as IV
var IV = CryptoJS.lib.WordArray.random(16);
//var IV ="1011121314151617";

var keyString = '7E892875A52C59A3B588306B13C31FBD';
// finds the SHA-256 hash for the keyString
var Key = CryptoJS.SHA256(keyString);

function encrypt(data) {
  var val = CryptoJS.enc.Utf8.parse(JSON.stringify(data));
  var encrypted = CryptoJS.AES.encrypt(val, Key, { iv: IV }).toString();
  var b64 = CryptoJS.enc.Base64.parse(encrypted).toString(CryptoJS.enc.Hex);
  return b64;
}

var data = {
  userName: 'qfadmin@crmnext.com',
  password: 'acid_qa',
};
console.log(encrypt(data));
console.log(IV.toString());
// Set local variables to postman
// pm.variables.set("encrypted", encrypt(data));
// pm.variables.set("IV", IV.toString());
