import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { PageContainer } from '../../components/Layouts/PageContainer';
import { PageHeader } from '../../components/Layouts/PageHeader';

import { SearchBar } from './components/SearchBar/SearchBar';
import { WhoToFollow } from './components/WhoToFollow/WhoToFollow';

export const Search = () => {
  return (
    <PageContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 20}
        enabled={Platform.OS === 'ios' ? true : false}
      >
        <PageHeader>Search</PageHeader>
        <SearchBar />
        <WhoToFollow />
      </KeyboardAvoidingView>
    </PageContainer>
  );
};
