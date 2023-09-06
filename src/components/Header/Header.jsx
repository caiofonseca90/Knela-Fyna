import { useEffect } from "react"
import Menu from "../Menu/Menu"
import FOG from "vanta/src/vanta.fog"

const Header = () => {
  
  useEffect(()=>{
    FOG({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      highlightColor: 0xffffff,
      midtoneColor: 0x8c8c8c,
      lowlightColor: 0x0,
      baseColor: 0xfefefe,
      blurFactor: 0.52,
      speed: 1.40,
      zoom: 1.80
    
    })
  },[])

  return (
    <div id="vanta" >
      
        <header className=" h-[100vh] flex flex-col header-shadow" >
            {/* <img className="  h-full w-full z-[-99] absolute" src="../src/assets/img/bgheader3.png" alt="" /> */}
            
            <Menu />      
            <img className=" m-auto h-[35rem] sm:h-[65rem] "
            src="../src/assets/img/logolight.png" alt="logo-KnelaFyna"  />
        </header>
    </div>
  )
}

export default Header