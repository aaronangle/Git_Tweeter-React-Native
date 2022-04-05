import React, { useState } from 'react';
import { Text, FlatList } from 'react-native';

import { PageContainer } from '../../components/Layouts/PageContainer/PageContainer';
import { PageHeader } from '../../components/Layouts/PageHeader/PageHeader';
import HomeRow from './components/HomeRow/HomeRow';
import { WelcomeMessage } from './components/WelcomeMessage/WelcomeMessage';

import { Spinner } from '../../components/Elements/Spinner';

import { useEvents } from './api/getEvents';

const renderitem = ({ item }) => <HomeRow item={item} />;

export const Home = () => {
  const [pageCount, setPageCount] = useState(2);

  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useEvents(pageCount);

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
      setPageCount((c) => c + 1);
    }
  };

  if (status === 'loading') return <Spinner />;
  if (status === 'error') return <Text>Error: {error.message}</Text>;
  return (
    <PageContainer>
      <PageHeader>Latest Events</PageHeader>
      <FlatList
        data={data.pages.flat(1)}
        renderItem={renderitem}
        onEndReached={loadMore}
        keyExtractor={(item, index) => index}
        ListFooterComponent={isFetchingNextPage ? <Spinner /> : <Text>No More Events</Text>}
        ListHeaderComponent={<WelcomeMessage />}
      />
    </PageContainer>
  );
};
