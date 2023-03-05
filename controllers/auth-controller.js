const otpService = require("../services/otp-service");
const hashService = require("../services/hash-service");
const sendSuccessResponse = require("../services/success-response");

class AuthController {
  async sendOtp(req, res, next) {
    try {
      // console.log(req);
      const { phone } = req.body;
      if (!phone) {
        throw new Error("Phone is require.");
      }
      //get OTP
      const otp = await otpService.generateOtp();
      //hash OTP
      const ttl = 1000 * 60 * 2;
      const expires = Date.now() * ttl;
      const data = `${phone}.${otp}.${expires}`;
      const hashedOTP = await hashService.hashOTP(data);

      //send OTP
      try {
        // await otpService.sendBySms(phone, otp);
        res.status(200).json({
          statu: "200",
          message: `OTP Send Sussfully. Expired at ${expires}.`,
          result: {
            hash: `${hashedOTP}.${expires}`,
            phone: `${phone}`,
          },
        });
      } catch (err) {
        return next(err);
      }
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = new AuthController();
