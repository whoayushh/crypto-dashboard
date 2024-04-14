import { Box, Button, Container, Flex, HStack, Heading, Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
 
 const TopNav = ({title, onOpen}) => {
   return (
     <Box px="4" bg="white">
        <HStack maxW="70rem"  h="16" justify="space-between" px="32" mx="auto">
        <Icon 
        as={FaBars} 
        onClick={onOpen}
        display={{
          base:" ",
          lg:"none"
        }}
        />
        <Heading fontWeight="medium" fontSize="28px">{title}</Heading>
        <Menu>
            <MenuButton as={Button} >
                <Icon as={FaUserCircle} fontSize="28px" />
            </MenuButton>
            <MenuList>
                <MenuItem>Log Out</MenuItem>
                <MenuItem>Support</MenuItem>
                
            </MenuList>
         </Menu>
     
 </HStack>
     </Box>
   )
 }
 
 export default TopNav