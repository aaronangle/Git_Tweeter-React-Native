import React, { useState } from 'react';
import { Text, FlatList } from 'react-native';

import { PageContainer } from '../../components/Layouts/PageContainer';
import { PageHeader } from '../../components/Layouts/PageHeader';
import { PageFooter } from '../../components/Layouts/PageFooter';
import { Spinner } from '../../components/Elements/Spinner';
import { Error } from '../../components/Elements/Error';
import { TopicSelectionBar } from './components/TopicSelectionBar/TopicSelectionBar';
import Row from './components/Row/Row';

import { useTopics } from './api/getTopics';

const renderitem = ({ item }) => <Row item={item} />;

export const Topics = () => {
  const [selectedTopics, setSelectedTopics] = useState(['JavaScript']);
  const [pageCount, setPageCount] = useState(2);

  const query = encodeURIComponent(selectedTopics.join(' OR '));

  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage, isError, isLoading } =
    useTopics(pageCount, query);

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
      setPageCount((c) => c + 1);
    }
  };

  return (
    <PageContainer>
      <PageHeader>Topics</PageHeader>
      <TopicSelectionBar selectedTopics={selectedTopics} setSelectedTopics={setSelectedTopics} />
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <Error>Error: {error.message}</Error>
      ) : (
        <FlatList
          data={data.pages.flat(1)}
          renderItem={renderitem}
          onEndReached={loadMore}
          keyExtractor={(item, index) => index}
          ListFooterComponent={
            isFetchingNextPage ? <Spinner /> : <PageFooter>No More Topics</PageFooter>
          }
        />
      )}
    </PageContainer>
  );
};
