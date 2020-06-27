import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  Button
} from 'react-native';

const SettingScreen = ({navigation}) => {
  const [text, setText] = useState('');

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
          <Text>Settings Screen</Text>
          <TextInput placeholder="Screen Title" style={styles.input} onChangeText={setText} />
          <Button title={'Change Title'} onPress={ () => navigation.setOptions({title: text}) } />
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
  input: {
    width: 250,
    height: 60,
    padding: 8,
    fontSize: 16
  }
});

export default SettingScreen;
