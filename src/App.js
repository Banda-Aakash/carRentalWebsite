import About from './Components/About';
import Book from './Components/Book';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <div className='example' style={styles.appContainer}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book />} />
        </Routes>
        <hr></hr>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

const styles = {
  appContainer: {
    backgroundColor: 'black',
    minHeight: '100vh', 
    color: 'white',
    textAlign: 'center',
  },
};

