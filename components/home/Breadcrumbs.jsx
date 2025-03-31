import { View, Text, StyleSheet } from 'react-native'

export default function Breadcrumbs({number}) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{number}</Text>
      <Text style={styles.text}>Days</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: 50,
        height: 50,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 50,
        padding: 5
    },

    number: {
        fontWeight: 'bold',
        fontSize: 18,
    }
})