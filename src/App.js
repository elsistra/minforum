import React from 'react';
import './App.css';
import PageHeader from './Components/PageHeader';
import PageFooter from './Components/PageFooter';

function App() {
  return (
    <div className="App">
      <PageHeader></PageHeader>
      <div id="PageContent">Test Content</div>
      <PageFooter></PageFooter>
    </div>
  );
}

export default App;
