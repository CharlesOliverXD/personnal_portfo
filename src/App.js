
import './App.css';

import About from './pages/about';
import Header from './pages/header';
import Resume from './pages/resume';
import Services from './pages/services';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';

function App() {
  return (
    <div className="App">

      <Header/>
      <About/>
      <Resume/>
      <Services/>
      <Portfolio/>
      <Contact/>

    </div>
  );
}

export default App;
