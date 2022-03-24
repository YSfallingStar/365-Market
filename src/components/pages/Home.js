import React from 'react';
import Prototypes from "./Prototypes";
import Orders from "./Orders";
import AppStateProvider from './../../providers/AppStateProvider';

const Home = () => {
  return (
    <div style={{margin: '50px 100px'}}>
      <AppStateProvider>
        <Prototypes />
        <Orders />
      </AppStateProvider>
    </div>
  );
};

export default Home;