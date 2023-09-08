import Menuhamb from "../Hamburguer/Menuhamb";


const Menu = () => {
  return (
    <header className="shadow-md fixed w-screen text-slate-100 h-[8rem] backdrop-blur-lg ">
      <div className="py-5 mx-[1rem] lg:px-[10rem] flex justify-center text-[1.5rem] max-md:hidden font-bold items-center  ">
        <a href="#" className="hover:scale-105 hover:duration-200 duration-200">
          <img className="h-[6rem] w-[6rem] "src="../src/assets/img/logofreeza.png" alt="logo"/>
        </a>
        <ul className="flex justify-evenly float-right w-[50rem] text-black">
          <a href="#" className="hover:text-slate-400 duration-150">
            <li>Inicio</li>
          </a>
          <a href="#" className="hover:text-slate-400 duration-150">
            <li>Sobre</li>
          </a>
          <a href="#" className="hover:text-slate-400 duration-150">
            <li>Produtos</li>
          </a>
          <a href="#" className="hover:text-slate-400 duration-150">
            <li>Contato</li>
          </a>
        </ul>
      </div>
      <Menuhamb />
    </header>
  );
};

export default Menu;
