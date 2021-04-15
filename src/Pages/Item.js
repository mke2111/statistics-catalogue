import React from 'react';
import Info from '../Containers/info';
import ItemInfo from '../Components/itemInfo';
import Navbar from '../Components/navbar';

const Home = () => (
  <>
    <div>
      <Navbar />
      <Info />
      <ItemInfo />
    </div>
  </>
);

export default Home;
