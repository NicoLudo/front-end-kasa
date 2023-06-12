import './assets/css/style.css';

import Footer from './components/Footer';
import Router from './Router';

function App() {
  return (
    <>
      <div className="main-container">
        <Router />
      </div>
      <Footer />
    </>
  );
}

export default App;
