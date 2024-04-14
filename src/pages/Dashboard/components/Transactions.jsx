import React, { Fragment } from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { Button, Divider, Flex, Grid, Icon, Stack, Text } from '@chakra-ui/react'
import { FaIndianRupeeSign } from "react-icons/fa6";
import { MdCurrencyBitcoin } from "react-icons/md";

const Transactions = () => {
  const transactions=
  [
    {
      id:"1",
      icon:FaIndianRupeeSign,
      text:"INR Deposit",
      amount:"-12.485671 BTC",
      timestamp:"2022-06-09 7:06 PM",
    },
    {
      id:"2",
      icon:MdCurrencyBitcoin,
      text:"BTC Sell",
      amount:"+ $81,123.10",
      timestamp:"2022-06-09 7:06 PM",
    },
    {
      id:"3",
      icon:FaIndianRupeeSign,
      text:"INR Deposit",
      amount:"+ $81,123.10",
      timestamp:"2022-06-09 7:06 PM",
    },
    
  ]
  return (
    
    <CustomCard h="full">
        <Text mb="6" fontSize="sm" color="back.80">
            Recent Transactions 
        </Text>
        <Stack spacing ={4}>
          {transactions.map((transaction,i )=>(
            <Fragment key={transaction.id}>
              {i!==0 && <Divider />} 
              <Flex  gap="4">
              <Grid
              placeItems="center"
              bg="black.5"
              boxSize={10}
              borderRadius="full">
                <Icon as={transaction.icon}/>
              </Grid>
              <Flex justify="space-between" w="full">
                <Stack spacing={0}>
                  <Text textStyle="h6"  >
                    {transaction.text}
                  </Text>
                  <Text fontSoze="sm" color="black.80">
                    {transaction.timestamp}
                  </Text>
                </Stack>
                <Text textStyle="h6"  >
                    {transaction.amount}
                </Text>

              </Flex>

            </Flex>
            </Fragment>
          ))}
        </Stack>
        <Button w="full" mt="6" colorscheme="gray"> View All</Button>
    </CustomCard>
    
    
  )
}

export default Transactions