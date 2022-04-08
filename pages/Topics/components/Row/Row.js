import { memo } from 'react';
import { Text, StyleSheet } from 'react-native';

import { RowContainer } from '../../../../components/Elements/RowContainer';

const Row = ({ item }) => {
  return (
    <RowContainer>
      <Text style={styles.heading}>{item.display_name}</Text>
      <Text style={styles.margin}>
        <Text style={styles.bold}>Released:</Text> {item.released}
      </Text>
      <Text style={styles.margin}>
        <Text style={styles.bold}>Creator:</Text> {item.created_by}
      </Text>
      <Text>{item.description}</Text>
    </RowContainer>
  );
};

export default memo(Row);

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  margin: {
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
});
