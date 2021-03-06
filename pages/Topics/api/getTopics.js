import { useInfiniteQuery } from 'react-query';

import { axios } from '../../../lib/axios';

export const getTopics = async ({ pageParam = 1, queryKey }) => {
  const query = queryKey[1];
  const data = await axios(`/search/topics?q=${query}&per_page=20&page=${pageParam}`);
  if (!data) {
    throw new Error('Too many API requests');
  }
  return data.items.filter((el) => el.display_name);
};

export const useTopics = (pageCount, query) => {
  return useInfiniteQuery(['topics', query], getTopics, {
    getNextPageParam: (lastPage) => {
      if (lastPage && lastPage.length < 1) {
        return false;
      }
      return pageCount;
    },
    staleTime: 600000,
  });
};
