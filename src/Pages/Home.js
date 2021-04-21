import React from 'react';
import { useDispatch } from 'react-redux';
import Navbar from '../Components/navbar';
import StockList from '../Containers/stocklist';
import { fetchStock } from '../Actions';

const Home = () => {
  const dispatch = useDispatch();
  const handleOnSelect = (e) => {
    dispatch(fetchStock(e.target.value));
  };

  return (
    <>
      <div>
        <Navbar handleOnSelect={handleOnSelect} />
        {/* <Main /> */}
        <StockList />
      </div>
    </>
  );
};

export default Home;
