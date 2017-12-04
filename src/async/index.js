import fetchUser from './request';

export function getUserName(id) {
  return fetchUser('/users/' + id).then(user => user.name);
};
