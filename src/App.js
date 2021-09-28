import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import sweety from './MyComponents/Img/sweety.png'
import Header from './MyComponents/Header';
import Home from './MyComponents/Home';
import Footer from './MyComponents/Footer';

function App() {
  return (
    <>
    <div className="app">
      <img className="sweety-icon" src={sweety} alt=""/>
      <div>
    <Header/>
    <Home/>
    <Footer/>
    </div>
    </div>
    </>
  );
}

export default App;
