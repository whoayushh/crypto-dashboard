import { Button, HStack, Icon, Stack, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";
import { MdFileUpload } from "react-icons/md";

const PortfolioSection = () => {
  return (
    <HStack
    justify="space-between"
    bg="white"
    borderRadius="xl"
    p="6"
    align={{
      base:"flex-start",
      xl:"center",
    }}
    flexDir={{
      base:"column",
      xl:"row",
    }}
    spacing={{
      base:4,
      xl:0,
    }}
    >
      <HStack
      spacing={{
        base:0,
        xl:16,
      }}
      align={{
        base:"flex-start",
        xl:"center"
      }}
      flexDir={{
        base:"column",
        xl:"row",
      }}
      >
      <Stack>
        <HStack color="black.80">
          <Text fontSize="sm">Total Portfolio Value</Text>
          <Icon
        as={IoIosInformationCircleOutline}></Icon>
        </HStack>
        <Text textStyle="h2" fontWeight="medium">₹112,223.45</Text>
        
      </Stack>

      <Stack>
        <HStack color="black.80">
          <Text fontSize="sm">Wallet Balances</Text>         
        </HStack>
        <HStack 
        spacing={2}
        align={{
          base:"flex-start",
          sm:"center"
        }}
        flexDir={{
          base:"column",
          sm:"row"
        }}
        >
        <HStack>
          <Text textStyle="h2" fontWeight="medium">22.341447</Text><Tag colorScheme="gray"> BTC</Tag>
        </HStack>
        <HStack>
          <Text textStyle="h2" fontWeight="medium">₹1300.00</Text><Tag colorScheme="gray">INR</Tag>
        </HStack>
        </HStack>
        
      </Stack>

      <HStack>
        <Button><Icon as={IoMdDownload}></Icon>Deposit</Button>
        <Button><Icon as={MdFileUpload}></Icon>WithDraw</Button>
      </HStack>
    </HStack>
    </HStack>
  )
}

export default PortfolioSection