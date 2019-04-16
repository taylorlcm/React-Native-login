 import Login from './login';
 import Dashboard from './dashboard';
 import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

  const AppNavigator = createStackNavigator({
     Login: { screen: Login,
      navigationOptions: () => ({
        header: null
          }),
          },
     Dashboard: { screen: Dashboard,
      navigationOptions: () => ({
        header: null
          }),
          },
   });

   const AppTest = createAppContainer(AppNavigator);


  export default AppTest;