import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Alert from "./components/layout/Alert.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";
import User from "./pages/User.jsx";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          {/* h-screen means it will take the entire height */}
          <div className='flex flex-col justify-between h-screen'>
            <Navbar />
            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                {/* colon here makes it dynamic routing  */}
                <Route path='/user/:login' element={<User />} />
                <Route path='/notfound' element={<NotFound />} />
                {/* create a catch all page, if user slash something doesn't exist */}
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
