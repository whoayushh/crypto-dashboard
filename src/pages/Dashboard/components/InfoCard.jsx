import React from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { Tag, Text } from '@chakra-ui/react'

const InfoCard = ({imgUrl,text,tagText,inverted}) => {
  return (
    <CustomCard 
    bgImage={imgUrl} 
    bgSize="cover"
    bgColor={inverted?"p.purple":"white"}
    bgRepeat="no-repeat"
    >
        <Tag 
        bg={inverted?"white":"p.purple "}
        color={inverted?"p.purle":"white"}
        borderRadius="full"
        > 
        {tagText} 
        </Tag>
        <Text mt="4" fontWeight="medium" textStyle="h5">
            {text}
        </Text>
    </CustomCard>
  )
} 

export default InfoCard