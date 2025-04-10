import React from 'react';

import { View, StyleSheet, ScrollView } from "react-native";
import LandingPage from "@/components/home/LandingPage";
import ExploreProduct from "@/components/home/ExploreProducts";
import Adds from "@/components/home/Adds";
import ProductList from "@/components/products/Products";

export default function Products() {
  const watch = require("@/assets/images/gadgets/watch.jpg")
  return (
     <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.container}>
            <LandingPage heroText='Browser through all our product listing' imgUrl={watch}/>
           <View style={styles.content}>
              <ProductList />
              <ExploreProduct />
              <Adds />
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
