import React from 'react';
import Stars from './Stars';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Film Rating</h1>
      <Stars count={3} />
    </div>
  );
};

export default App;
