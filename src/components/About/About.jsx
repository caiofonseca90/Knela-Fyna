const About = () => {
  return (
    <div className="m-auto flex h-[100vh] w-full ">
        {/* section about name */}
        <section className="py-[5rem] items-center gap-11 px-[2rem] flex flex-col-reverse lg:justify-evenly lg:flex-row w-full"> 
            <img className="w-[350px] xl:w-[500px] lg:rounded-full" src="../src/assets/img/freeza.jpeg" alt="imgfreeza" />
            <div className="flex flex-col items-center gap-10">
              <a id="#about" className=" text-[2.5rem] text-slate-600 font-extrabold" href="#">Sobre</a>
              <img className="w-[250px] " src="../src/assets/img/namekneladark.png" alt="" />
              <span className="text-[2.2rem] text-center lg:text-[3rem] lg:w-[60vw] xl:w-[50vw] 2xl:w-[35vw]  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore sed et cum voluptatum provident 
                delectus consectetur ab error quisquam ratione minima, atque officiis iure corrupti maxime ipsa soluta. Eligendi!
              </span>
              <a href="#" className="bg-slate-950 text-white text-[3rem] border py-4 px-10 rounded-2xl shadow-xl float-left cursor-pointer">Saiba mais</a>
            </div>
        </section>
      </div>
  )
}

export default About