import { StyleSheet, Text, View } from 'react-native';
import { PageContainer } from '../../components/Layouts/PageContainer';
import { PageHeader } from '../../components/Layouts/PageHeader';

import { SearchBar } from './components/SearchBar/SearchBar';
import { WhoToFollow } from './components/WhoToFollow/WhoToFollow';

export const Search = () => {
  return (
    <PageContainer>
      <PageHeader>Search</PageHeader>
      <SearchBar />
      <WhoToFollow />
    </PageContainer>
  );
};
