import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UsersList from './components/UsersList';
const Stack = createNativeStackNavigator();

const App = ({ navigation }) => {
  console.log(store.getState());
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Users List' component={UsersList} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;