import jwt from "jsonwebtoken";
const isAuthenticated = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const decod = jwt.verify(token, process.env.JWT_SECRET);
    if (!decod) {
      return res.status(401).json({ success: false, message: "Invalid token" });
    }
    req.id = decod.userId;
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

export default isAuthenticated;
