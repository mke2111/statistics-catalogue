import React from 'react';
import AllLists from '../Components/allLists';
import Main from '../Components/main';
import Navbar from '../Components/navbar';

const Home = () => (
  <>
    <div>
      <Navbar />
      <Main />
      <AllLists />
    </div>
  </>
);

export default Home;
