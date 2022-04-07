import React, { useState } from 'react';
import { Text, FlatList } from 'react-native';

import { PageContainer } from '../../components/Layouts/PageContainer';
import { PageHeader } from '../../components/Layouts/PageHeader';
import { PageFooter } from '../../components/Layouts/PageFooter';
import { Spinner } from '../../components/Elements/Spinner';
import { Error } from '../../components/Elements/Error';
import { TopicSelectionBar } from './components/TopicSelectionBar';
import Row from './components/Row';

import { useTopics } from './api/getTopics';

const renderitem = ({ item }) => <Row item={item} />;

export const Topics = () => {
  const [pageCount, setPageCount] = useState(2);

  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage, isError, isLoading } =
    useTopics(pageCount);

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
      setPageCount((c) => c + 1);
    }
  };

  if (isLoading) return <Spinner />;

  if (isError) return <Error>Error: {error.message}</Error>;

  return (
    <PageContainer>
      <PageHeader>Topics</PageHeader>
      <Text>This is the topics page</Text>
      <FlatList
        data={data.pages.flat(1)}
        renderItem={renderitem}
        onEndReached={loadMore}
        keyExtractor={(item, index) => index}
        ListFooterComponent={
          isFetchingNextPage ? <Spinner /> : <PageFooter>No More Events</PageFooter>
        }
        ListHeaderComponent={<TopicSelectionBar />}
      />
    </PageContainer>
  );
};
