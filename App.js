import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import SelectionScreen from './src/screens/SelectionScreen';

import { LogBox } from 'react-native';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Selection: SelectionScreen,
  },
  {
    initialRouteName: 'Selection',
    defaultNavigationOptions: {
      title: 'Tender'
    }
  }
);

export default createAppContainer(navigator);