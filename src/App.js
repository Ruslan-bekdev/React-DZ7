import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./components/menu/Menu";
import Home from "./pages/home/Home";
import ModalPage from "./pages/modalPage/ModalPage";
import ColorPage from "./pages/colorPage/ColorPage";
import PortfolioPage from "./pages/portfolioPage/PortfolioPage";
import AboutPage from "./pages/aboutPage/AboutPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/modal' element={<ModalPage/>}/>
          <Route path='/color' element={<ColorPage/>}/>
          <Route path='/portfolio' element={<PortfolioPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
