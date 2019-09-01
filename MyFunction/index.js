const Cryptr = require('cryptr');
const cryptr = new Cryptr('safekey');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.type && req.query.data) {
        if(req.query.type == 'encrypt'){
            const encryptedString = cryptr.encrypt(req.query.data);
            console.log(encryptedString); // 5590fd6409be2494de0226f5d7
            context.res = {
                // status: 200, /* Defaults to 200 */
                body: "Encrypted String " +encryptedString
            };
        }else{
            const decryptedString = cryptr.decrypt(req.query.data);
            console.log(decryptedString);
            context.res = {
                // status: 200, /* Defaults to 200 */
                body: "Decrypted String " + decryptedString
            };
        }
        
    }
    else {
        context.res = {
            status: 400,
            body: "No type of data to encrypt or decrypt"
        };
    }
};