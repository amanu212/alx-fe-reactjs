import UserProfile from './components/UserProfile';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import Counter from './components/Counter'; // ✅ New import
import './App.css';

function App() {
  return (
    <>
      <Header />
      <WelcomeMessage />
      <MainContent />
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />

      {/* ✅ New Counter Component */}
      <Counter />

      <Footer />
    </>
  );
}

export default App;