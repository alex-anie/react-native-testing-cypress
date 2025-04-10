import React from 'react';

import { View, Text, StyleSheet} from 'react-native';
import { Link } from 'expo-router';

export default function Buttons({text, path}) {
  return (
    <View style={styles.linkContainer}>
            <Link href={path} style={styles.linkText}>
                <Text>{text}</Text>
            </Link>
    </View>
  )
}

const styles = StyleSheet.create({
    linkContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50
    },

    linkText: {
        color: 'white',
        backgroundColor: '#1414ff', // official blue
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        fontSize: 16,
        fontWeight: '300',
        textAlign: 'center'
    }
})