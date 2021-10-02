import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';

const Result = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Result</Text>
      </View>
      <View>
        <Image
          style={styles.banner}
          source={{
            uri: 'https://cdni.iconscout.com/illustration/premium/thumb/q-and-a-service-3678714-3098907.png',
          }}
          resizeMode="contain"
        />
      </View>
      <View>
        <TouchableOpacity>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 50,
  },
  banner: {
    height: 300,
    width: 300,
  },
});

export default Result;
