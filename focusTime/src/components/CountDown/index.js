import React, {useState, useEffect, useRef} from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const CountDown = props => {
  const {minutes = 20, isPaused = true, onProgress, onEnd} = props;

  const interval = useRef(null);

  const minutesToMiliSec = min => min * 1000 * 60;

  const formatTime = time => (time < 10 ? `0${time}` : time);

  const countDown = () => {
    setMillis(time => {
      if (time === 0) {
        clearInterval(interval.current);
        onEnd();
        return time;
      }

      const timeLeft = time - 1000;
      onProgress(timeLeft / minutesToMiliSec(minutes));
      return timeLeft;
    });
  };

  useEffect(() => {
    if (isPaused) {
      return;
    }
    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current);
  }, [isPaused]);

  const [millis, setMillis] = useState(null);

  useEffect(() => {
    setMillis(minutesToMiliSec(minutes));
  }, [minutes]);

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const sec = Math.floor(millis / 1000) % 60;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {formatTime(minute)} : {formatTime(sec)}
      </Text>
    </View>
  );
};

export default CountDown;
