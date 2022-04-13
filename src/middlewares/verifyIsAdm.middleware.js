import users from "../database";
import jwt from "jsonwebtoken";

const verifyIsAdmMiddleware = (request, response, next) => {
  let token = request.headers.authorization.split(" ")[1];

  const decodedEmail = jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    return decoded.email;
  });

  const user = users.find((use) => use.email === decodedEmail);

  const isAdm = user.isAdm;

  if (isAdm) {
    return next();
  }

  if (request.params.id === user.id) {
    return next();
  }

  return response.status(401).json({ message: "Unauthorized" });
};

export default verifyIsAdmMiddleware;
