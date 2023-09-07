const CorsHandler  = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Orgin, X-Requested-With , Content-Type , Accept , Authorization");
    res.header("Access-Control-Allow-Methods", "POST  , GET , PUT , DELETE , PATCH");
  
    if (req.method === "OPTION") {
      res.header("Access-Control-Allow-Methods", "POST  , GET , PUT , DELETE , PATCH");
      return res.status(200).json({});
    }
    next();
  }
  module.exports = CorsHandler;
