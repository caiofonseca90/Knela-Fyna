import { useState, useEffect } from "react";
import { Parallax } from "react-parallax";

import bgBig from "../../assets/img/bgbig.png";
import bgMed from "../../assets/img/bgmed.png";
import bgSmall from "../../assets/img/bgsmall.png";
import bgMobile from "../../assets/img/bgmobile.png";

const backgroundImageStyle = {
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};

const dynamicText = `
 "Nós somos nascidos e criados nas ruas,
  respeito e atitude de quem acredita na fita e continua.
  Nós crescemos no meio da brisa,
  do kick start das Harleys antigas, que deixava a canela fina e na língua do Freeza,
  Misturamos o conceito oldschool, rock and roll, Clubber e Chicano Style na veia.
  Da selva de pedra de Sampa, Santos e Clarksdalle com a 66,
  nós somos Knela Fyna camarada,
  aquele tipo de cão, meu irmão, que não ladra "
`;

const palavrasEmNegrito = [
  "harleys",
  "oldschool,",
  "rock","and","roll",
  "clubber",
  "chicano","style",
  "knela","fyna"
];

const About = () => {
  const [bgImage, setBgImage] = useState(bgBig);

  const checkWindowWidth = () => {
    if (window.innerWidth < 640) {
      setBgImage(bgMobile);
    } else if (window.innerWidth < 1024) {
      setBgImage(bgSmall);
    } else if (window.innerWidth < 1450) {
      setBgImage(bgMed);
    } else {
      setBgImage(bgBig);
    }
  };

  useEffect(() => {
    checkWindowWidth();
    window.addEventListener("resize", checkWindowWidth);

    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  }, []);

  // Função para aplicar negrito às palavras em negrito
  const letraNegrito = (text) => {
    const words = text.split(/\s+/); // Dividir por espaços em branco
    return words.map((word, index) => (
      <span
        key={index}
        style={{
          fontWeight: palavrasEmNegrito.includes(word.toLowerCase())
            ? "bold"
            : "normal",
        }}
      >
        {word}{" "}
      </span>
    ));
  };

  // Dividir o texto em parágrafos com base nas vírgulas
  const paragraphs = dynamicText.split(".");

  return (
    <Parallax
      className="bg-fixed h-[110vh]  "
      // bgImage={bgImage}
      strength={1200}
      bgImageStyle={backgroundImageStyle}
    >
      <div className="h-[100%] flex justify-center " id="about">
        {/* <div className="bg-black h-[6rem] w-full absolute items-center flex justify-center"></div> */}
        <section className="text-white flex flex-col items-center justify-center float-left pt-[2rem] gap-10">
          <h1
            className=" text-[2.5rem] font-extrabold cursor-pointer mt-[5rem]"
            href=""
          >
            Sobre
          </h1>
          <img
            className="w-[150px] md:w-[220px] lg:w-[290px] 2xl:w-[340px]"
            src={
              "https://github.com/caiofonseca90/Knela-Fyna/blob/main/src/assets/img/namekneladark.png?raw=true"
            }
            alt="logoknela"
          />
          {/* paragrafo */}
          <div className=" w-[70vw] md:w-[50vw] lg:w-[65vw] xl:w-[45vw] m-auto backdrop-blur-sm gap-5 flex flex-col z-30">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="drop-shadow-md about-font "
              >
                {letraNegrito(paragraph, palavrasEmNegrito)}
              </p>
            ))}
          </div>
        </section>
      </div>
    </Parallax>
  );
};

export default About;
