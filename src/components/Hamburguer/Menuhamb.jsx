import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Menuhamb = () => {
  const menuItems = [
    { id: "home", text: "Inicio" },
    { id: "about", text: "Sobre" },
    { id: "prod", text: "Produtos" },
    { id: "contato", text: "Contatos" },
  ];

  const [open, setOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setOpen(false); //somente se o resize da pagina for maior que 768px o menu e o modal some
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="z-50 fixed right-0 drop-shadow-">
      <AiOutlineMenu
        className={`${
          open ? "hidden " : "block"
        } float-right mr-[4.5rem] mt-7 text-[3.5rem] font-extrabold md:hidden cursor-pointer text-slate-50 drop-shadow `}
        onClick={toggleMenu}
      />
      <div
        className={`w-screen h-screen bg-black bg-opacity-40 transition-opacity  ${
          open && windowWidth <= 768 ? "block" : "hidden"
        }`}
        onClick={() => {
          toggleMenu(); // Fecha o menu ao clicar no modal
        }}
      />
      <nav
        className={`custom-menu  ${
          open ? "transform translate-x-0 " : "transform translate-x-full "
        }`}
      >
        <AiOutlineClose
          className="absolute top-5 right-10 mr-10 text-[3.1rem] cursor-pointer text-white "
          onClick={toggleMenu}
        />
        {menuItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="text-[1.5rem] pb-[3rem] lg:pb-[8rem] hover:text-slate-400 duration-150"
            onClick={() => {
            toggleMenu(); // Fecha o menu ao clicar em um item do menu
            }}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Menuhamb;
