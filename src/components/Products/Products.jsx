import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { register } from 'swiper/element-bundle';
register();

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import 'swiper/css/effect-fade';


const Products = () => {
  const [slideShow, setSlideShow] = useState(1);
  const data = [
    {id: "1",image:"https://github.com/caiofonseca90/Knela-Fyna/blob/main/src/assets/img/produtos/abridor-knela.JPG?raw=true"},
    {id: "2",image:"https://github.com/caiofonseca90/Knela-Fyna/blob/main/src/assets/img/produtos/caneca-knela.JPG?raw=true"},
    {id: "3",image:"https://i.pinimg.com/236x/a6/f2/53/a6f25369334938bc1a3efe14f1f3d229.jpg"},
    {id: "4",image:"https://i.pinimg.com/236x/a6/f2/53/a6f25369334938bc1a3efe14f1f3d229.jpg"}
  ];

  useEffect(() => {
    function handleResize() {
      setSlideShow(window.innerWidth < 1024 ? 1 : slideShow);
    }
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative h-[100vh] w-screen flex flex-col m-auto justify-center items-center bg-black overflow-hidden" id="prod">
         <img 
          className="absolute w-[70rem] md:w-[90rem] lg:w-[100rem] 2xl:w-[150rem] top-[15rem] left-0 md:top-[10rem] opacity-10"
          src="../src/assets/img/motomobile.png"
          alt="logoknela"
        />
      {/* section text */}
      <div className="w-full flex flex-col lg:flex-row lg:justify-evenly items-center relative text-slate-100">
        <section className="flex flex-col items-center lg:items-start gap-10 ]">
        <h1 className="hover:text-yellow-300 text-[2.5rem] text-slate-200 font-extrabold cursor-pointer">Produtos</h1>
          <span className="text-[3rem] lg:text-[5rem] lg:w-[55rem] xl:w-[70rem]">
            <strong>Tudo</strong> o que <strong>você</strong> procura está{" "}
            <strong>aqui!</strong>
          </span>
        </section>
        {/* section prod */}
        <section className="container w-[30rem] lg:w-[45rem] ">
          <Swiper
            effect="fade"
            slidesPerView={slideShow}
            scrollbar={{ draggable: true }}
            navigation
            >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <img
                  src={item.image}
                  alt="Slider"
                  className="mt-[5rem] w-[100%] h-[300px] lg:h-[450px] rounded-2xl "
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </div>
  );
};

export default Products;
