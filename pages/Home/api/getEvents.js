import { useInfiniteQuery } from 'react-query';

import { axios } from '../../../lib/axios';

export const getEvents = async ({ pageParam = 1 }) => {
  const data = await axios.get(`/events?page=${pageParam}`);
  if (!data) {
    throw new Error('Too many API requests');
  }
  return data;
};

export const useEvents = (pageCount) => {
  return useInfiniteQuery(['events'], getEvents, {
    getNextPageParam: (lastPage) => {
      if (lastPage && lastPage.length === 30) {
        return pageCount;
      } else {
        return false;
      }
    },
    staleTime: 300000,
  });
};
