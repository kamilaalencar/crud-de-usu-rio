import users from "../database";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";
import { response } from "express";

const userLoginService = (email, password, response) => {
  const user = users.find((element) => element.email === email);

  if (!user) {
    return response.status(401).json({ message: "Wrong email/password" });
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    return response.status(401).json({ message: "Wrong email/password" });
  }

  const token = jwt.sign({ email: email, isAdm: user.isAdm }, "SECRET_KEY", {
    expiresIn: "24h",
    subject: user.id,
  });

  return response.status(200).json({ token });
};

export default userLoginService;
