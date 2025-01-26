import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { router } from 'expo-router'

const thankyou = () => {
  return (
    <GestureHandlerRootView>
        <View className='w-full h-full items-center justify-center '>
            <Text
                className='text-3xl font-[Sora-SemiBold] text-center mx-10 mb-5'
            >Thank You For Your Order</Text>

        
        <TouchableOpacity
            className='bg-app_gold_color w-[80%] rounded-2xl items-center justify-center mt-3 px-4 py-5'
            onPress={()=> router.push("/(tabs)/home")}
        >
            <Text
                className='text-xl color-white font-[Sora-Regular] '
            >
            Return to Home Page</Text>

        </TouchableOpacity>
        </View>
      </GestureHandlerRootView>
  )
}

export default thankyou