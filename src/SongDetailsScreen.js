import React from 'react';
import { StyleSheet, Text } from 'react-native';
import SafeAreaView from './SafeAreaView';

const SongDetailsScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.song}>Welcome to the machine</Text>
            <Text>Pink floyd</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      alignItems: 'center'
    },
    song: {
        fontSize: 24
    }
  });

export default SongDetailsScreen;
