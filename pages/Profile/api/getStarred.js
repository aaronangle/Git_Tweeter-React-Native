import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';

export const getStarred = async ({ queryKey }) => {
  const username = queryKey[1];
  const data = await axios(`/users/${username}/starred`);
  if (!data) {
    throw new Error('Too many API requests');
  }
  return data;
};

export const useStarred = (username) => {
  return useQuery(['starred', username], getStarred, { staleTime: 600000 });
};
