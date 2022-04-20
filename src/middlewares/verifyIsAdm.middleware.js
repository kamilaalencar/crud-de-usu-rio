import users from "../database";
import jwt from "jsonwebtoken";

const verifyIsAdmMiddleware = (request, response, next) => {
  let token = request.headers.authorization.split(" ")[1];

  const user = users.find((use) => use.email === request.user);
  const { id } = request.params || { id: " " };
  if (id === user.id || user.isAdm) {
    return next();
  }

  return response.status(401).json({ message: "Unauthorized" });
};

export default verifyIsAdmMiddleware;
