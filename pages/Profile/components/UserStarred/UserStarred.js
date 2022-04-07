import { FlatList } from 'react-native';

import { Spinner } from '../../../../components/Elements/Spinner';
import { Error } from '../../../../components/Elements/Error';
import { PageFooter } from '../../../../components/Layouts/PageFooter';

import { useStarred } from '../../api/getStarred';

import Row from './Row';

const renderItem = ({ item }) => <Row item={item} />;

export const UserStarred = ({ username }) => {
  const { isLoading, isError, data, error } = useStarred(username);

  if (isLoading) return <Spinner />;

  if (isError) return <Error>{error.message}</Error>;

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index}
      ListFooterComponent={<PageFooter>No More Starred Repos</PageFooter>}
    />
  );
};
