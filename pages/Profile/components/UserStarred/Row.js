import { memo } from 'react';
import { View, Text, StyleSheet, Linking, TouchableNativeFeedback } from 'react-native';
import { RowContainer } from '../../../../components/Elements/RowContainer';
import { Avatar } from '../../../../components/Elements/Avatar';
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
        <View>
          <View style={styles.row__header}>
            <View style={styles.row__details}>
              <Avatar img={item.owner.avatar_url} />
              <View style={styles.details__margin}>
                <Text style={styles.details__heading}>{item.name}</Text>
                <Text style={styles.details__text}>{item.language}</Text>
              </View>
            </View>
            <View>
              <Badge count={item.forks} />
              <Badge isStars={true} count={item.stargazers_count} />
            </View>
          </View>
          <Text>{item.description}</Text>
          <View style={styles.topic__container}>
            {item.topics.map((topic) => {
              return (
                <Text key={topic} style={styles['row__topic']}>
                  {topic}
                </Text>
              );
            })}
          </View>
        </View>
      </TouchableNativeFeedback>
    </RowContainer>
  );
};

export default memo(Row);

const styles = StyleSheet.create({
  row__header: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  row__details: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  details__margin: {
    marginLeft: 10,
  },
  details__heading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details__text: {
    color: '#657786',
  },
  topic__container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  row__topic: {
    backgroundColor: '#1da1f2',
    padding: 7,
    borderRadius: 9999,
    color: 'white',
    margin: 3,
  },
});
