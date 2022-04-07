import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';

export const getRepos = async ({ queryKey }) => {
  const username = queryKey[1];
  const data = await axios(`/users/${username}/repos`);
  if (!data) {
    throw new Error('Too many API requests');
  }
  return data;
};

export const useRepos = (username) => {
  return useQuery(['repos', username], getRepos, { staleTime: 600000 });
};
