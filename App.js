import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => (
  <View style={styles.container}>
    <Text style={styles.title}>HMR Reconnect Repro</Text>
    <Text style={styles.marker}>MARKER: BEFORE</Text>
    <Text>Change the marker, then stop and restart Metro.</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 24, backgroundColor: '#ffffff' },
  title: { fontSize: 26, fontWeight: '600' },
  marker: { fontSize: 30, color: '#153f8a' },
});

export default App;
