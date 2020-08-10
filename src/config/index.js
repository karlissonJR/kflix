const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://kflix-backend.herokuapp.com';

export default {
  URL,
};
