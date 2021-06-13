const bcrypt = require('bcrypt');

const encrypt = async (password, salt) =>{
    let hashed = await new Promise((resolve, reject)=>{
        bcrypt.hash(password, salt, (err, hash)=>{
            if(err) reject(err);
            resolve(hash);
        })
    })
    return hashed;
}

const compare = async (password, hash) =>{
    let result = await new Promise((resolve, reject) =>{
        bcrypt.compare(password, hash, (err, result)=>{
            if(err) reject(err);
            resolve(result);
        })
    })
    return result;
}

module.exports = {encrypt, compare};
