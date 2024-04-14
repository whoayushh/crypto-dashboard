import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import SupportCard from './components/SupportCard'
import ContactCard from './components/ContactCard'
import { MdMail } from "react-icons/md";
import { BiSolidMessageRounded } from "react-icons/bi";
import InfoCard from '../Dashboard/components/InfoCard';
import { Stack } from '@chakra-ui/react';

const Support = () => {
  return (
    <DashboardLayout title="Support">
      <Stack spacing="5rem">
      <SupportCard 
      leftComponent={<ContactCard/>} 
      icon={MdMail}
      
      title="Contact Us"
      text="Have a question or just want to know more? Feel free to reach out to us." 
       ></SupportCard>

    <SupportCard 
      leftComponent={<InfoCard
        imgUrl="/grid_bg.svg"
        inverted={true}
        text="Learn more about our real estate, mortage, and corporate account servces. "
        tagText="Contact"/>} 
      icon={BiSolidMessageRounded}
      
      title="Live Chat"
      text="Don't have time to wait for the answer? Chat with us now." 
       ></SupportCard>
      </Stack>
    </DashboardLayout>
  )
}

export default Support