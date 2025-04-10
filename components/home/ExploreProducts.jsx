import React from 'react';

import { View, Text, StyleSheet, FlatList } from 'react-native'
import { Image } from 'expo-image';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { gadgets } from '@/data/data'
import { useState, useEffect } from 'react';
import Buttons from './Buttons';
import HeadingText from './HeadingText';
import Rate from './Rate';

export default function ExploreProduct() {
    const [data, setData] = useState(gadgets);

    const monitor = require('@/assets/images/gadgets/monitor.png')

    return (
        <>
        <View style={styles.container}>
        <HeadingText 
            text='Our Products' 
            heading='Explore our Products'  
            Icon={<MaterialIcons name="production-quantity-limits" size={16} color="white" />}
        />

        {/* Products */}
         {/* Category Images */}
                <View style={styles.productsContainer}>
                    <FlatList 
                        data={data}
                        keyExtractor={(item)=> item.id}
                        numColumns={3}
                        renderItem={
                            ({item})=>(
                                <View style={styles.card}>
                                    {/* Image heading */}
                                    <View style={styles.heading}>
                                        <Image source={item.imageUrl} style={styles.productImage} contentFit="contain"/>
                                    </View>
                                    
                                    {/* Text body */}
                                    <View style={styles.body}>
                                        <Text style={styles.productName}>{item.product}</Text>
                                        <Text style={styles.description}>{item.description}</Text>
                                        <View style={styles.textWrapper}>
                                            <View style={styles.priceWrapper}>
                                                <Text style={styles.price}>{item.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Text>
                                                <Text style={styles.oldPrice}>{item.oldPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Text>
                                            </View>
                                            <View>
                                                <Rate />
                                            </View>
                                        </View>
                                        <Text style={styles.star}>{item.star}</Text>
                                    </View>
                                </View>
                            )
                        }
                    />
                </View>

                <Buttons text='View all Products' path="/(tabs)/products"/>
        </View>
    </>
    )
}

const styles = StyleSheet.create({
    // Products
    productsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    card: {
        width: 300,
        marginRight: 30,
        marginBottom: 30,
    },

    heading: {
        width: 300,
        height: 300,
        padding: 20,
        backgroundColor: '#cecece', // official gray
        borderRadius: 10,
    },

    productImage: {
        width: 250,
        height: 250,
    },

    productName: {
        fontWeight: '700',
        marginTop: 10,
        marginBottom: 10
    },
    body :{
        paddingRight: 20,
        paddingBottom: 20
    },

    textWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
        marginTop: 5,
        marginBottom: 5
    },
    priceWrapper: {
        flexDirection: 'row',
        gap: 10
    },
    price: {
        fontWeight: '700',
    },
    oldPrice: {
        textDecorationLine: 'line-through',
        color: 'grey'
    },
})
