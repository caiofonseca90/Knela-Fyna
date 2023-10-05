// import { AiOutlineWhatsApp } from "react-icons/ai";

// const Contactwpp = () => {
//   // colocar numero dowpp na variavel
//   const phoneNumber = "13991898169";

//   // caminho da janela da conversa
//   const whatsappUrl = `https://wa.me/${phoneNumber}`;

//   return (
//     <div>
//       <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
//         <AiOutlineWhatsApp className="cursor-pointer hover:scale-110 duration-150 ease-in-out" />
//       </a>
//     </div>
//   );
// };

// export default Contactwpp;

import { AiOutlineWhatsApp } from "react-icons/ai";

const Contactwpp = () => {
  // Coloque o número do WhatsApp na variável
  const phoneNumber = "13991898169";

  // Mensagem automática
  const message = "Boa, é do Knela Fyna? Gostaria de mais informações sobre os produtos da marca.";

  // Codificar a mensagem para ser incluída na URL
  const encodedMessage = encodeURIComponent(message);

  // Caminho da janela de conversa com a mensagem automática
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <AiOutlineWhatsApp className="cursor-pointer hover:scale-110 duration-150 ease-in-out" />
      </a>
    </div>
  );
};

export default Contactwpp;
