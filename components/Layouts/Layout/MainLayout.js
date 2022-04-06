import { NavigationBar } from '../../Functional/NavigationBar';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';

export const MainLayout = ({ children }) => {
  return (
    <View style={styles.cont}>
      <View style={styles.scroll}>
        <FlatList
          data={[{}]}
          keyExtractor={() => null}
          renderItem={() => <View style={styles.cont__main}>{children}</View>}
        />
        <NavigationBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cont__main: {
    flex: 1,
    marginBottom: 40,
  },
  scroll: {
    height: '100%',
  },
});
