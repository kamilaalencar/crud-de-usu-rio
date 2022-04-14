import users from "../database";
import jwt from "jsonwebtoken";

const listProfileService = (user) => {
  const token = user.headers.authorization.split(" ")[1];

  const decodedEmail = jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    return decoded.email;
  });

  const userProfile = users.find((element) => element.email === decodedEmail);

  return userProfile;
};

export default listProfileService;
