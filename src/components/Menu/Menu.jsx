import Menuhamb from "../Hamburguer/Menuhamb";

const Menu = () => {
  
  return (
    <header className="fixed w-screen backdrop-blur-xl bg-black text-white h-[8rem] py-5">
        <ul className=" flex justify-around text-[2rem] m-auto w-full lg:w-[100rem] max-md:hidden font-bold items-center">
            <a href="#" className="hover:scale-105 hover:duration-200 duration-200 " ><img className="h-[6rem]" src="../src/assets/img/logofreeza.png" alt="logo" /></a>
            <a href="#" className="hover:text-slate-400 duration-150"><li>Inicio</li></a>
            <a href="#" className="hover:text-slate-400 duration-150"><li>Sobre</li></a>
            <a href="#" className="hover:text-slate-400 duration-150"><li>História</li></a>
            <a href="#" className="hover:text-slate-400 duration-150"><li>Produtos</li></a>
            <a href="#" className="hover:text-slate-400 duration-150"><li>Contato</li></a>
          </ul>
          <Menuhamb />
    </header>
  );
};

export default Menu;
