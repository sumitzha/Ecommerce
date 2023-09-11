import jwt from "jsonwebtoken";

// Documentation - https://www.npmjs.com/package/jsonwebtoken

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export default generateToken;
