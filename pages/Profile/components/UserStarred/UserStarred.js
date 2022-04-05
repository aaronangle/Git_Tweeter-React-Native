import { Text, FlatList } from 'react-native';

import { Spinner } from '../../../../components/Elements/Spinner';

import { useStarred } from '../../api/getStarred';

import Row from './Row';

const renderItem = ({ item }) => <Row item={item} />;

export const UserStarred = ({ username }) => {
  const { isLoading, isError, data, error } = useStarred(username);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) return <p>{error.message}</p>;

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index}
      ListFooterComponent={<Text>No More Starred</Text>}
    />
  );
};
