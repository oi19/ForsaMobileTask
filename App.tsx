import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/navigation/rootNavigator';
import { QueryClient, QueryClientProvider, } from 'react-query'
import HomeScreen from './src/presentaion/screens/HomeScreen/HomeScreen';
import MainStack, { HomeTabs } from './src/navigation/main';

export default function App() {
  const routeNameRef = React.useRef();
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <StatusBar barStyle='light-content' backgroundColor='#072040' />
        <NavigationContainer
          ref={navigationRef}
          onReady={async () => { routeNameRef.current = await navigationRef.current?.getCurrentRoute().name }}
          onStateChange={async () => { }}
        >
          <HomeTabs />
        </NavigationContainer>
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
