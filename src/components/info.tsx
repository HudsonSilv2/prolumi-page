import Swal from "sweetalert2";

const handleClick = () => {
  Swal.fire({
    position: "center",
    icon: "success",
    text: "Seu IP",
    title: "128.201.218.61",
    showConfirmButton: false,
    timer: 2500,
    width: 300,
    heightAuto: true
  });
}

const text = () => {
  Swal.fire({
    input: "textarea",
    inputLabel: "Sua Mensagem!!!",
    inputPlaceholder: "Descreva sua Experiência Aqui...",
    inputAttributes: {
      "aria-label": "Type your message here",
      "aria-bold": "Sua Mensagem!!!"
    },
    showCancelButton: true
  })
};


const search = () => {
  Swal.fire({
    title: "Encontre Produtos",
    input: "text",
    inputLabel: "Seu Produto",
    showCancelButton: true,
    inputValidator: (value) => {
      if (!value) {
        return "You need to write something!";
      }
    }
  })
};


export const Info = () => {
  return (
    <div className="bg-gray-100 h-full w-full">
      <section className="p-4 justify-around items-center xl:flex">
        <div className="m-3 Flex justify-center text-center bg-white h-80 w-80 border border-none rounded-3xl">
          <h1 className="p-5 font-bold text-3xl">Localização</h1>
          <p className="p-3 m-2 text-left text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quo
            accusamus provident omnis distinctio voluptas porro qui eligendi
            consequatur at expedita, excepturi molestias, illum hic doloribus
            ipsum illo ullam iure.
          </p>
          <button className="p-2 cursor-pointer border bg-gray-300 rounded-md text-gray-700 " onClick={handleClick}>Saiba mais</button>
        </div>

        <div className="m-3 Flex justify-center text-center bg-white h-80 w-80 border border-none rounded-3xl">
          <h1 className="p-5 font-bold text-3xl">Experiência</h1>
          <p className="p-3 m-2 text-left text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quo
            accusamus provident omnis distinctio voluptas porro qui eligendi
            consequatur at expedita, excepturi molestias, illum hic doloribus
            ipsum illo ullam iure.
          </p>
          <button className="p-2 cursor-pointer border bg-gray-300 rounded-md text-gray-700 " onClick={text} >Conte-nos</button>
        </div>

        <div className="m-3 Flex justify-center text-center bg-white h-80 w-80 border border-none rounded-3xl">
          <h1 className="p-5 font-bold text-3xl">Melhor Produto</h1>
          <p className="p-3 m-2 text-left text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quo
            accusamus provident omnis distinctio voluptas porro qui eligendi
            consequatur at expedita, excepturi molestias, illum hic doloribus
            ipsum illo ullam iure.
          </p>
          <button className="p-2 cursor-pointer border bg-gray-300 rounded-md text-gray-700 " onClick={search}>Pesquise</button>
        </div>
      </section>
    </div>
  );
};
