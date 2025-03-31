import { View, Text, StyleSheet, FlatList } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Image } from 'expo-image';
import HeadingText from './HeadingText';
import { gadgetsLinks } from '@/data/data';
import { useState } from 'react';

export default function PhonesCategories() {
    const [data, setData] = useState(gadgetsLinks);

  return (
    <>
        <View style={styles.container}>
        <View>
            <HeadingText 
                text='Categories'
                heading='Browse by Category'
                Icon={<MaterialIcons name="category" size={16} color="white" />}
            />
        </View>

        {/* Category Images */}
        <View>
            <FlatList 
                data={data}
                keyExtractor={(item)=> item.id}
                horizontal={true}
                renderItem={({item})=>(
                    <View style={styles.imageContainer}>
                        <View style={styles.imageWrapper}>
                            <Image source={item.imageUrl} style={styles.images} contentFit="contain"/>
                            <Text style={styles.imagesText}>{item.name}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    imageContainer: {
       marginRight: 20
    },

    imageWrapper: {
        width: 120,
        height: 120,
        backgroundColor: 'white',
        marginBottom: 50,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 20,

         // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        // Shadow for Android
        elevation: 50,
    }, 

    images: {
        flex: 1,
        width: 100,
        height: 100
    },

    imagesText: {
        fontWeight: '600'
    }
})