import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ResumeProvider } from './Context';
import './App.css';
import Navbar from './components/Layouts/Navbar';
import Footer from './components/Layouts/Footer';
import Header from './components/Layouts/Header'; // Keep Header as a standalone component
import Main from './components/Main';
import Abc from './abc'; // Import the component for the "abc" route
import WebFont from 'webfontloader';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Pacifico', 'Poppins'],
      },
    });
  }, []);

  return (
    <Router>
      <ResumeProvider>
        <Navbar />
        <Routes>
          {/* Default route with Header */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Abc />
              </>
            }
          />
          {/* ABC route without Header */}
          <Route path="/Main" element={<Main />} />
        </Routes>
        <Footer />
      </ResumeProvider>
    </Router>
  );
}

export default App;
