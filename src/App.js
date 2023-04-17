import React from "react";
import Homepage from "./pages/homepage/Homepage";
import Navbar from './components/navBar/Navbar'
import MailingPage from './pages/MailingPage/MailingPage'
import EventsPage from './pages/EventsPage/EventsPage';
import About from './pages/about/About'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage />
      <MailingPage id='mailing'/>
      <EventsPage id='events'/>
      <About/>
    </div>
  );
}

export default App;
