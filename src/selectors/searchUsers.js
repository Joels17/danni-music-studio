

const searchUsers = (users, {text}) => {
  return users
    .filter((user) => {
      const textMatch = user.info.email
        .toLowerCase()
        .includes(text.toLowerCase());

      return textMatch;
    });
};
export default searchUsers;
