import Logoimg from "../../src/assets/logo_lumi.png";

export const Logo = () => {
  return (
    <a href="#" className="flex items-center">
      <img
        src={Logoimg}
        alt="Logo Prolumi"
        className="h-32 w-32 object-contain"
      />
    </a>
  );
};
