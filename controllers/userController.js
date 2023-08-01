const { userModelKey } = require("../keys/userkey");
const { User } = require("../utils/database");

module.exports = function () {
  var module = {};

  module.postLogin = async (req, res) => {
    const { email, password } = req.body;

    let userResponse = await User.findOne({
      where: {
        [userModelKey.email]: email,
        [userModelKey.password]: password,
      },
    });

    if (userResponse) {
      return res.send({ success: true, user: userResponse });
    }

    return res.send({ success: false });
  };
  return module;
};
