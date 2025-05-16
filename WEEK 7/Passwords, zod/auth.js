const jwt = require("jsonwebtoken");
const JWT_SECRET = "asfqub!23823";


function auth(req, res, next) {
  const token = req.headers.token;

  const decodedData = jwt.verify(token, JWT_SECRET);
  
  if (decodedData) {
    req.userId = decodedData.id;
    next();
  } else {
    res.status(403).json({
      messages: "Incorrect credentials"
    })
  }
}

module.exports = {
  auth,
  JWT_SECRET
}