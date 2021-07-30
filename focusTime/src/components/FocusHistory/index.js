import React, {useEffect} from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import styles from './styles';
import RoundedButton from '../RoundedButton';

const renderHistoryItem = ({item, index}) => {
  return (
    <View
      style={{
        marginBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
      }}>
      <Text
        style={item.status === 1 ? styles.statusComplete : styles.statusCancel}>
        {item.subject}
      </Text>
    </View>
  );
};

const FocusHistory = props => {
  const {focusHistory, onClear} = props;

  return (
    <SafeAreaView style={styles.historyContainer}>
      {!!focusHistory.length && (
        <>
          <Text style={styles.textStyle}>Things we have Focused on </Text>
          <View style={styles.historyListItems}>
            <FlatList
              data={focusHistory}
              renderItem={renderHistoryItem}
              keyExtractor={item => item.subject}
            />
          </View>
          <RoundedButton
            title="Clear"
            buttonContainerStyle={styles.buttonContainer}
            onPress={onClear}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default FocusHistory;
