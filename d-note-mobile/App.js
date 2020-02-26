import React from 'react';
import { Text, TextInput, View, TouchableOpacity, Alert, StyleSheet, Image, FlatList } from 'react-native';
import { CheckBox } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator()

function TodoList({ navigation }) {
  const completed = false;
  return (
    <>
      <View style={{flex: 1}}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => (
            <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#ddd'}}>
              <CheckBox
                checked = {completed}
                onPress = {() => Alert.alert('Checked!')}
              />
              <Text>{item.key}</Text>
                <TouchableOpacity
                  style={{position:'absolute', right: 0, backgroundColor: '#ddd', padding: 10}}
                  onPress={() => Alert.alert('Deleted!')}
                >
                </TouchableOpacity>
            </View>
          )}
        />
      </View>

      <View style={styles.home}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('Add Todo')}
        >
          <Image
            style={styles.addButtonImage}    
            source={require('./assets/plus.png')}
          />
        </TouchableOpacity>
      </View>
    </>
  )
}

function AddTodo() {
  const [content, setContent] = React.useState();

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <TextInput
          style={{padding: 15, width: '100%', textAlign: 'center', borderColor: '#8842d5', borderWidth: 1}}
          placeholder="Type here to translate!"
          onChangeText={(text) => setContent(text)}
          value={content}
        />
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
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptions}
        tabBarOptions={tabBarOptions}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  home: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  addButton: {
    position: 'absolute',
    borderRadius: 30,
    height: 60,
    width: 60,
    backgroundColor: '#ccffff',
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