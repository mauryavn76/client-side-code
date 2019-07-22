import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar  from './components/Layouts/navbar'
import FooterLayout from './components/Layouts/footer';
import { Home } from './components/Pages/Home';
import { About } from './components/Pages/about';
import Contact from './components/Pages/contact';
import  Whyviser  from './components/Pages/Whyviser';
// import { Classroom } from './components/Pages/TallyCirtification';
import { Travel } from './components/Pages/Travel';



function App() {
  return (
    <div className="App" >
        <NavBar />
        <Home />
        <Whyviser />
        <About />
       
        <Travel />
        <Contact />
        <FooterLayout />
    </div>
  );
}

export default App;
