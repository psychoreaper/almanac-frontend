import API from '../utils/axios';

export const createUser = userData => {
  return API.post('/registration', { ...userData, role: 'USER' }).then(
    ({ data }) => data,
  );
};

export const authUser = userData => {
  return API.post('/login', userData).then(({ data }) => data);
};
