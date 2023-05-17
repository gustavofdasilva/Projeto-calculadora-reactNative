import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, View, Dimensions, Pressable, TouchableOpacity } from 'react-native';



export default function App() {

  const [input, setInput] = useState("");

  const onPressHandle = (keyCode) => () => {
      if(keyCode == "=") {
        setInput(eval(input))
      } else if (keyCode == 'C') {
        setInput("");
      } else {
        setInput(input + keyCode);
      }
  }

  const buttonKeys = [
    {keyCode: '1'},
    {keyCode: '2'},
    {keyCode: '3'},
    {keyCode: '-'},
    {keyCode: '4'},
    {keyCode: '5'},
    {keyCode: '6'},
    {keyCode: '+'},
    {keyCode: '7'},
    {keyCode: '8'},
    {keyCode: '9'},
    {keyCode: '/'},
    {keyCode: 'C'},
    {keyCode: '0'},
    {keyCode: '='},
    {keyCode: '*'},
  ]
  
  const SCREEN_HEIGHT = Dimensions.get('window').height;
  return (
    <View style={styles.main}>
      <View style={styles.textInputView}>
        <TextInput
          defaultValue={input}
          editable={false}
          style={styles.textInput}
          />
      </View>
        <View style={{height: SCREEN_HEIGHT, justifyContent: 'center'}}>
          <FlatList
            style={{
              backgroundColor: '#F54'
            }}
            keyExtractor={this.keyExtractor}          
            data={buttonKeys}
            renderItem={({item}) => (
              <TouchableOpacity 
                style={styles.buttonView}
                onPress={onPressHandle(item.keyCode)}>
                <Text style={{fontSize: 20}}>{item.keyCode}</Text>
              </TouchableOpacity>
            )}
            numColumns={4}
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
    },

  buttonsView: {
      
    },

  buttonView: {
    backgroundColor: '#DFFFFF55',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 110,
    margin: 1,
  }
});
