import { StyleSheet, Text, View } from 'react-native';
import { Router } from './react-router';
import { AppRoutes } from './routes';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './lib/react-query';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Setting a timer']);

const App = () => (
  <Router>
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <View>
          <AppRoutes />
        </View>
      </View>
    </QueryClientProvider>
  </Router>
);

export default App;
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
