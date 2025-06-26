import Swal from "sweetalert2";

export const Info = () => {
  const handleClick = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "128.201.218.61",
      text: "Seu IP",
      showConfirmButton: false,
      timer: 2500,
      width: 300,
      heightAuto: true,
    });
  };

  const handleText = () => {
    Swal.fire({
      input: "textarea",
      inputLabel: "Sua Mensagem",
      inputPlaceholder: "Descreva sua experiência aqui...",
      showCancelButton: true,
      inputAttributes: {
        "aria-label": "Digite sua mensagem aqui",
      },
    });
  };

  const handleSearch = () => {
    Swal.fire({
      title: "Encontre Produtos",
      input: "text",
      inputLabel: "Seu Produto",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "Você precisa escrever algo!";
        }
      },
    });
  };

  const cards = [
    {
      title: "Localização",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore quo accusamus provident omnis.",
      buttonText: "Saiba mais",
      onClick: handleClick,
    },
    {
      title: "Experiência",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore quo accusamus provident omnis.",
      buttonText: "Conte-nos",
      onClick: handleText,
    },
    {
      title: "Melhor Produto",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore quo accusamus provident omnis.",
      buttonText: "Pesquise",
      onClick: handleSearch,
    },
  ];

  return (
    <div className="bg-gray-600 min-h-screen flex items-center justify-center p-6">
      <section className="flex flex-col xl:flex-row gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-between text-center bg-white h-80 w-80 rounded-3xl p-4 shadow-lg"
          >
            <h1 className="font-bold text-3xl">{card.title}</h1>
            <p className="text-left text-sm my-4">{card.description}</p>
            <button
              className="mt-auto p-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition"
              onClick={card.onClick}
            >
              {card.buttonText}
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};
