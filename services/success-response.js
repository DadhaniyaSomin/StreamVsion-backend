class successResponse {
  async sendSuccessResponse(resCode, resMessage, resData) {
    res
      .status(resCode)
      .json({ message: `${resMessage}`, result: `${resData}` });
  }
}

module.exports = new successResponse();
