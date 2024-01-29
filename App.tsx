import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/navigation/rootNavigator';
import { QueryClient, QueryClientProvider, } from 'react-query'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Splash from './src/presentaion/screens/Splash';

export default function App() {
  const routeNameRef = React.useRef();
  const queryClient = new QueryClient()

  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor='#072040' />
      <NavigationContainer
        ref={navigationRef}
        onReady={async () => { routeNameRef.current = await navigationRef.current?.getCurrentRoute().name }}
        onStateChange={async () => { }}>
        <QueryClientProvider client={queryClient}>
          <View style={{ flex: 1, backgroundColor: 'red', width: '100%' }}>
            <Splash />
          </View>
        </QueryClientProvider>
      </NavigationContainer>
    </SafeAreaProvider>

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
