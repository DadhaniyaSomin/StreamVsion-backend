const router = require('express').Router();

router.get('/api/send-otp', (req, res) => {
  //logic

  res.send('hello from OTP Route');
});

module.exports = router;
