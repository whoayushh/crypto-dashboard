import React from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { Button, Flex, HStack, Icon, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import { BsArrowUpRight } from "react-icons/bs";
import { FaBlackTie, FaCirclePlus } from "react-icons/fa6";
import { FaMinusCircle } from "react-icons/fa";

const PriceSection = () => {
    const timestamps=["7:15 PM","7:55 PM","8:55 PM","9:55 PM","10:55 PM"];

  return (
    <CustomCard>
       <Flex justifyContent="space-between" align="start">
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
          <Text textStyle="h2" fontWeight="medium">22.341447</Text>
          <HStack fontWeight="medium" color="green.500">
            <Icon as={BsArrowUpRight}></Icon>
          <Text fontSize="sm " fontWeight="medium">22%</Text>
          </HStack>
        </HStack>
        </HStack>
      </Stack>

      <HStack>
        <Button leftIcon={<Icon as={FaCirclePlus}/>}>Buy</Button>
        <Button leftIcon={<Icon as={FaMinusCircle}></Icon>}>Sell</Button>
      </HStack>
       </Flex>
       <Tabs variant='soft-rounded' >
        <Flex justify="end" > 
        <TabList bg="black.5" p="3px">
            {
                ["1H","1d","1W","1M"].map((tab)=>(
                    <Tab _selected={{
                        bg:"white",
                    }} key={tab} fontSize="sm" p="6px" borderRadius="4">{tab }</Tab>
                ))
            }
            
        </TabList>
        </Flex>
        <TabPanels>
            <TabPanel> 
            <Image 
            w="100%"
            src="/graph.svg"
            mt="3rem"
            />
            <HStack justify="space-between">
                {
                    timestamps.map((timestamp)=>(
                        <Text key={timestamp} fontSize="sm" color="black.80">
                            {timestamp}
                        </Text>
                    ))
                }

            </HStack>
            </TabPanel>
            <TabPanel>
                <p>two!</p>
            </TabPanel>
        </TabPanels>
        </Tabs>
        
       

    </CustomCard>
  )
}

export default PriceSection 