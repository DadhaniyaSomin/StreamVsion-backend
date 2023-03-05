const AuthController = require("./controllers/auth-controller");
const router = require("express").Router();

router.post("/api/send-otp", AuthController.sendOtp);

module.exports = router;
