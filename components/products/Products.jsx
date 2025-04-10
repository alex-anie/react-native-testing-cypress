import React from 'react';


import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image } from "expo-image";
import HeadingText from "../home/HeadingText";

export default function ProductList() {
  const [fakeData, setFakeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the FakeStore API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        setFakeData(result);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data. Please try again.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View>
          <HeadingText
            text="Categories"
            heading="Browse by Category"
            Icon={<MaterialIcons name="category" size={16} color="white" />}
          />
        </View>

        {/* Fetching from FakeStore API */}
        <View>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" testID="loader" /> // Loading state
          ) : error ? (
            <Text style={styles.errorText}>{error}</Text> // Error state
          ) : (
            <FlatList
              data={fakeData}
              keyExtractor={(item) => item.id.toString()}
              numColumns={3}
              ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
              renderItem={({ item }) => (
                <View style={styles.card}  testID="fakedata">
                  {/* Image heading */}
                  <View style={styles.heading}>
                    <Image
                      source={item.image}
                      style={styles.productImage}
                      contentFit="contain"
                    />
                  </View>

                  {/* Text body */}
                  <View style={styles.body}>
                    <Text style={styles.productName}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <View style={styles.textWrapper}>
                      <Text style={styles.price}>
                        {item.price}
                      </Text>
                      <Text style={styles.oldPrice}>
                        {item.price * item.rating.rate}
                      </Text>
                    </View>
                    <Text style={styles.category}>{item.category}</Text>
                  </View>
                </View>
              )}
            />
          )}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: '#cecece',
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
    justifyContent: 'flex-start',
    gap: 10,
    marginTop: 5,
    marginBottom: 5
},
price: {
    fontWeight: '700',
},
oldPrice: {
    textDecorationLine: 'line-through',
    color: 'grey'
},
  errorText: {
    color: "red",
    fontWeight: "bold",
  },

  category: {
    backgroundColor: '#1414ff',
    color: 'white',
    borderRadius: 10,
    paddingVertical: 5,
    paddingLeft: 10
  }
});
