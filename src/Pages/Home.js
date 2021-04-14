import React from 'react';
import Main from '../Components/main';
import Navbar from '../Components/navbar';
import StockList from '../Containers/stocklist';

const Home = () => (
  <>
    <div>
      <Navbar />
      <Main />
      <StockList />
    </div>
  </>
);

export default Home;
