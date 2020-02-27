import * as React from 'react';
import { Text, TextInput, View, TouchableOpacity, Alert, StyleSheet, Image, FlatList, AsyncStorage } from 'react-native';
import { CheckBox } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import store from './src/store';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const NOTE_LIST_DATA = 'NOTE_LIST_DATA'

function AddTodo({navigation}) {
  const [content, setContent] = React.useState();

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <TextInput
          style={{padding: 15, width: '100%', textAlign: 'center', borderColor: '#8842d5', borderWidth: 1}}
          placeholder="Type here to translate!"
          onChangeText={(text) => setContent(text)}
          value={content}
        />
      <TouchableOpacity
        style={styles.addButton}
        onPress={async () => {
          navigation.goBack();
          // let noteList = JSON.parse(await AsyncStorage.getItem(NOTE_LIST_DATA));
          // if (noteList) {
          //   noteList.push({content: content});
          // } else {
          //   noteList = [{content: content}]
          // }
          // await AsyncStorage.setItem(NOTE_LIST_DATA, JSON.stringify(noteList));
        }}
      >
        <Image
          style={styles.addButtonImage}    
          source={require('./assets/ok.png')}
        />
      </TouchableOpacity>
    </View>
  )
}

function HomeScreen() {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Todo List" component={TodoList} />
      <HomeStack.Screen name="Add Todo" component={AddTodo} />
    </HomeStack.Navigator>
  )
}

function SettingsScreen() {
  return (
    <View style={styles.settings}>
      <Text>Settings!</Text>
    </View>
  );
}


const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    switch (route.name) {
      case 'Home':
        iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
        break;
      case 'Settings':
        iconName = focused ? 'ios-list-box' : 'ios-list';
        break;
      default:
        break;
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  },
})

const tabBarOptions = {
  activeTintColor: 'tomato',
  inactiveTintColor: 'gray',
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={screenOptions}
          tabBarOptions={tabBarOptions}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  home: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  addButton: {
    position: 'absolute',
    borderRadius: 40,
    height: 80,
    width: 80,
    padding: 5,
    right: 15,
    bottom: 15
  },
  addButtonImage: {
    flex: 1,
    width: undefined,
    height: undefined
  },
  settings: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});