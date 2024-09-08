"use client";
import Image from 'next/image';
import { FC } from 'react';
import logo from "../../../Images/download-removebg-preview.png"; // Ensure the path is correct

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import HomePage from '../Home/HomePage';
import OrderDetails from '../OrderDetails/OrderDetails';
import AllUser from '../AllUser/AllUser';


const Dashboard: FC = () => {
  return (
    <div>
      <div className="flex items-center mb-4">
        {/* If you want to display the logo */}
        <Image
          src={logo}
          alt="Logo"
          width={300}  // Adjust size as necessary
          height={200}
          className="mr-2 h-8 w-24"
        />
        <h1>Welcome to the Dashboard</h1>
      </div>

      <Tabs>
        <TabList>
          <Tab>Home</Tab>
          <Tab>Order</Tab>
          <Tab>Category</Tab>
          <Tab>User</Tab>
          <Tab>Payment History</Tab>
          <Tab>Profile</Tab>
          <Tab>Title 7</Tab>
          <Tab>Title 8</Tab>
        </TabList>
      {/* Admin Home page */}
        <TabPanel>
          <HomePage/>
        </TabPanel>
       {/* Order Details Page */}
        <TabPanel>
         <OrderDetails/>
        </TabPanel>

        {/* Admin Category Page */}
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>

        {/* Admin All User Page */}
        <TabPanel>
         <AllUser/>
        </TabPanel>

        <TabPanel>
          <h2>Any content 5</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 6</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 7</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 8</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Dashboard;
