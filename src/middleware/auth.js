const  authCheck = (req, res, next) => {
    const token ="hjh";
    if(token =="a") {
        next()
    }
    else { 
        res.status(401).send("invalid token");
    }
}

module.exports = {
    authCheck
}