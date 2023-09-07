

const httpsRedirctor =  (req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https') {
     return res.redirect(['https://', req.get('Host'), req.url].join(''));
   } else {
     next();
    }
  }
  module.exports = httpsRedirctor;
 