import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';

import RoundedButton from '../../components/RoundedButton';
import styles from './styles';

const Focus = props => {
  const {addSubject} = props;

  const [subject, setSubject] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on?? </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputField}
            onChangeText={text => setSubject(text)}
            value={subject}
          />
          <RoundedButton
            title="+"
            buttonContainerStyle={styles.buttonContainer}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Focus;
