import Logoimg from "../../src/assets/logo_lumi.png";

export const Logo = () => {
  return (
    <div className="h-20 w-20 flex justify-start bg-cover">
      <a href="#">
        <img src={Logoimg} alt="" />
      </a>
    </div>
  );
};
