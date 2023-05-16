import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';



export default function App() {
  const buttonKeys = [
    {keyCode: '1'},
    {keyCode: '2'},
    {keyCode: '3'},
    {keyCode: '4'},
    {keyCode: '5'},
    {keyCode: '6'},
    {keyCode: '7'},
    {keyCode: '8'},
    {keyCode: '9'},
    {keyCode: '10'},
    {keyCode: '11'},
    {keyCode: '12'},
    {keyCode: '13'},
    {keyCode: '14'},
    {keyCode: '15'},
    {keyCode: '16'},
  ]
  
  const ButtonCalc = ({keyCode}) => {
    return (
      <View style={styles.buttonView}>
        <Text>{keyCode}</Text>
      </View>
    );
  }

  return (
    <View style={styles.main}>
      <View style={styles.textInputView}>
        <TextInput
          style={styles.textInput}
          />
      </View>
      <SafeAreaView
        style={{flex:1}}>
        <FlatList
          contentContainerStyle={{flexGrow:1}}
          data={buttonKeys}
          renderItem={({item}) => <ButtonCalc keyCode={item.keyCode}/>}
          numColumns={4}
        />
      </SafeAreaView>
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
    },

  buttonsView: {
      
    },

  buttonView: {
    backgroundColor: '#DFF',
    flexGrow: 1,
  }
});
