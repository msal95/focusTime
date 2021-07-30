import React, {useState} from 'react';
import {SafeAreaView, Text, View, Vibration, Platform} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import KeepAwake from 'react-native-keep-awake';

import CountDown from '../../components/CountDown';
import RoundedButton from '../../components/RoundedButton';
import Timing from '../../components/Timing';
import styles from './styles';
import {COLORS} from '../../utils/AppStyle';

const Timer = props => {
  const {focusSubject, onTimerEnd, clearSubject} = props;

  const [isStarted, setIsStarted] = useState(false);
  const [minutes, setMinutes] = useState(0.1);
  const [progress, setProgress] = useState(1);

  KeepAwake.activate();

  const onProgress = progress => {
    setProgress(progress);
  };

  const changeTime = min => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
  };

  const onEnd = () => {
    setMinutes(0.1);
    setProgress(1);
    setIsStarted(false);
    viberate();
    onTimerEnd();
  };

  const viberate = () => {
    if (Platform.OS === 'ios') {
      const interval = setInterval(() => Vibration.vibrate(), 10000);
      setTimeout(() => clearInterval(interval), 10000);
    } else {
      Vibration.vibrate(2000);
    }
  };

  const renderButton = () => {
    if (isStarted) {
      return (
        <RoundedButton title="Pause" onPress={() => setIsStarted(false)} />
      );
    } else {
      return <RoundedButton title="Start" onPress={() => setIsStarted(true)} />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <CountDown
        isPaused={!isStarted}
        onProgress={onProgress}
        minutes={minutes}
        onEnd={onEnd}
      />

      <Text style={styles.title}>Focusing On......</Text>
      <Text style={styles.task}>{focusSubject}</Text>

      <Timing onChangeTime={changeTime} />

      <View style={styles.progressBarContainer}>
        <ProgressBar
          progress={progress}
          color={COLORS.lightBlue}
          style={styles.progressBarStyle}
        />
      </View>

      {renderButton()}

      <View style={styles.cancelButton}>
        <RoundedButton
          title="-"
          buttonContainerStyle={styles.buttonContainer}
          onPress={() => clearSubject(null)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Timer;
