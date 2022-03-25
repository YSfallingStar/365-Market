import React from 'react';
import Prototypes from "./Prototypes";
import AppStateProvider from './../../providers/AppStateProvider';

const Home = () => {
  return (
    <div style={{margin: '50px 100px'}}>
      <AppStateProvider>
        <Prototypes />
      </AppStateProvider>
    </div>
  );
};

export default Home;