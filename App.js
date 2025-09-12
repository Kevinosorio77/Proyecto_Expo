import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native/types_generated/index';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <image style={width:150, height:150} source = {{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX_n4pPkerBWPWWjXbU6CmUs6pYkGro8_oPw&s'}} />
      <Text style={styles.h1}>Bienvenidos</Text>
      <Text style={styles.h2}>a loa clase de parrafos</Text>
      <Text style={styles.h3}>de la materia d ela block chain</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  backgroundColor: '#00b3ff',
    justifyContent: 'center',
  },
  h1:{fontSize:30,fontWeight:'bold'},
   h2:{fontSize:20,fontWeight:'600',margin:10},
    h3:{fontSize:10,fontWeight:'500',lineHeight:22}
});
