const users = {
  1: { name: 'Mark' },
  2: { name: 'Paul' },
};

export default function fetchUser(url) {
  return new Promise((resolve, reject) => {
    const id = parseInt(url.substr('/users/'.length), 10);

    process.nextTick(() => {
      if (users.hasOwnProperty(id)) {
        resolve(users[id]);
      } else {
        reject(new Error(`User with id ${id} not found.`));
      }
    });
  });
}
