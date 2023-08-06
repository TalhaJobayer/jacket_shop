import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Banner from './Component/Banner/Banner';
import MarketPlaceProduct from './Component/MarketPlaceProduct/MarketPlaceProduct';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <MarketPlaceProduct></MarketPlaceProduct>
       
    </div>
  );
}

export default App;
