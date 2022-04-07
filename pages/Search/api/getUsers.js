import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';

const page = Math.floor(Math.random() * 100);

export const getUsers = async () => {
  const data = await axios(`/search/users?q=""&page=${page}&per_page=5`);
  if (!data) {
    throw new Error('Too many API requests');
  }
  return data;
};

export const useUsers = () => {
  return useQuery(['whoToFollow'], getUsers, { staleTime: 300000 });
};
