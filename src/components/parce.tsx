import parceImg from "../assets/parce.png";
import logo1 from "../assets/logoParce.png";
import logo2 from "../assets/logoParce1.svg";
import logo3 from "../assets/LogoParce2.webp";

export const Parce = () => {
  const logos = [
    { src: logo3, alt: "Nal" },
    { src: logo1, alt: "SX" },
    { src: logo2, alt: "Well" },
  ];

  return (
    <div className="w-full">
      <section className="flex flex-col sm:flex-row items-center p-6 gap-6 bg-white rounded-lg shadow-sm">
        <img src={parceImg} alt="Parceiros" className="w-full sm:w-1/2 rounded-md object-cover" />
        <div className="flex flex-col justify-center p-6">
          <h1 className="text-[var(--brand-dark)] font-extrabold text-3xl mb-3">
            Nossos Parceiros
          </h1>
          <p className="text-md text-[var(--muted)] max-w-md">
            Texto super lindo na descrição dos parceiros da empresa prolumi. Aqui destacamos as parcerias que colaboram com nossos projetos e inovação.
          </p>
        </div>
      </section>

      <section className="h-44 w-full flex flex-wrap justify-around items-center gap-6 mt-6 bg-gradient-to-r from-white to-[--bg] p-4 rounded-lg">
        {logos.map((logo, index) => (
          <div key={index} className="flex w-40 h-20 items-center justify-center bg-white/80 rounded-md shadow">
            <img src={logo.src} alt={logo.alt} className="object-contain h-12" />
          </div>
        ))}
      </section>
    </div>
  );
};
