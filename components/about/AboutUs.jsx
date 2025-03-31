import { View, Text, StyleSheet } from "react-native";

import HeadingText from "../home/HeadingText";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function AboutUs() {
  return (
    <View style={StyleSheet.container}>
        <View style={styles.wrapper}>
        <View>
            <HeadingText 
                text='About Us' 
                heading='About eTrade.com online shopping'  
                Icon={<MaterialIcons name="production-quantity-limits" size={16} color="white" />}
            />
        </View>

        <View>
            <Text>Welcome to eTrade, your one-stop online shop for all your shopping needs! At eTrade, we believe in offering a seamless and enjoyable shopping experience, delivering quality products right to your doorstep with convenience and trust at the heart of everything we do.

            Founded with a passion for connecting shoppers with the best brands and products, eTrade is dedicated to providing a wide range of high-quality goods—from electronics and fashion to home essentials and everything in between. Our carefully curated selection is designed to cater to diverse tastes and needs, ensuring you find exactly what you’re looking for at competitive prices.
        </Text>
        </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        width: '80%',
        marginHorizontal: 60,
        marginBottom: 30
    }
})