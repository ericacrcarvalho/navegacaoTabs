import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabsNavigation from './src/navigation/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      <TabsNavigation/>
    </NavigationContainer>
  );
}
export default App;