import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Card = () => {
  const [slideShow, setSlideShow] = useState(1);
  const data = [
    {
      id: "1",
      image:
        "https://github.com/caiofonseca90/Knela-Fyna/blob/main/src/assets/img/produtos/abridor-knela.JPG?raw=true",
    },
    {
      id: "2",
      image:
        "https://github.com/caiofonseca90/Knela-Fyna/blob/main/src/assets/img/produtos/caneca-knela.JPG?raw=true",
    },
    {
      id: "3",
      image:
        "https://i.pinimg.com/236x/a6/f2/53/a6f25369334938bc1a3efe14f1f3d229.jpg",
    },
    {
      id: "4",
      image:
        "https://i.pinimg.com/236x/a6/f2/53/a6f25369334938bc1a3efe14f1f3d229.jpg",
    },
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
    <div className="bg-slate-700 h-[60vh] w-full flex flex-col m-auto justify-center items-center ">
      {/* <img className='relative ' src="../src/assets/img/moto.png" alt="" /> */}
      {/* section text */}
      <div className="w-full flex flex-col lg:flex-row lg:justify-evenly items-center relative">
        <section className="flex flex-col items-center lg:items-start ]">
          <h1 className="text-[2.5rem] text-slate-600 font-extrabold">
            Produtos
          </h1>
          <span className="text-[3rem] lg:text-[5rem] lg:w-[55rem] xl:w-[70rem]">
            <strong>Tudo</strong> o que <strong>você</strong> procura está{" "}
            <strong>aqui!</strong>
          </span>
        </section>
        {/* section prod */}
        <section className="w-[38rem] lg:w-[45rem] ">
          <Swiper
            effect="fade"
            slidesPerView={slideShow}
            // scrollbar={{ draggable: true }}
            navigation
            
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <img
                  src={item.image}
                  alt="Slider"
                  className="w-[100%] h-[300px] lg:h-[450px] rounded-2xl "
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </div>
  );
};
export default Card;
