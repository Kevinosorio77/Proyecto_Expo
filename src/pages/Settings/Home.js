import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text } from 'react-native';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={{ width: 150, height: 150 }} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}/>
      <Text style={styles.h1}>Bienvenidoss</Text>
      <Text style={styles.h2}>A la clase de parrafos</Text>
      <Text style={styles.h3}> De la materia de desarrollo de aplicaciones moviles</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2e98c5ff',
    justifyContent: 'center',
  },
  h1: {fontSize: 30,fontWeight: 'bold',},
  h2: {fontSize: 20,fontWeight: '600',marginTop: 10,},
  h3: {fontSize: 14,fontWeight: '500',lineHeight: 22,marginTop: 5,},
});

