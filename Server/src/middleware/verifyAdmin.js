const verifyAdmin = (req, res, next) => {
  if (req.authUser.id !== 1) {
    return res.status(401).json({
      status: 401,
      message: 'You are not authorized to perform this action',
    });
  }
  next();
};

export default verifyAdmin;
