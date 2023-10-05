import { useEffect } from "react"
import FOG from "vanta/src/vanta.fog"

const Header = () => {
  useEffect(()=>{
    FOG({
      el: ".vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      highlightColor: 0xffffff,
      midtoneColor: 0x8c8c8c,
      lowlightColor: 0x0,
      baseColor: 0xf0f0f0f0f0,
      blurFactor: 0.52,
      speed: 1.40,
      zoom: 1.80
    })
  },[])

  return (
    <header className=" vanta" id="home">
      <div className="h-[100vh] w-full flex flex-col">
        <img className="m-auto h-[45rem] md:h-[60rem]" src={"https://raw.githubusercontent.com/caiofonseca90/Knela-Fyna/main/src/assets/img/logo-lightmode.png"} alt="logo-KnelaFyna"/>
      </div>
    </header>
    
  );
};

export default Header;
