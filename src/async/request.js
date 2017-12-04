const http = require('http');

export default function fetchUser(url) {
  return new Promise(resolve => {
    http.get({ path: url }, (response) => {
      let data = '';
      response.on('data', (out) => (data += out));
      response.on('end', () => resolve(data));
    });
  });
}
