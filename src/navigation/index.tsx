import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { RootStackParamList } from '../../types';
import LoadingView from '../components/LoadingView';
import Colors from '../constants/Colors';
import { useAuth } from '../hooks/useAuth';
import Contacts from '../screens/Contacts';
import Login from '../screens/Login';
import NotFoundScreen from '../screens/NotFoundScreen';
import Register from '../screens/Register';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? Colors.dark : Colors.light}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  const { isLoggedIn, loading }: any = useAuth()
  return loading ? <LoadingView /> :
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isLoggedIn ? <>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </> :
        <>
          <Stack.Screen name="Contacts" component={Contacts} />
          <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
        </>
      }
    </Stack.Navigator>


}
