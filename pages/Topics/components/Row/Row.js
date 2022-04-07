import { memo } from 'react';
import { Text } from 'react-native';

import { RowContainer } from '../../../../components/Elements/RowContainer';

const Row = ({ item }) => {
  return (
    <RowContainer>
      <Text>{item.display_name}</Text>
      <Text>Released: {item.released}</Text>
      <Text>Creator: {item.created_by}</Text>
      <Text>{item.description}</Text>
    </RowContainer>
  );
};

export default memo(Row);
