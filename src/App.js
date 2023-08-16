import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Banner from './Component/Banner/Banner';
import MarketPlaceProduct from './Component/MarketPlaceProduct/MarketPlaceProduct';
import ComponentOfTab from './Component/ComponetOfTab/ComponentOfTab';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <MarketPlaceProduct></MarketPlaceProduct>
   <ComponentOfTab></ComponentOfTab>
       
    </div>
  );
}

export default App;
