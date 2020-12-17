const secp256r1 = require('../elliptic')
// Ura:
// We have public key converted from pem or anything like this
// 
let keyConvert = secp256r1.publicKeyConvert(Buffer.from('04f2736b046885df28f1d7e5115e4489dc85cca129baf16d5dda4e8f5dacc122e7d860febbce074f18f8b3b2ddef2d4ac201c8a60e48fc89df413f52f4761de0bf', 'hex'), true);
console.log("Key converted with package account: ");
console.log(keyConvert.xyPoint.x);
console.log(keyConvert.xyPoint.y);

// Its good to convert to ECDSA object from crypto.
// You can do with ecdsa-secp256r1
const ecdh = new ECDSA({x: Buffer.from(keyConvert.xyPoint.x, 'hex'), y: Buffer.from(keyConvert.xyPoint.y, 'hex')});
console.log(ecdh);
console.log("Verify from data with cbored: ")

// You can do verify anything you want
console.log(ecdh.verify((data), Buffer.from(signature, 'hex'), 'hex'));