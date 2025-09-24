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
        return null;
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
    <div className="min-h-screen flex items-center justify-center p-6 bg-[--bg]">
      <section className="flex flex-col xl:flex-row gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-between text-center bg-white h-80 w-80 rounded-2xl p-6 shadow-md"
          >
            <h1 className="font-bold text-2xl text-[var(--brand-dark)]">{card.title}</h1>
            <p className="text-left text-sm my-4 text-[var(--muted)] leading-relaxed">{card.description}</p>
            <button
              aria-label={`${card.buttonText} - ${card.title}`}
              className="mt-auto p-2 bg-[--brand] text-white rounded-md hover:bg-[--brand-dark] transition"
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
