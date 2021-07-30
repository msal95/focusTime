import React, {useState, useEffect} from 'react';
import {View, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import FocusHistory from '../../components/FocusHistory';
import Focus from '../Focus';
import Timer from '../Timer';
import {STATUS} from '../../utils/constants';
import styles from './styles';

const HomeScreen = props => {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);

  const addFocusHistoryWithStatus = (subject, status) => {
    setFocusHistory([...focusHistory, {subject, status}]);
  };

  const onClear = () => {
    setFocusHistory([]);
  };

  const saveFocusHistory = async () => {
    try {
      await AsyncStorage.setItem('focusHistory', JSON.stringify(focusHistory));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    saveFocusHistory();
  }, [focusHistory]);

  const loadFocusHistory = async () => {
    try {
      const history = await AsyncStorage.getItem('focusHistory');
      if (history && JSON.parse(history).length) {
        setFocusHistory(JSON.parse(history));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadFocusHistory();
  }, []);

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => {
            addFocusHistoryWithStatus(focusSubject, STATUS.COMPLETED);
            setFocusSubject(null);
          }}
          clearSubject={() => {
            addFocusHistoryWithStatus(focusSubject, STATUS.CANCELLED);
            setFocusSubject(null);
          }}
        />
      ) : (
        <>
          <Focus addSubject={setFocusSubject} />
          <FocusHistory
            focusHistory={focusHistory}
            setFocusHistory={setFocusHistory}
            onClear={onClear}
          />
        </>
      )}
    </View>
  );
};

export default HomeScreen;
