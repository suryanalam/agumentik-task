import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Header from './components/Header';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <main className="App">
        <Banner />
        <Header />
        <LandingPage />
        <About />
    </main>
  );
}

export default App;
