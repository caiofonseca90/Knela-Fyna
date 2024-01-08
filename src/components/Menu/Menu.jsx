import { Link } from 'react-scroll';

const Menu = () => {

    const menuItems = [
      { id: "home", text: "Inicio" },
      { id: "about", text: "Sobre" },
      { id: "prod", text: "Produtos" },
      { id: "contato", text: "Contato" },
    ];

    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior:'smooth' });
    };
    
  return (
    <header className="md:shadow-md fixed w-screen text-slate-200 h-[8rem] md:backdrop-blur-lg z-50 ">
      <div className="py-5 mx-[1rem] lg:px-[10rem] flex justify-center text-[1.5rem] max-md:hidden font-bold items-center  ">
        <a
          href="#home"
          className="hover:scale-105 hover:duration-200 duration-200"
        >
          <img
            className="h-[6rem] w-[6rem] "
            src={"https://github.com/caiofonseca90/Knela-Fyna/blob/main/src/assets/img/logofreeza.png?raw=true"}
            alt="logo"
          />
        </a>
        <ul className="flex justify-evenly float-right w-[50rem] text-white drop-shadow-md">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              spy={true}
              smooth={true}
              offset={80} 
              duration={1000}
              href={`#${item.id}`}
              className="hover:text-slate-400 duration-150"
              onClick={() => scrollToSection(item.id)}
            >
              <li>{item.text}</li>
            </Link>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Menu;
