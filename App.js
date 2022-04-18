import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BalaoDaSorte from './src/components/BalaoDaSorte';
import stylesA from './src/styles/StylesA';

export default function App() {
  return (
    <View style={stylesA.container}>
       <BalaoDaSorte/>
    </View>
  );
}



