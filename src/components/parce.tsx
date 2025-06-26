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
      <section className="flex flex-col sm:flex-row items-center p-6">
        <img src={parceImg} alt="Parceiros" className="w-full sm:w-1/2" />
        <div className="flex flex-col justify-center p-6">
          <h1 className="text-gray-700 font-bold text-3xl mb-4">
            Nossos Parceiros
          </h1>
          <p className="text-md text-slate-700 max-w-sm">
            Texto super lindo na descrição dos parceiros da empresa prolumi.
          </p>
        </div>
      </section>

      <section className="h-52 w-full flex justify-evenly items-center bg-slate-200">
        {logos.map((logo, index) => (
          <div key={index} className="flex w-32 h-16 items-center justify-center">
            <img src={logo.src} alt={logo.alt} className="object-contain h-full" />
          </div>
        ))}
      </section>
    </div>
  );
};
