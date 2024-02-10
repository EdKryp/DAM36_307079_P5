import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import TextComponent from './components/TextComponent';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Mi Biografía</Text>
        <Image source={require('./assets/images/esp.png')} style={styles.image} />
        <TextComponent />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#487eb0',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#dfe6e9',
    marginBottom: 16,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#dfe6e9',
    marginBottom: 16,
  },
});

export default App;