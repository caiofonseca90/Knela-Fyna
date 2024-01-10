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
    {id: "1",image:"https://github.com/caiofonseca90/Knela-Fyna/blob/main/src/assets/img/produtos/1.jpeg?raw=true"},
    {id: "2",image:"https://github.com/caiofonseca90/Knela-Fyna/blob/main/src/assets/img/produtos/2.jpeg?raw=true"},
    {id: "3",image:"https://github.com/caiofonseca90/Knela-Fyna/blob/main/src/assets/img/produtos/3.jpeg?raw=true"},
    {id: "4",image:"https://github.com/caiofonseca90/Knela-Fyna/blob/main/src/assets/img/produtos/4.jpeg?raw=true"},
    {id: "5",image:"https://github.com/caiofonseca90/Knela-Fyna/blob/main/src/assets/img/produtos/5.jpeg?raw=true"},
    {id: "6",image:"https://github.com/caiofonseca90/Knela-Fyna/blob/main/src/assets/img/produtos/6.jpeg?raw=true"},
    {id: "7",image:"https://github.com/caiofonseca90/Knela-Fyna/blob/main/src/assets/img/produtos/7.jpeg?raw=true"},
    {id: "8",image:"https://github.com/caiofonseca90/Knela-Fyna/blob/main/src/assets/img/produtos/8.jpeg?raw=true"},
    {id: "9",image:"https://github.com/caiofonseca90/Knela-Fyna/blob/main/src/assets/img/produtos/9.jpeg?raw=true"}
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
    <div className="relative h-[100vh] w-full flex flex-col m-auto justify-center items-center bg-transparent overflow-hidden" id="prod">
      {/* section text */}
      <div className="w-full flex flex-col lg:flex-row lg:justify-evenly items-center relative text-slate-100">
        <section className="flex flex-col items-center lg:items-start gap-10 ]">
        <h1 className="text-[2.5rem] text-slate-200 font-extrabold cursor-pointer">Produtos</h1>
          <span className="text-[3rem] lg:text-[5rem] lg:w-[55rem] xl:w-[70rem] text-center">
            <strong>Acessórios </strong>e <strong>roupas</strong> original{" "}<br></br>
            <strong>Knela Fyna style!</strong>
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
                  alt=""
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
