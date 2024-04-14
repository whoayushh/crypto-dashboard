import React from 'react'

import DashboardLayout from '../../components/DashboardLayout';
import PortfolioSection from './components/PortfolioSection';
import PriceSection from './components/PriceSection';
import { Grid, GridItem } from '@chakra-ui/react';
import Transactions from './components/Transactions';
import InfoCard from './components/InfoCard';


const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
      gridTemplateCloumns={{
        base:"repeat(1,1fr)",
        xl :"repeat(2,1fr)"
      }

      }
      gap="6"
      >
        <GridItem colSpan={{
          base:1,
          xl:2,

        }}>
        <PortfolioSection></PortfolioSection>
        </GridItem>
        <GridItem colSpan={1}>
        <PriceSection></PriceSection>
        </GridItem>
        <GridItem colSpan={1}>
        <Transactions />
        </GridItem>
        <GridItem colSpan={1}>
        <InfoCard 
        text="Learn more about Loans - Keep your Bitcoin , access it's value without selling it."
        tagText="Loan"
        inverted ={false}
        imgUrl="/dot_bg.svg"
        
        />
        </GridItem>
        <GridItem colSpan={1}>
        <InfoCard 
        imgUrl="/grid_bg.svg"
        inverted={true}
        text="Learn more about our real estate, mortage, and corporate account servces. "
        tagText="Contact"
        />
        </GridItem> 
      </Grid>
      
      
      
    </DashboardLayout>
  )
}

export default Dashboard;