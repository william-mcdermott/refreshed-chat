const users = [];

const addUser = ({ id, username, room }) => {
  // Clean the data
  const formattedUsername = username.trim().toLowerCase();
  const formattedRoom = room.trim().toLowerCase();

  // Validate the data
  if (!username || !room) {
    return {
      error: 'Username and room are required'
    };
  }

  // Check for existing user
  const existingUser = users
    .find(user => user.room === formattedRoom && user.username === formattedUsername);

  // Validate username
  if (existingUser) {
    return {
      error: 'Username is in use!'
    };
  }

  // Store user
  const user = {
    id,
    username: formattedUsername,
    room: formattedRoom
  };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }

  return {
    error: 'No such user to remove'
  };
};

const getUser = id => users.find(user => user.id === id);

const getUsersInRoom = room => users.filter(user => user.room === room);

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom
};
