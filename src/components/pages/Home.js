import React from 'react';
import Prototypes from "./Prototypes";
import Orders from "./Orders";
import AppStateProvider from './../../providers/AppStateProvider';

const Home = () => {
  return (
    <div>
      <AppStateProvider>
        <Prototypes />
        <Orders />
      </AppStateProvider>
    </div>
  );
};

export default Home;