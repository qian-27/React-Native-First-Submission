import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, Alert, TextInput, View } from 'react-native';

export default function App() {
  const [message, setMessage] = useState('')
  const showAlert = () => {
    Alert.alert('Hello','You typed: ' + message);
  }
  return (
    <View style={styles.container}>
      <TextInput 
        style={{
          color: '#DBC2A4', 
          fontSize: 30,
          width: 200, 
          height: 50, 
          borderColor: '#782221', 
          borderWidth: 2
        }}
        onChangeText={text => setMessage(text)}
        inputMode='numeric'
      />
      <Button color='#CF3E29' title='Click me' onPress={showAlert} />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C1D27',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
