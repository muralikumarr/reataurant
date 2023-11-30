import './App.css';
import Header from './component/rests/header';
import Footer from './component/rests/footer';
import DarkVariantExample from './component/rests/body-slider';
import Adout from './component/rests/adout us';
import Menu from './component/rests/menu';
import Bar from './component/rests/bar';


function App() {
  return (
    <div className="App">
      <Header/>
      <DarkVariantExample/>
      <Adout/>
      <Menu/>
      <Bar/>
      <Footer/>
    </div>
  );
}

export default App;
