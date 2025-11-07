import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import ProfileCard from './components/ProfileCard';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>My Profile App</Text>
          <ScrollView>
            <ProfileCard 
              name="Ada Lovelace" 
              role="Mathematician" 
              imageSource={require('./assets/person1.jpg')} 
            />
            <ProfileCard 
              name="Grace Hopper" 
              role="Computer Scientist" 
              imageSource={require('./assets/person2.jpg')} 
            />
            <ProfileCard 
              name="Hedy Lamarr" 
              role="Inventor & Actress" 
              imageSource={require('./assets/person3.jpg')} 
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
