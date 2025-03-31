import { Text, View, StyleSheet, ScrollView } from "react-native";
import LandingPage from "@/components/home/LandingPage";
import PhonesCategories from "@/components/home/PhonesCategories";
import ExploreProduct from "@/components/home/ExploreProducts";
import Adds from "@/components/home/Adds";

export default function Index() {
   const airpodmax = require("@/assets/images/gadgets/airpodmax.jpg")
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <LandingPage heroText='24/7 online shopping, delivered any where you are!' imgUrl={airpodmax} />
       <View style={styles.content}>
          <PhonesCategories />
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
