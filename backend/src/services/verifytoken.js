require('dotenv/config');

function verifytoken(req, res, next){
  var token = req.headers.authorization;
  if (!token) return res.status(401).send({ auth: false, message: 'Token missing' });
  var [, token] = token.split(' ');
  if (token === process.env.SECRET){
    next();
  }else{
    return res.status(401).send({ auth: false, message: 'Wrong token' });
  }
}

module.exports = verifytoken