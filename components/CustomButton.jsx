import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({handlePress, containerStyles, textStyles, isLoading, title = "Title"}) => {
  return (
    <TouchableOpacity 
        // className={`bg-secondary rounded-xl pt-2 pb-2 pl-4 pr-4 mt-4`}
        onPress={handlePress}
        activeOpacity={0.7} // opacity of the button once u pressed it
        className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
        disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButton