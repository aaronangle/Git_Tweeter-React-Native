import { FlatList, Text } from 'react-native';
import { Spinner } from '../../../../components/Elements/Spinner';
import { Error } from '../../../../components/Elements/Error';
import { PageFooter } from '../../../../components/Layouts/PageFooter';

import { useRepos } from '../../api/getRepos';

import Row from './Row';

const renderItem = ({ item }) => <Row item={item} />;

export const UserRepos = ({ username }) => {
  const { isLoading, isError, data, error } = useRepos(username);

  if (isLoading) return <Spinner />;

  if (isError) return <Error>{error.message}</Error>;

  return (
    <>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        ListFooterComponent={<PageFooter>No More Repos</PageFooter>}
      />
    </>
  );
};
