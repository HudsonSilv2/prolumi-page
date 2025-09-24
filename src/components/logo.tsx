import Logoimg from "../../src/assets/logo_lumi.png";

export const Logo = () => {
  return (
    <a href="#" className="flex items-center">
      <img
        src={Logoimg}
        alt="Logo Prolumi"
  className="h-16 w-16 object-contain rounded-md bg-white/60 p-1 shadow-sm"
      />
    </a>
  );
};
