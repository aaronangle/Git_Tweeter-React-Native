import { useInfiniteQuery } from 'react-query';

import { axios } from '../../../lib/axios';

export const getUserEvents = async ({ queryKey, pageParam = 1 }) => {
  const username = queryKey[1];
  const data = await axios(`/users/${username}/events?page=${pageParam}`);
  if (!data) {
    throw new Error('Too many API requests');
  }
  return data;
};

export const useUserEvents = (pageCount, username) => {
  return useInfiniteQuery(['userEvents', username], getUserEvents, {
    getNextPageParam: (lastPage) => {
      if (lastPage.length === 30) {
        return pageCount;
      } else {
        return false;
      }
    },
    staleTime: 600000,
  });
};
