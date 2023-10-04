import { AiOutlineWhatsApp } from "react-icons/ai";

const Contactwpp = () => {
  // Substitua 'seu-número-de-telefone' pelo número de telefone desejado, incluindo o código do país (por exemplo, +55 para o Brasil).
  const phoneNumber = "13991898169";

  // Construa o URL do WhatsApp com o número de telefone
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <AiOutlineWhatsApp className="cursor-pointer hover:scale-110 duration-150 ease-in-out" />
      </a>
    </div>
  );
};

export default Contactwpp;
