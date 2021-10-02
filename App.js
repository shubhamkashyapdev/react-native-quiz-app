import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const App = () => {
  return (
    <View style={styles.container}>
      <Text>This is Quizzier</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 50,
  },
});

export default App;
