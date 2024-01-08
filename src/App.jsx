import "./App.css";

import Menu from "./components/Menu/Menu";
import Menuhamb from "./components/Hamburguer/Menuhamb";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (

    <div className="vanta">
      
      <div className="flex flex-col fullbg " >
        <Menu />
        <Menuhamb />
        <Header />
        <About />
        <Products />
        <Contact />
      </div>
    </div>
  );
}

export default App;
