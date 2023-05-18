import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, View, Dimensions, Pressable, TouchableOpacity, Alert } from 'react-native';

const AppColors = {
  background: '#1a1a1a',
  backgroundButton: '#212121',
  text: '#FDFDFD',
}

export default function App() {


  const [input, setInput] = useState("");

  const onPressHandle = (keyCode) => () => {
      if(keyCode == "=") {
        try {
          let value = eval(input);
          setInput(value.toString());
        } catch (error) {
          Alert.alert('Warning!','Invalid expression')
        }
        
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
        <View style={{height: SCREEN_HEIGHT, justifyContent: 'center', backgroundColor: '#F0d'}}>
          <FlatList
            style={{
              backgroundColor: AppColors.backgroundButton
            }}
            keyExtractor={this.keyExtractor}          
            data={buttonKeys}
            renderItem={({item}) => (
              <TouchableOpacity 
                style={[styles.buttonView, {
                  backgroundColor: item.keyCode == 'C' ? '#9DF' : '#8a8a8a33'
                }]}
                onPress={onPressHandle(item.keyCode)}>
                <Text style={{fontSize: 20, color:AppColors.text}}>{item.keyCode}</Text>
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
    backgroundColor: AppColors.background,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    borderBottomWidth: 1,
  }, 
    textInput: {
      textAlign:'left',
      color: AppColors.text,
      height: '40%',
      marginBottom:10,
      marginRight: 30,
      fontSize: 40,
    },

  buttonsView: {
      
    },

  buttonView: {
    backgroundColor: '#8a8a8a33',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 145,
    margin: 1,
  }
});
