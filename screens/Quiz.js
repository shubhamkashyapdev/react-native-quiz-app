import React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';

const Quiz = () => {
  return (
    <View style={styles.container}>
      <View style={styles.qnsContainer}>
        <Text style={styles.qns}>
          Choose The Most Beautiful Programming Langugage
        </Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity>
          <Text>Python</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>PHP</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Javascript</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>C++</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnGroup}>
        <TouchableOpacity>
          <Text>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    height: '100%',
  },
  qnsContainer: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  btnGroup: {
    paddingVertical: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Quiz;
