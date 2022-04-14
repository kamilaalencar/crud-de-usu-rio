import listProfileService from "../services/listProfileUser.service";

const profileUserController = (request, response) => {
  const userToken = request;

  const userProfile = listProfileService(userToken);

  return response.json(userProfile);
};

export default profileUserController;
