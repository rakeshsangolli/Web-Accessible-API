import { v4 as uuidv4 } from "uuid";
let users = [];
export const createUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`User with the name ${user.firstName} added to the database`);
};

export const findUser = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
};

export const getUsers = (req, res) => {
  res.send(users);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`user with the id${id} deleted from the database`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;

  const user = users.find((user) => user.id === id);

  const { firstName, lastName, age } = req.body;

  if (firstName) {
    user.firstName = firstName;
  }
  if (age) {
    user.age = age;
  }

  if (lastName) {
    user.lastName = lastName;
  }

  res.send(`User with id ${id} has been updated`);
};
