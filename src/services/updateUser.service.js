import users from "../database";

const updateUserService = (id, name, email, password) => {
  const patchUser = {
    email,
    name,
    password,
    updatedOn: new Date(),
  };

  const userIndex = users.findIndex((element) => element.id === id);

  if (userIndex === -1) {
    return "User not found";
  }

  users[userIndex] = { ...users[userIndex], ...patchUser };

  return users[userIndex];
};

export default updateUserService;
