import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const RoundedButton = props => {
  const {buttonContainerStyle, textStyle, title, onPress} = props;
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, buttonContainerStyle]}
      onPress={onPress}
      activeOpacity={0.6}>
      <Text style={[styles.textStyle, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;
