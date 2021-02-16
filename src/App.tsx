import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./components/HomePage/HomePage";
import PageWrapper from "./components/Shared/PageWrapper/PageWrapper";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <PageWrapper>
              <HomePage/>

          </PageWrapper>
      </header>
    </div>
  );
}

export default App;
