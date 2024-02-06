import API from '../utils/axios';

export const getLanding = ({ id }) => {
  return API.get('/profile/getProfile', { params: { id: id } }).then(
    ({ data }) => data,
  );
};
