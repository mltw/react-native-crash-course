import { Image, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Redirect, router, Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../constants'
import CustomButton from '../components/CustomButton'

const Index = () => {
  return (
    // <View 
    //     // style={styles.container}
    //     className="flex-1 items-center justify-center bg-white"
    // >
    //   <Text className="text-3xl font-pblack">Aora App!</Text>
    //   <StatusBar style='auto' />
    //   {/* this /home will return point to the <Tabs.Screen name='home' /> in (tabs)/_layout.tsx */}
    //   <Link href={"/home"} style={{color: "blue"}}>Go to Home</Link>
    // </View>

    // below we can use bg-primary because we set the colors in tailwind.config.js dy
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView 
        // our content might be larger than what most devices support, so having this allows users to scroll up/down to fully view the content
        contentContainerStyle={{
          height: "100%"
        }}>
          <View className='w-full justify-center items-center min-h-[85vh] px-4'>
            <Image 
              source={images.logo}
              className="w-[130px] h-[84px]"
              resizeMode='contain'
            >
            </Image>
            <Image 
              source={images.cards}
              className="max-w-[380px] w-full h-[300px]"
              resizeMode='contain'
            >
            </Image>

            <View className='relative mt-5'>
              <Text className='text-3xl text-white font-bold text-center'>
                Discover Endless Possibilities with {' '}
                <Text className='text-secondary-200'>Aora</Text>
              </Text>

              <Image
                className='w-[136px] h-[15px] absolute -bottom-2 -ri\'
                resizeMode='contain'
              >

              </Image>
            </View>
            <Text className='text-sm font-pregular text-gray-100 mt-7 text-center'>
              Where creativity meets innovation:
              embark on a journey of limitless exploration with Aora
            </Text>

            <CustomButton
              title='Continue with Email'
              handlePress={() => router.push('/sign-in')}
              containerStyles="w-full mt-7"
              textStyles=""
              isLoading={false}
            >

            </CustomButton>
          </View>
      </ScrollView>

      {/* the phone's status bar - ie the time, battery percentage at the top of the screen de bar */}
      {/* but somehow this is not working on ios? */}
      <StatusBar backgroundColor='#161622' style='light'/>
    </SafeAreaView>
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