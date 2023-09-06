import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const Card = () => {
  const [slideShow, setSlideShow] = useState(3);
  const data = [
    {id: '1', image: 'https://i1.sndcdn.com/avatars-YQznFfMSqrtzhib8-amzu3Q-t240x240.jpg' },
    {id: "2", image: "https://i0.wp.com/techwek.com/wp-content/uploads/2020/12/Imagem-para-perfil.jpg?resize=512%2C473&ssl=1" },
    {id: "3", image: "https://i.pinimg.com/236x/a6/f2/53/a6f25369334938bc1a3efe14f1f3d229.jpg" },
    {id: "4", image: "https://i.pinimg.com/236x/a6/f2/53/a6f25369334938bc1a3efe14f1f3d229.jpg" }
  ];

  useEffect(() => {
    function handleResize(){
      // if(window.innerWidth < 768){
      //   setSlideShow(1);
      // }else{
      //   setSlideShow(slideShow);
      // }
      setSlideShow(window.innerWidth < 768 ? 1 : window.innerWidth < 1280 ? 2 : slideShow);

    }
    handleResize();

    window.addEventListener("resize", handleResize)

    return () =>{
      window.removeEventListener("resize", handleResize)
    }

  },[])

  
  // flex flex-col items-center justify-center py-[7rem]
  return (
    <div className=" h-[100vh] w-full text-center">
      <h1 className="text-[5rem] font-extrabold">Produtos</h1>
        <section className='w-[90vw] m-auto border'>
          <Swiper 
            slidesPerView={slideShow}
            pagination={{ clickable: true }}
            modules={[Pagination, Navigation]}
            navigation
            className=''
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <img 
                  src={item.image} 
                  alt="Slider" 
                  className="w-full h-[50vh]" 
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        


        {/* <Swiper 
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
          navigation
        >
          {data.map((item) => ( // Adicionei os parênteses para envolver o retorno
            <SwiperSlide key={item.id}>
              <img 
                src={item.image} 
                alt="Slider" 
                className="w-[400px] border" 
              />
            </SwiperSlide>
          ))}
        </Swiper> */}

        
    </div>
  );
};
export default Card;
