import React from 'react';

const Home = () => {
  return (
    
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <h1><img style={{Width:100, height: 500, border: '15px solid'}}src={require('/home/johnd/code/Projects/phase-3-sinatra-react-project/my-app-frontend/src/images/cmptr_4x.webp')} alt='logo'/></h1>
    </div>
  );
};

export default Home;