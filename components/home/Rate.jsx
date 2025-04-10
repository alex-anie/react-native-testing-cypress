import React from 'react';


import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Rate() {
    const [count, setCounter]= useState(0)

  return (
    <View style={styles.rateWrapper}>
        <TouchableOpacity testID="buttonRate" style={styles.button} onPress={() => setCounter(count + 1)}>
            <Text style={styles.buttonText}>Rate</Text>
        </TouchableOpacity>
        <Text testID="rateText">{count}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    rateWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        backgroundColor: '#1414ff', // official blue
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 5,
        fontSize: 16,
        fontWeight: '300',
        textAlign: 'center',
        marginRight: 10,
    }
})