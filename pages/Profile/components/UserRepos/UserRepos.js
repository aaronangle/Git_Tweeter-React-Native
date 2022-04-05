import { FlatList, Text } from 'react-native';
import { Spinner } from '../../../../components/Elements/Spinner';

import { useRepos } from '../../api/getRepos';

import Row from './Row';

const renderItem = ({ item }) => <Row item={item} />;

export const UserRepos = ({ username }) => {
  const { isLoading, isError, data, error } = useRepos(username);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) return <Text>{error.message}</Text>;

  return (
    <>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        ListFooterComponent={<Text>No More Repos</Text>}
      />
    </>
  );
};
