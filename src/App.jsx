import "./App.css";

import Menu from "./components/Menu/Menu";
import Menuhamb from "./components/Hamburguer/Menuhamb";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="flex flex-col h-full " >
      <Menu />
      <Menuhamb />
      <Header />
      <About />
      <Products />
      <Contact />
    </div>
  );
}

export default App;
