# TEXT-MARKDOWN

# React Native Apps with Cypress

![How to Use Select Commands in Cypress for Dropdown.png](/readme-img/thumb.png)

# OUTLINE

## Introduction

- Brief introduction to what is React Native and what it's used for
- Overview of Cypress and why choose Cypress as a testing tool.
- Aim and Object of the blog.

## Getting Started with Cypress in React Native

### Setting up a React Native Demo project.

- Here we spin off an already created react native, we are going to be using for the project.

you can download the [Github](https://github.com/alex-anie/eTrade) repo here or clone it below. 

```bash
git clone https://github.com/alex-anie/eTrade.git
```

Next, install node_modules

```bash
npm install
```

Install the node_modules, for your project.

```bash
npm start
```

Start the project server with npm start. This should launch the developement server. To view the project on the browser, make sure click on the command line where the server port is running, and press the W key on your keyword. The command line displays various commands and keyboard short cuts for running and testing React Native app via the CLI. 

![image.png](/readme-img/image.png)

## Installing Cypress as a dev dependency

- Here, we are installing Cypress as a dev dependency on an already existing react native project. This will make it possible to perform tests on it.

```bash
npm i -D cypress
```

next you 

```bash
npx cypress open
```

to initialize the project.

## Setting a global baseUrl in Cypress

Here we specify the baseUrl that the app is running on. This makes it easy for Cypress to know where to start listening for changes within the App. 

```jsx
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
     "baseUrl": "http://localhost:8081/", 👈 // This is the base url
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },

});

```

## Writing your first Cypress test in React Native

- A brief introduction to End-to-end testing and why it is needed here for the example.

### Setting up test files

- Here, explain how to run basic tests in React Native, such as Hello World, and check if a particular content exists on the page.

```jsx
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
   // ... some CSS code styles exists here
})

```

```jsx
//CYPRESS

/// <reference types="cypress" />
describe('select the hero text from the hero overlay image', ()=>{
  it('Select and assert if the hero text exits', () => {
    cy.visit('/')
    cy.contains('24/7 online shopping, delivered any where you are!')
      .should('be.visible')
  })
})
```

### The testID props in React Native

- Here, explain how to use the `testId` props in React native for uniquely retrieving the component for testing.

```jsx
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

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
   // ... some css code styles here.
})
```

```jsx
// CYPRESS

/// <reference types="cypress" />

describe('click the hero button', ()=>{
    it('interact with the hero button and make a click', ()=>{
        cy.visit('/')
        cy.get('[data-testid=button]').click().should('be.visible')
    })
})
```

## The Validating state in React Native

- Here, we explain how to use cypress to check when a state is updated, for example if a button is clicked.

```jsx
import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
export default function Rate() {
    const [count, setCounter]= useState(0)

  return (
    <View style={styles.rateWrapper}>
        <TouchableOpacity testID="buttonRate" style={styles.button} onPress={() => setCounter(count + 1)}>
            <Text style={styles.buttonText}>Rate</Text>
        </TouchableOpacity>
        <Text testID="rateText">{count}</Text>
    </View>
  )
}
```

Cypress

```jsx
/// <reference types="cypress" />

  describe('Rate Component Test', () => {
    it('increments the count when the Rate button is clicked', () => {
      cy.visit('/'); 

      cy.wait(2000)
      
      cy.get('[data-testid="buttonRate"]').first().click();

      cy.wait(2000)
      cy.get('[data-testid="rateText"]').first().should('have.text', '1');
    });
  });
 
```

### Running test in Headless mode

- Here, we show how to run tests in Headless mode, as another alternative of running Cypress tests in React Native.

## Advanced Testing Techniques

### Testing Network Response in React Native

- Here, we explain how to test API response in a React Native app, and how it renders on a FlatList.

```jsx
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
   // ... some stylesheet code exist here
});

```

Cypress

```jsx
/// <reference types="cypress" />

describe('Product List Network Request', () => {
    it('should make a successful API request and render the data', () => {
      cy.intercept('GET', 'https://fakestoreapi.com/products').as('getProducts');
      
      cy.visit('/products'); // Assuming this loads the React Native app
      cy.wait('@getProducts').then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
        expect(interception.response.body).to.have.length.above(0); // API returns data
  
        // Check if data is rendered in the FlatList
        cy.get('[data-testid=fakedata]').should('exist');
        cy.get('[data-testid=fakedata]').should('have.length', interception.response.body.length);
      });
    });
  });
  
```

### Testing Loader Component in React Native

- Here, we explain how to run a test on the Leader component (Spinners) in React Native.

```jsx
import { useState, useEffect } from "react";
// ... some code here

export default function ProductList() {
 // ... some code here

  return (
    <>
      <View style={styles.container}>
         {/*
               ... some code here
         */}
          
       👉 <ActivityIndicator size="large" color="#0000ff" testID="loader" /> // Loading state
        
             {/*
                     ... some code here
               */}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
   // ... some stylesheet code exist here
});

```

Cypress

```jsx
/// <reference types="cypress" />

describe('Loader Component Test', () => {
    it('should show the loader while fetching data', () => {
      cy.intercept('GET', 'https://fakestoreapi.com/products', (req) => {
        req.on('response', (res) => {
          res.setDelay(2000); // Simulate delay for loader
        });
      }).as('getProducts');
      
      cy.visit('/products');
      
      // Loader should be visible while data is being fetched
      cy.get('[data-testid=loader]').should('be.visible');
  
      cy.wait('@getProducts');
  
      // Once data is fetched, the loader should disappear
      cy.get('[data-testid=loader]').should('not.exist');
    });
  });
  
```

### Stubbing a Network Request

- Here, we explain how to stub network requests in React Native.

```jsx
/// <reference types="cypress" />

describe('Stubbing Network Request', () => {
    it('should stub network request with a custom response', () => {
        cy.intercept('GET', 'https://fakestoreapi.com/products', {
        statusCode: 200,
        body: [
            {
            id: 1,
            title: 'Stubbed Product',
            price: 20.0,
            description: 'This is a stubbed product.',
            category: 'electronics',
            image: 'https://example.com/product1.jpg',
            rating: { rate: 5, count: 100 }
            }
        ],
        }).as('getProducts');

      cy.visit('/products');
      cy.wait('@getProducts');
  
      // Check if stubbed data is rendered
      cy.contains('Stubbed Product').should('exist');
      cy.contains('This is a stubbed product.').should('exist');
      cy.get('[data-testid=fakedata]').should('have.length', 1) // Only 1 stubbed product
    });
  });
  
```

### Stubbing and fixture.

- Here we explain how to implement Cypress Fixtures with React Native. For complete structural outlook of the API, check the endpoint here. [fakestoreapi.com/products](https://fakestoreapi.com/products)

```jsx
[
    {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    },
    {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": 22.3,
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "rating": {
        "rate": 4.1,
        "count": 259
      }
    },
    {
      "id": 3,
      "title": "Mens Cotton Jacket",
      "price": 55.99,
      "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "rating": {
        "rate": 4.7,
        "count": 500
      }
    },
   // ... some code are commented here
    {
      "id": 20,
      "title": "DANVOUY Womens T Shirt Casual Cotton Short",
      "price": 12.99,
      "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
      "category": "women's clothing",
      "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      "rating": {
        "rate": 3.6,
        "count": 145
      }
    }
  ]
```

Cypress

```
/// <reference types="cypress" />

describe('Subbing with Fixtures', () => {
    it('should load data from fixture instead of making an API call', () => {
      cy.fixture('products').then((products) => {
        cy.intercept('GET', 'https://fakestoreapi.com/products', { body: products }).as('getProducts');
        
        cy.visit('/products');
        cy.wait('@getProducts');
  
        // Ensure data from the fixture is rendered
        cy.get('[data-testid=fakedata]').should('exist');
        cy.get('[data-testid=fakedata]').should('have.length', products.length);
      });
    });
  });

```

## Conclusion

## `cypress open`

You can open Cypress from your **project root** using the commands, depending on the package manager. In this case, we are using `npm`. You can learn more about another package manager [here](https://docs.cypress.io/app/get-started/open-the-app#cypress-open)

```bash
npx cypress open
```

After a moment, the Cypress Launchpad will open.

## `lambdaTest Run`

You can run cypress via Lambdatest web automation via npm. Learn how to setup lambdaTest and Cypress [here](https://www.lambdatest.com/support/docs/getting-started-with-cypress-testing/#/prerequisites)

```bash
lambdatest-cypress run
```

This will run Cypress on LambdaTest Web Automation.