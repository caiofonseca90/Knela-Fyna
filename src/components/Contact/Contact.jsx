// import { useForm, Controller } from 'react-hook-form';
// import { AiOutlineInstagram ,AiFillFacebook} from 'react-icons/ai'
// import Contactwpp from '../Contactwpp/Contactwpp';

// const Contact = () => {
//   const { handleSubmit, control } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div id='contato' className="w-full h-[100vh] lg:h-[80vh] flex items-center bg-black text-white">
//       <div className='flex flex-col-reverse lg:flex-row justify-around lg:min-w-[60vw] m-auto'>

//         <section className='text-[3rem] lg:gap-10 lg:text-[6rem] w-[30rem] items-center justify-around lg:justify-center flex lg:flex-col boder m-auto'>
//           <Contactwpp className='cursor-pointer hover:scale-110 duration-150 ease-in-out' />
//           <AiOutlineInstagram className='cursor-pointer hover:scale-110 duration-150 ease-in-out' />
//           <AiFillFacebook  className='cursor-pointer hover:scale-110 duration-150 ease-in-out' />
//         </section>

//         <form className='mx-5 flex flex-col justify-around items-center lg:w-[50rem] h-[600px] mb-[3rem] ' onSubmit={handleSubmit(onSubmit)}>
//           <img 
//             className="w-[220px]"
//             src="../src/assets/img/logo-darkmode.png"
//             alt="logoknela"
//           />
//           <p className='text-[2.5rem] text-center'>Preencha os campos abaixo para mais informações! </p>
//           <div className="gap-10 flex flex-col w-full">
//             {/* Name */}
//             <Controller
//               name="name"
//               control={control}
//               defaultValue=""
//               render={({ field }) => <input {...field} type="text" 
//               className="w-full h-[4.5rem] rounded placeholder:text-[2rem] text-[2rem] text-black p-5 outline-none"
//               placeholder='Nome:' />}
//               />
//             {/* Email */}
//             <Controller
//               name="email"
//               control={control}
//               defaultValue=""
//               render={({ field }) => <input {...field} type="email" 
//               className="w-full h-[4.5rem]  rounded placeholder:text-[2rem] text-black text-[2rem] p-5 outline-none"
//               placeholder='E-mail:' />}
//             />
//             {/* Phone */}
//             <Controller
//               name="phone"
//               control={control}
//               defaultValue=""
//               render={({ field }) => <input {...field} rows="4" 
//               className="w-full h-[4.5rem] rounded placeholder:text-[2rem] text-black text-[2rem] p-5 outline-none"
//               placeholder='Telefone:'/>}
//             />
//           </div>
//           <div className="mt-5">
//             <button type="submit" 
//             className="px-[6rem] py-[1rem] rounded-lg text-[2.5rem] text-white hover:text-slate-300 hover:scale-110 duration-75">
//               Enviar
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
// export default Contact;


import { useForm, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask'; // Importe a biblioteca react-input-mask
import { AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai'
import Contactwpp from '../Contactwpp/Contactwpp';

const Contact = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const validateName = (value ,e) => {
    const regex = /^[A-Za-z\s]+$/; // Regex para permitir apenas letras e espaços
    const keyCode = e.keyCode || e.which;
    
    if (!regex.test(value) && (keyCode >= 48 && keyCode <= 57)) {
      
      e.preventDefault(); // Impede a ação padrão (inserir o número)
      return 'Por favor, insira um nome válido';
    }
    return true;
  };

  return (
    <div className="w-full h-[100vh] lg:h-[80vh] flex items-center bg-black text-white" id='contato'>
      <div className='flex flex-col-reverse lg:flex-row justify-around lg:min-w-[60vw] m-auto'>
        <section className='text-[3rem] lg:gap-10 lg:text-[6rem] w-[30rem] items-center justify-around lg:justify-center flex lg:flex-col boder m-auto'>
          <Contactwpp className='cursor-pointer hover:scale-110 duration-150 ease-in-out' />
          <AiOutlineInstagram className='cursor-pointer hover:scale-110 duration-150 ease-in-out' />
          <AiFillFacebook className='cursor-pointer hover:scale-110 duration-150 ease-in-out' />
        </section>

        <form className='mx-5 flex flex-col justify-around items-center lg:w-[50rem] h-[600px] mb-[3rem] ' onSubmit={handleSubmit(onSubmit)}>
          <img
            className="w-[220px]"
            src="../src/assets/img/logo-darkmode.png"
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
