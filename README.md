This project is for secp256r1 EC operations. The original version is forked from https://github.com/cryptocoinjs/secp256k1-node 
# secp256r1-node

## Installation
```
npm i secp256r1
```

## Usage

```js
const { randomBytes } = require('crypto')
const secp256r1 = require('secp256r1')
// or require('secp256r1/elliptic')
//   if you want to use pure js implementation in node

// generate message to sign
const msg = randomBytes(32)

// generate privKey
let privKey
do {
  privKey = randomBytes(32)
} while (!secp256r1.privateKeyVerify(privKey))

// get the public key in a compressed format
const pubKey = secp256r1.publicKeyCreate(privKey)

// sign the message
const sigObj = secp256r1.sign(msg, privKey)

// verify the signature
console.log(secp256r1.verify(msg, sigObj.signature, pubKey))
// => true
```

\* **.verify return false for high signatures**

## Second pure js implementation

Project has yet one secp256r1 implementation based on [elliptic](http://github.com/indutny/elliptic) and [bn.js](http://github.com/indutny/bn.js). This implementation is super experimental, use it at your own risk.

## LICENSE

This library is free and open-source software released under the MIT license.
