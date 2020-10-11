//This is an example code for Bottom Navigation//
import React from 'react';
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
//import all the basic component we have used
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Ionicons to show the icon for bottom options

//import React Navigation
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './pages/HomeScreen';
import SettingsScreen from './pages/SettingsScreen';
import DetailsScreen from './pages/DetailsScreen';
import ProfileScreen from './pages/ProfileScreen';
import StaffScreen from './pages/StaffScreen';
import CustomerScreen from './pages/CustomerScreen';
import PackageScreen from './pages/PackageScreen';
import FoodPackageScreen from './pages/FoodPackageScreen';
import WebPackageScreen from './pages/WebPackageScreen';

const HomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen },
    Staff: { screen: StaffScreen },
    Customer: { screen: CustomerScreen },
    Package: { screen: PackageScreen },
    WebPackage: { screen: WebPackageScreen },
    FoodPackage: { screen: FoodPackageScreen },

  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'Home',
      //Header title
    },
  }
);
const SettingsStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Settings: { screen: SettingsScreen },
    Details: { screen: DetailsScreen },
    Profile: { screen: ProfileScreen },
    WebPackage: { screen: WebPackageScreen },
    FoodPackage: { screen: FoodPackageScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'Settings',
      //Header title
    },
  }
);
const PackageStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen,
    Package: { screen: PackageScreen },
    WebPackage: { screen: WebPackageScreen },
    FoodPackage: { screen: FoodPackageScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'Package',
      //Header title
    },
  }
);

const App = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Staff: { screen: StaffScreen },
    Customer: { screen: CustomerScreen },
    Package: { screen: PackageScreen },
    Settings: { screen: SettingsScreen },
    
    

  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home${focused ?
            '' : '-outline'
          }`;
        } else if (routeName === 'Staff') {
          iconName = `person${focused ?
            '' : '-outline'
          }`;
        } else if (routeName === 'Settings') {
          iconName = `settings${focused ?
            '' : '-outline'
          }`;
        } else if (routeName === 'Customer') {
          iconName = `body${focused ?
            '' : '-outline'
          }`;
        } else if (routeName === 'Package') {
          iconName = `folder${focused ?
            '' : '-outline'
          }`;
        }
        
        
        return <IconComponent
                 name={iconName}
                 size={25}
                 color={tintColor}
               />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#42f44b',
      inactiveTintColor: 'gray',
    },
  }
);
export default createAppContainer(App);