const crypto = require("crypto");

class hashService {
  async hashOTP(data) {
    return crypto
      .createHmac("sha256", process.env.HASH_SECRET)
      .update(data)
      .digest("hex");
  }
}

module.exports = new hashService();
