import { useState, useEffect } from "react";
import { Parallax } from "react-parallax";

import bgBig from "../../assets/img/bgbig.png";
import bgMed from "../../assets/img/bgmed.png";
import bgSmall from "../../assets/img/bgsmall.png";

// import About from "./About";

const backgroundImageStyle = {
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  width: "100%",
};

const AboutPara = () => {
  const [bgImage, setBgImage] = useState(bgBig); // Começa com a imagem padrão

  // Função para verificar a largura da tela e atualizar a imagem de fundo
  const checkWindowWidth = () => {
    if (window.innerWidth < 1024) {
      setBgImage(bgSmall); 
    } else if (window.innerWidth < 1450) {
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
    </Parallax>
  );
};

export default AboutPara;
