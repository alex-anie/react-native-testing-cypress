import React from 'react';

import { View, StyleSheet, ScrollView } from "react-native";
import LandingPage from "@/components/home/LandingPage";
import AboutUs from "@/components/about/AboutUs";

export default function About() {
  const sure = require("@/assets/images/gadgets/sure.jpg")
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
         <View style={styles.container}>
           <LandingPage heroText='About eTrade' imgUrl={sure}/>
          <View style={styles.content}>
            <AboutUs />
          </View>
         </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
  },
  
container: {
  width: '100%',
},

content: {
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}
})