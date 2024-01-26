module.exports = (req,res,next) =>{
    if (req.cookies.recuerdame && req.cookies.cookieUser){
            req.session.usuario = req.cookies.cookieUser;
        }
        next();
    
    
}