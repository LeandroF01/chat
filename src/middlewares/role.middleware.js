const adminValidate = (req, res, next) => {
  const role = req.user.role;
  if (role === "admin") {
    next();
  } else {
    res.status(400).json({ message: "Access Denied!" });
  }
};

module.exports = adminValidate;
