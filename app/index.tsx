import { Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

const Index = () => {
  return (
    <View 
        // style={styles.container}
        className="flex-1 items-center justify-center bg-white"
    >
      <Text className="text-3xl font-pblack">Aora App!</Text>
      <StatusBar style='auto' />
      <Link href={"/home"} style={{color: "blue"}}>Go to Profile</Link>
    </View>
  )
}

export default Index

// const styles = StyleSheet.create({
//     container: {
//         display: "flex",
//         backgroundColor: "#fff",
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center"
//     }
// })