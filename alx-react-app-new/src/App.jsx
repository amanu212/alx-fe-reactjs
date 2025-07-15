import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import WelcomeMessage from './components/WelcomeMessage';
import ProfilePage from './components/ProfilePage';
import Counter from './components/Counter';
import UserContext from './UserContext';
import './App.css';

function App() {
  const userData = {
    name: "Alice Johnson",
    email: "alice.johnson@example.com"
  };

  return (
    <>
      <Header />
      <WelcomeMessage />
      <MainContent />

      {/* Provide userData via Context API */}
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>

      {/* Clean, modular Counter */}
      <Counter />

      <Footer />
    </>
  );
}

export default App;