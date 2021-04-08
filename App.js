import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import CounterApp from './src/CounterApp' 
import {createStore} from 'redux';
import {Provider} from 'react-redux'

const initialState = {
  counter:0
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'INCREASE_COUNTER':
    return{counter:state.counter+1}
    case 'DECREASE_COUNTER':
    return{counter:state.counter-1}
  }
  return state
}

const store = createStore(reducer)

class App extends React.Component {

  render(){
    return(
      <Provider store = {store}>
        <CounterApp/>
      </Provider>
    );
  }  
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 32,
    paddingHorizontal: 24,
  },
  textStyle:{
    fontSize:20,
  }
  
});

export default App;
