import { Button, Card, Flex, HStack, Icon, Input, InputGroup, InputLeftElement, Tag } from '@chakra-ui/react'
import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { AiOutlineCloudDownload } from "react-icons/ai";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import TransactionTable from './components/TransactionTable';
import { FaSearch } from "react-icons/fa";

const TransactionsPage = () => {
    const tabs=[
        {
            name:"All",
            count:349,
        },
        {
            name:"Deposit",
            count:114,
        },
        {
            name:"Withdraw",
            count:55,
        },
        {
            name:"Trade",
            count:55,
        },
    ];
  return (
    <DashboardLayout title="Transactions">
        
        <Flex justify="end" mt="6" mb="3">
            <Button leftIcon={<Icon as={AiOutlineCloudDownload}/>}>Export CV</Button>
        </Flex>
        <Card borderRadius="1rem ">
        <Tabs>
            <TabList pt="4" display="flex" justifyContent="space-between" w="full">
                <HStack>
                {tabs.map((tab)=>(
                    <Tab key={tab.name} display="flex" gap="2" pb="4">
                        {tab.name}
                        <Tag colorScheme="gray" borderRadius="full">
                            {tab.count}
                        </Tag>
                    </Tab>
                ))}
                </HStack>
                <InputGroup maxW="200px"  pr="6 ">
                    <InputLeftElement pointerEvents='none'>
                    <Icon as={FaSearch }/>
                    </InputLeftElement>
                    <Input type='tel' placeholder='Search...' />
                </InputGroup>
            </TabList>

            <TabPanels>
                <TabPanel>
                <TransactionTable  />
                </TabPanel>
                <TabPanel>
                <TransactionTable  />
                </TabPanel>
                <TabPanel>
                <TransactionTable  />
                </TabPanel>
            </TabPanels>
            </Tabs>
        </Card>
    </DashboardLayout>
  )
}

export default TransactionsPage