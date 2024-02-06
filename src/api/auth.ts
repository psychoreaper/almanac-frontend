import API from '../utils/axios';

export const createUser = userData => {
  return API.post('/registration', { ...userData, role: 'USER' }).then(
    ({ data }) => data,
  );
};

export const authUser = userData => {
  return API.post('/login', userData).then(({ data }) => data);
};

export const getUser = ({ id }) => {
  return API.get('/getUser', { params: { id: id } }).then(({ data }) => data);
};
