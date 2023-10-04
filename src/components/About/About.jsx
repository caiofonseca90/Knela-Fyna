// import Fade from "react-reveal/Fade";
import { useState, useEffect } from "react";

import { Parallax } from "react-parallax";

import bgBig from "../../assets/img/bgbig.png";
import bgMed from "../../assets/img/bgmed.png";
import bgSmall from "../../assets/img/bgsmall.png";
import bgMobile from "../../assets/img/bgmobile.png";

const backgroundImageStyle = {
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  width: "100%",
};

const dynamicText = `
    Nós somos nascidos e criados nas ruas,
    respeito e atitude de quem acredita na fita e continua,
    Nós crescemos no meio da brisa,
    do kick start das Harleys antigas, que deixava a canela fina e na língua do Freeza,
    Misturamos o conceito oldschool, rock and roll, Clubber e Chicano Style na veia,
    Da selva de pedra de Sampa, Santos e Clarksdalle com a 66,
    Nós somos Knela Fyna camarada,
    Aquele tipo de cão, meu irmão, que não ladra.
  `;

  const palavrasEmNegrito = [
    "nascidos", "criados", "respeito", "acredita",
    "crescemos", "kick", "start", "das", "Harleys", "canela" ,"fina", "Freeza",
    "oldschool", "rock" ,"and","roll", "Clubber", "Chicano","Style",
    "Knela","Fyna"
  ];
const partesDoTexto = dynamicText.split(/\b/); // Divide o texto em palavras

const About = () => {
 // paralax
  const [bgImage, setBgImage] = useState(bgBig); // Começa com a imagem padrão

  // Função para verificar a largura da tela e atualizar a imagem de fundo
  const checkWindowWidth = () => {
    if (window.innerWidth < 640) {
      setBgImage(bgMobile);
    }else if (window.innerWidth < 1024){
      setBgImage(bgSmall);
    }else if (window.innerWidth < 1450) {
      setBgImage(bgMed);
    } else {
      setBgImage(bgBig);
    }
  };
  useEffect(() => {
    // check no tamanho da tela
    checkWindowWidth();

    // quando a tela tiver resize add o evento
    window.addEventListener("resize", checkWindowWidth);

    // remove o resize quando o componente é desmontado
    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  }, []);

  return (
    <Parallax
      className="bg-fixed  h-[100vh] w-full"
      bgImage={bgImage} // Usa a imagem dinâmica com base no estado
      strength={800}
      bgImageStyle={backgroundImageStyle}
    >
      <div
        className="h-[100vh] lg:h-[100vh] w-full flex justify-center"
        id="about"
      >
        <div className="bg-black h-[10rem] w-full absolute items-center flex justify-center">
          <img className="h-[100%]" src="" alt="" />
        </div>
        <section className="items-center flex flex-col justify-center w-[90vw] lg:w-[40vw] xl:w-[40vw] gap-10">
          {/* Conteúdo com efeito de fade */}
          <h1
            className="hover:text-slate-900 text-[2.5rem] font-extrabold cursor-pointer"
            href=""
          >
            Sobre
          </h1>
          <img
            className="w-[200px] md:w-[300px] lg:w-[350px] 2xl:w-[430px]"
            src="../src/assets/img/namekneladark.png"
            alt="logoknela"
          />

          <div>
            <p className="text-[1.8rem] lg:text-[2.8rem] drop-shadow-md">
              {partesDoTexto.map((parte, index) => {
                // Verifica se a parte atual é uma palavra em negrito
                const emNegrito = palavrasEmNegrito.includes(parte.trim());

                return emNegrito ? (
                  <strong key={index} className="text-[2rem] lg:text-[2.7rem] font-semibold drop-shadow-2xl">
                    {parte}
                  </strong>
                ) : (
                  <span key={index} className="">{parte}</span>
                );
              })}
            </p>
          </div>

        </section>
      </div>
    </Parallax>
  );
};

export default About;
