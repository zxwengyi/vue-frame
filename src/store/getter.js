const getters = {
  number: state => state.app.number,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name
};

export default getters;
