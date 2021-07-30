import React, {useState, useEffect, useRef} from 'react';
import {View, Text} from 'react-native';

import RoundedButton from '../RoundedButton';
import styles from './styles';

const Timing = props => {
  const {onChangeTime} = props;

  return (
    <View style={styles.container}>
      <RoundedButton
        title="10"
        buttonContainerStyle={styles.buttonContainer}
        onPress={() => onChangeTime(10)}
      />
      <RoundedButton
        title="15"
        buttonContainerStyle={styles.buttonContainer}
        onPress={() => onChangeTime(15)}
      />
      <RoundedButton
        title="20"
        buttonContainerStyle={styles.buttonContainer}
        onPress={() => onChangeTime(20)}
      />
    </View>
  );
};

export default Timing;
