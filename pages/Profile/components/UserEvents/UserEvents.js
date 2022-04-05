import React, { useState } from 'react';
import { FlatList, Text } from 'react-native';
import { useUserEvents } from '../../api/getUserEvents';
import { Spinner } from '../../../../components/Elements/Spinner';

import Row from './Row';

const renderItem = ({ item }) => <Row item={item} />;

export const UserEvents = ({ username }) => {
  const [pageCount, setPageCount] = useState(2);

  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useUserEvents(
    pageCount,
    username
  );

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
      setPageCount((c) => c + 1);
    }
  };

  if (status === 'loading') return <Spinner />;
  if (status === 'error') return <Text>Error: {error.message}</Text>;
  return (
    <>
      <FlatList
        data={data.pages.flat(1)}
        renderItem={renderItem}
        onEndReached={loadMore}
        keyExtractor={(item, index) => index}
        ListFooterComponent={isFetchingNextPage ? <Spinner /> : <Text>No More Events</Text>}
      />
    </>
  );
};
