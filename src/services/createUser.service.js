import users from "../database";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";

const createUserService = async (email, name, password, isAdm = false) => {
  const hashePassword = await bcrypt.hash(password, 10);

  const newUser = {
    email,
    name,
    password: hashePassword,
    isAdm,
    createdOn: new Date(),
    updatedOn: new Date(),
    id: uuidv4(),
  };

  users.push(newUser);

  return newUser;
};
export default createUserService;
