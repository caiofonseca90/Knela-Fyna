import { useForm, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask'; // Importe a biblioteca react-input-mask
import { AiOutlineInstagram} from 'react-icons/ai'
import Contactwpp from '../Contactwpp/Contactwpp';
import emailjs from "@emailjs/browser"


const Contact = () => {
  const { handleSubmit, control } = useForm();

  const urlInsta = "https://www.instagram.com/knela_fyna/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"

  const onSubmit = (data,e) => {
    e.preventDefault()
    sendEmail(data)
    e.target('')
  } 

  const sendEmail = (data) =>{
    emailjs.send('service_lbr76o9','template_vc9muwk', data,"eFxJnoiv9SsUM6hfb" )
      .then((response) =>{
        alert("Contato enviado, aguarde nosso retorno !", response.status, response.text)
        console.log("Email enviado", response.status, response.text)
        console.log(data)
      },(err)=>{
        console.log("Erro ", err)
      })
  }

  const validateName = (e) => {
    const valueName = e.key;
    if (!/^[A-Za-z\s]+$/.test(valueName)) {
      e.preventDefault(); 
    }
  };


  return (
    <div className="h-[100vh] lg:h-[100vh] flex justify-center items-center text-white " id='contato'>
      <div className='flex flex-col-reverse lg:flex-col justify-center items-center lg:min-w-[40vw]'>
        <form className='mx-5 flex flex-col justify-around items-center lg:w-[50rem] h-[600px] mb-[3rem]' onSubmit={handleSubmit(onSubmit)}>
          <img
            className="w-[220px]"
            src={"https://github.com/caiofonseca90/Knela-Fyna/blob/main/src/assets/img/logo-darkmode.png?raw=true"}
            alt="logoknela"
          />
          <p className='text-[2.5rem] text-center'>Preencha os campos abaixo para mais informações! </p>
          <div className="gap-10 flex flex-col w-full">
            {/* Name */}
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="w-full h-[4.5rem] rounded placeholder:text-[2rem] text-[2rem] text-black p-5 outline-none"
                  placeholder='Nome:'
                  onKeyDown={validateName}
                  onBlur={(e) => {
                    e.target.value = e.target.value.replace(/\d/g, ''); // Remove números
                  }}
                />
              )}
              rules={{ validate: validateName }} // Validação personalizada
            />
            {/* Email */}
            <Controller
              name="email"
              control={control}
              
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  className="w-full h-[4.5rem]  rounded placeholder:text-[2rem] text-black text-[2rem] p-5 outline-none"
                  placeholder='E-mail:'
                />
              )}
            />
            {/* Phone */}
            <Controller
              name="phone"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <InputMask
                  {...field}
                  mask="(99) 99999-9999"
                  maskChar="_"
                  type="tel"
                  className="w-full h-[4.5rem] rounded placeholder:text-[2rem] text-black text-[2rem] p-5 outline-none"
                  placeholder='Telefone:'
                />
              )}
            />
          </div>

          <div className="mt-[3rem]">
            <button type="submit"
              className="px-[6rem] py-[1rem] rounded-lg text-[2.5rem] text-slate-200 hover:text-white hover:scale-110 duration-75">
              Enviar
            </button>
          </div>
          <section className='text-[3rem] lg:gap-10 lg:text-[6rem] w-[20rem] items-center flex justify-around lg:justify-center mt-[3rem] '>
            <Contactwpp className='cursor-pointer hover:scale-110 duration-150 ease-in-out'  />
            <a href={urlInsta} target='blank'>
              <AiOutlineInstagram className='cursor-pointer hover:scale-110 duration-150 ease-in-out'  />
            </a>
          </section>
        </form>
      </div>
    </div>
  );
}

export default Contact;
