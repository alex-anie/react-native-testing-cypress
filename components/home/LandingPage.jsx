import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
// import { Image } from "expo-image";


export default function LandingPage({heroText, imgUrl}) {

return (
    <SafeAreaProvider>
        <SafeAreaView>
            <View style={styles.container}  >
                <ImageBackground source={imgUrl} style={styles.imageBg} resizeMode="cover">
                    <View style={styles.overlayContent}>
                        <Text style={styles.overlayText}>{heroText}</Text>
                        <TouchableOpacity testID="button" style={styles.button} onPress={() => alert('Button Pressed!')}>
                            <Text style={styles.buttonText}>Get Started</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        </SafeAreaView>
    </SafeAreaProvider>
    
)
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: 'blue'
    },
    imageBg: {
        width: '100%',
        height: 500,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    overlayContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        width: '100%',
        paddingVertical: 50,
    },
    overlayText: {
        fontSize: 30,
        color: '#fff',
        fontWeight: '200',
        textAlign: 'center',
        marginBottom: 20,
      },
      button: {
        backgroundColor: '#1414ff',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center'
      },
      buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
})