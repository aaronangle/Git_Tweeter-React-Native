import { NavigationBar } from '../../Functional/NavigationBar';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';

export const MainLayout = ({ children }) => {
  return (
    <View style={styles.cont}>
      <View>
        <View style={styles.scroll}>
          <View style={styles.cont__main}>{children}</View>
        </View>
        <NavigationBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cont__main: {
    flex: 1,
    marginBottom: 405,
  },
  scroll: {
    height: '100%',
  },
});
