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
  const validateName = (value,e) => {
    const regex = /^[A-Za-z\s]+$/; // Regex para permitir apenas letras e espaços
    const keyCode = e.keyCode || e.which;
    
    if (!regex.test(value) && (keyCode >= 48 && keyCode <= 57)) {
      e.preventDefault(); // Impede a ação padrão (inserir o número)
      return 'Por favor, insira um nome válido';
    }
    return true;
  };

  return (
    <div className="h-[100vh] lg:h-[80vh] flex items-center bg-black text-white" id='contato'>
      <div className='flex flex-col-reverse lg:flex-row justify-around lg:min-w-[60vw] m-auto'>
        <section className='text-[3rem] lg:gap-10 lg:text-[6rem] w-[20rem] items-center justify-around lg:justify-center flex lg:flex-col m-auto lg:pt-[15rem]'>
          <Contactwpp className='cursor-pointer hover:scale-110 duration-150 ease-in-out'  />
          <a href={urlInsta} target='blank'>
            <AiOutlineInstagram className='cursor-pointer hover:scale-110 duration-150 ease-in-out'  />
          </a>
          {/* <AiFillFacebook className='cursor-pointer hover:scale-110 duration-150 ease-in-out' /> */}
        </section>

        <form className='mx-5 flex flex-col justify-around items-center lg:w-[50rem] h-[600px] mb-[3rem] ' onSubmit={handleSubmit(onSubmit)}>
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

          <div className="mt-5">
            <button type="submit"
              className="px-[6rem] py-[1rem] rounded-lg text-[2.5rem] text-white hover:text-slate-300 hover:scale-110 duration-75">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
