import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  Button
} from 'react-native';

const DetailScreen = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
          <Text style={styles.text}>Details Screen</Text>
          <Button title={'Settings'} onPress={ () => navigation.navigate('Settings') } />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    marginBottom: 24
  }
});

export default DetailScreen;
