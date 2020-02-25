import * as React from 'react';
import { Text, View, TouchableOpacity, Alert, StyleSheet,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

function HomeScreen() {
  return (
    <View style={styles.home}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => Alert.alert('Button clicked!')}
      >
        <Image
          style={styles.addButtonImage}    
          source={require('./assets/plus.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.settings}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

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
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  addButton: {
    borderRadius: 30,
    height: 60,
    width: 60,
    backgroundColor: '#ccffff',
    padding: 5,
    margin: 15
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