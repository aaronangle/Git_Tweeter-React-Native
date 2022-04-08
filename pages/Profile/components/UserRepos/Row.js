import React, { memo } from 'react';
import { View, Text, StyleSheet, Linking, TouchableNativeFeedback } from 'react-native';
import { RowContainer } from '../../../../components/Elements/RowContainer';
import { Badge } from '../Badge/Badge';

const Row = ({ item }) => {
  const goToLink = async () => {
    try {
      await Linking.openURL(item.html_url);
    } catch (err) {}
  };

  return (
    <RowContainer>
      <TouchableNativeFeedback onPress={goToLink}>
        <View style={styles.row}>
          <Text style={styles.row__heading}>{item.name}</Text>
          <View style="fs-row">
            <Badge count={item.forks} />
            <Badge isStars={true} count={item.stargazers_count} />
          </View>
        </View>
      </TouchableNativeFeedback>
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
    flex: 1,
  },
  row__heading: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
