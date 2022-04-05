import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RowContainer } from '../../../../components/Elements/RowContainer';
import { Badge } from '../Badge/Badge';

const Row = ({ item }) => {
  return (
    <RowContainer>
      <View style={styles.row}>
        <Text style={styles.row__heading}>{item.name}</Text>
        <View style="fs-row">
          <Badge count={item.forks} />
          <Badge isStars={true} count={item.stargazers_count} />
        </View>
      </View>
    </RowContainer>
  );
};

export default memo(Row);

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  row__heading: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
