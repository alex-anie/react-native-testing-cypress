import React from 'react';


import { View, Text, StyleSheet } from 'react-native'

export default function HeadingText({text, heading, Icon}) {
  return (
    <View style={styles.ExploreProductText}>
    {/* Explore Heading Text */}
        <View style={styles.categoryWrapper}>
            <View style={styles.iconBg}>
                {Icon}
            </View> 
            <Text style={styles.categoryText}>{text}</Text>
        </View>
        <Text style={styles.categoryHeading}>{heading}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    categoryWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 50
    },

    ExploreProductText: {
        marginBottom: 30
    },

    iconBg:{
        backgroundColor: '#1414ff',
        width: 24,
        height: 24,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 50
    },

    categoryText: {
        fontSize: 20,
        color: '#1414ff',
        marginLeft: 5
    },
    
    categoryHeading: {
        fontSize: 30,
        fontWeight: '700'
    },
})