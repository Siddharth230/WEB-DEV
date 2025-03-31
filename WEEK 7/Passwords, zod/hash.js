const argon2 = require("argon2");

async function hashedPassword() {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  const hash = await argon2.hash(password, {type: argon2.argon2id});
}

async function verifyPassword() {
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email: email,
  })

  const passwordMatch = await argon2.verify(user.password, password,);
  return passwordMatch;
}

module.exports = {
  hashedPassword,
  verifyPassword
}