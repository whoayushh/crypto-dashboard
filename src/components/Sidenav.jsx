import { Box, HStack, Heading, Icon, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import { MdDashboard } from "react-icons/md";
import {  FaExchangeAlt } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import {Link, useLocation} from "react-router-dom";
import { BrowserRouter as Router, Route,  } from 'react-router-dom';



const Sidenav = () => {
  const location = useLocation();

  console.log(location);

  const isActiveLink = (link) => {
    return location.pathname === link;
  };
  const navLinks = [
    {
      icon:MdDashboard,
      text:"Dashboard",
      link:"/"
    },
    {
      icon:FaExchangeAlt,
      text:"Transactions",
      link:"/transactions"
    }
  ];
  return (
    
    
    <Stack 
    
     w={{
      base:"full",
      lg:"16rem",
     }} 
     h="100vh" 
     justify="space-between"
     boxShadow={{
      base:"none",
      lg:"lg"
     }}
     bg="white"
      
     >
      
      <Box>
      <Heading textAlign="center" fontSize="20px" as="h1" pt="56px">@whoayushh</Heading>
      
      <Box  mt="6" mx="3">
        {navLinks.map((nav)=>(
        <Link to={nav.link} key={nav.text}>
        <HStack borderRadius="10px"
            py="3"
            px="4"
            bg={isActiveLink(nav.link) ? "#F3F3F7" : "transparent"}
            color={isActiveLink(nav.link) ? "#171717" : "#797E82"}
            _hover={{
              bg: "#F3F3F7",
              color: "#171717",
            }}
        >
          <Icon as={nav.icon}/>
          <Text fontSize="14px" fontWeight="medium">{nav.text}</Text>
          
        </HStack>
        </Link>
      ))}
      </Box>
      </Box>
      <Box mt="6" mx="3" mb="4">
      <Link to="/support">
      <HStack px="4" py="3"
       key="Support"
        _hover={{
          bg:"#F3F3F7",
          color:"black" ,
        }}
        bg={isActiveLink("/support") ? "#F3F3F7" : "transparent"}
        color={isActiveLink("/support") ? "#171717" : "#797E82"}
        
        borderRadius="10px"
        >
          <Icon as={BiSupport}/>
          <Text fontSize="14px" fontWeight="medium">Support</Text>
          
        </HStack>
      </Link>

      </Box>

      

      
    </Stack>
  );
};

export default Sidenav;