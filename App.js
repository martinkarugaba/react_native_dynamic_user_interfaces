import { StyleSheet, View, Text, SafeAreaView, Platform } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={[styles.box]}>
          <Text style={styles.text}>Welcome</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'plum',
  },
  container: {
    flex: 1,
    backgroundColor: 'plum',
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
  box: {
    padding: 20,
  },
  text: {
    ...Platform.select({
      ios: {
        color: 'purple',
        fontSize: 24,
        fontStyle: 'italic',
      },
      android: {
        color: 'orange',
        fontSize: 30,
      },
    }),
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
