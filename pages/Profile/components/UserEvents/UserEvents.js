import React, { useState } from 'react';
import { FlatList, Text } from 'react-native';

import { useUserEvents } from '../../api/getUserEvents';
import { Spinner } from '../../../../components/Elements/Spinner';
import { Error } from '../../../../components/Elements/Error';
import { PageFooter } from '../../../../components/Layouts/PageFooter';

import Row from './Row';

const renderItem = ({ item }) => <Row item={item} />;

export const UserEvents = ({ username }) => {
  const [pageCount, setPageCount] = useState(2);

  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage, isError, isLoading } =
    useUserEvents(pageCount, username);

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
      setPageCount((c) => c + 1);
    }
  };

  if (isLoading) return <Spinner />;

  if (isError) return <Error>Error: {error.message}</Error>;

  return (
    <>
      <FlatList
        data={data.pages.flat(1)}
        renderItem={renderItem}
        onEndReached={loadMore}
        keyExtractor={(item, index) => index}
        ListFooterComponent={
          isFetchingNextPage ? <Spinner /> : <PageFooter>No More Events</PageFooter>
        }
      />
    </>
  );
};
