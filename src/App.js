import {React, useEffect} from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import ContactUs from './components/Contact';
import './App.css'; // Import CSS for styling
import './components/base.css';
import './components/main.css';
import './components/vendor.css';
import 'font-awesome/css/font-awesome.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Importing React Router components
import BlogPage from './components/BlogPage';
import ArticlePage from './components/ArticlePage';




function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  // return (
  //   <div className="App">
  //     <Header />
  //     <Home />
  //     <Services />
  //     <About />
  //     <ContactUs/>
  //   </div>
  // );

  return (
    <Router>  {/* Wrapping the app in Router for routing functionality */}
        <Routes>
          {/* Defining routes for each page */}
              <Route path="/" element={<div className="App">
                      <Header />
                      <Home />
                      <Services />
                      <About />
                      <ContactUs/>
                  </div>} />
            <Route path="/blog" element={<BlogPage/>}></Route>
            <Route path="/article/:id" element={<ArticlePage />} />  {/* Route for individual article */}
          </Routes>
    </Router>
  );
}

export default App;