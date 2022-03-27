import React from 'react';
import Prototypes from "./Prototypes";
import AppStateProvider from './../../providers/AppStateProvider';

const Home = () => {
  return (
    <AppStateProvider>
      <Prototypes />
    </AppStateProvider>
  );
};

export default Home;