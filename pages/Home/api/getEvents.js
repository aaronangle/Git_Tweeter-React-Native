import { useInfiniteQuery } from 'react-query';

import { axios } from '../../../lib/axios';

export const getEvents = ({ pageParam = 1 }) => {
  return axios.get(`/events?page=${pageParam}`).catch((err) => console.error(err));
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
