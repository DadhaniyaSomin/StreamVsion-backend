exports.trtCatch = (controller) => async (req, res, next ){
    try{
       await controller( req, res);
    }catch (err)
    {
       return next(err);
    }
}