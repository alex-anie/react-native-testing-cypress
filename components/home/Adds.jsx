import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Breadcrumbs from './Breadcrumbs';
import Buttons from './Buttons';
import { Image } from 'expo-image';
import HeadingText from './HeadingText';

export default function Adds() {
    const airdrop = require('@/assets/images/gadgets/airdrop.png')
  return (
      <View style={styles.wrapper}>

            {/* Text */}
            <View style={styles.ExploreProductText}>
                <HeadingText 
                    text='Your Music'
                    heading='Enhance Your Music Experience'
                    Icon={<FontAwesome name="music" size={16} color="white" />}
                />

                 {/* Breadcrumbs */}
                <View style={styles.breadcrumbs}>
                    <Breadcrumbs number='15' />
                    <Breadcrumbs number='10' />
                    <Breadcrumbs number='56' />
                    <Breadcrumbs number='64' />
                </View>

                {/* Buttons */}
                <View style={styles.buttonWrapper}>
                    <Buttons text='Check it out' path="/(tabs)/products"/>
                </View>

            </View>

            {/* Image */}
            <View>
                <Image source={airdrop} style={styles.image} contentFit="contain"/>
            </View>
        </View>
)
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#cecece',
        width: '70%',
        height: 400,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 40,
        borderRadius: 10,
        paddingHorizontal: 30
    },

    categoryWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },

    ExploreProductText: {
        marginBottom: 30
    },

    iconBg:{
        backgroundColor: 'rebeccapurple',
        width: 24,
        height: 24,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 50
    },

    categoryText: {
        fontSize: 20,
        color: 'rebeccapurple',
        marginLeft: 5
    },
    
    categoryHeading: {
        fontSize: 30,
        fontWeight: '700'
    },

    breadcrumbs: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 30
    },

    // Image
    image: {
        width: 350,
        height: 350
    }
})