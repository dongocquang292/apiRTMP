require('dotenv').config()
const validate = (req, res, next) => {
    let key = req.body.name;
    if(key === process.env.KEY){
        console.log(`Connected server with key ${key}`);
        return next()
    } else{
        console.log("Sai key");
    }
}

module.exports = validate