import { useState ,useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Menuhamb = () => {
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
        <div >
            <AiOutlineMenu className={`${open ? "hidden " : "block" } float-right mr-10 mt-2 text-[3rem] md:hidden cursor-pointer `}
                onClick={toggleMenu}/>
            <div className={`h-screen w-screen bg-black bg-opacity-50 transition-opacity  
                ${open && windowWidth <= 768 ? "isible " : "invisible"}`} 
                onClick={toggleMenu}/>
                <nav className={`custom-menu ${ open ? "transform translate-x-0 " : "transform translate-x-full "
                    }`}>
                    <AiOutlineClose
                        className="absolute top-0 right-4 mr-10 text-[3rem] cursor-pointer"
                        onClick={toggleMenu}/>
                    <a href="#" className=" text-[2rem] pb-[3rem] lg:pb-[8rem] pt-[3rem] hover:text-slate-400 duration-150">Inicio</a>
                    <a href="#" className=" text-[2rem] pb-[3rem] lg:pb-[8rem] hover:text-slate-400 duration-150">História</a>
                    <a href="#" className=" text-[2rem] pb-[3rem] lg:pb-[8rem] hover:text-slate-400 duration-150">Produtos</a>
                    <a href="#" className=" text-[2rem] pb-[3rem] lg:pb-[8rem] hover:text-slate-400 duration-150">Contatos</a>
                </nav>
        </div>
    );
};

export default Menuhamb;


