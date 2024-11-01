import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

const Index = () => {
  return (
    <View style={styles.container}>
      <Text>Aora App!</Text>
      <StatusBar style='auto' />
      <Link href={"/profile"} style={{color: "blue"}}>Go to Profile</Link>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})