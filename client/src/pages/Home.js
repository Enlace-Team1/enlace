import React from 'react';
import { useQuery } from '@apollo/client';

import LogIn from '../components/LogIn';
import SignUp from '../components/SignUp';



const Home = () => {
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '90vh'
    }}
    >
      
    <h1>Home</h1>
  </div>

  return (
    <main>
      <div className="flex-row justify-center">
        <LogIn/>
        <SignUp/>
        <script src='/login.js'/> 
      </div>
    </main>
  );
};

export default Home;
