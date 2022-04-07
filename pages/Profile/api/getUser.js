import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';

export const getUser = async ({ queryKey }) => {
  const username = queryKey[1];
  const data = await axios(`/users/${username}`);
  if (!data) {
    throw new Error('Too many API requests');
  }
  return data;
};

export const useUser = (username) => {
  return useQuery(['user', username], getUser, { staleTime: 600000 });
};
