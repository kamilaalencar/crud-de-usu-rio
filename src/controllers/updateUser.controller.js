import res from "express/lib/response";
import updateUserService from "../services/updateUser.service";

const updateUserController = (request, response) => {
  const { id } = request.params;
  const { email, name, password } = request.body;

  const updateUser = updateUserService(id, name, email, password);

  return res.json(updateUser);
};

export default updateUserController;
