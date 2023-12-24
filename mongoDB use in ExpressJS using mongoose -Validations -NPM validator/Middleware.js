module.exports = reqFilter=(req,res,next)=>{
    if (!req.query.age ) {
        res.send('Please Enter the age')
    }
    else if (req.query.age <= 18-1) {
        res.send('you are not eligble')
    }
    else {
        
        next()
    }
}