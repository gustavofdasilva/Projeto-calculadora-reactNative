import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.main}>
      <View style={styles.textInputView}>
        <TextInput
          style={styles.textInput}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },

  textInputView: {
    height: 250,
    backgroundColor: '#F99',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'    
  }, 
    textInput: {
      backgroundColor:"#FFF",
      color: '#000',
      width: '100%',
      height: '40%',
      marginBottom:10,
      fontSize: 40,
      padding: 10,
    }
});
