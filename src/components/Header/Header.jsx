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
    <header className="" id="" >
        <div className=" h-[100vh] flex flex-col overflow-hidden relative " >
            {/* <img className="h-full w-full z-[-99] fixed" src="../src/assets/img/bgheader3.png" alt="" /> */}
            <Menu />      
            <img className=" m-auto h-[45rem] md:h-[60rem] "src="../src/assets/img/logo-lightmode.png" alt="logo-KnelaFyna"  />
          </div>
    </header>
  )
}

export default Header