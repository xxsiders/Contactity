import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { RootStackParamList } from '../../types';
import Colors from '../constants/Colors';
import { useAuth } from '../hooks/useAuth';
import Login from '../screens/Login';
import NotFoundScreen from '../screens/NotFoundScreen';
import LinkingConfiguration from './LinkingConfiguration';
import LoadingView from '../components/LoadingView'

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
      </> :
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      }
    </Stack.Navigator>


}
