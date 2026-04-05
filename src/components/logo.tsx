export const Logo = ({ scrolled = false }: { scrolled?: boolean }) => (
  <a href="#home" className="flex items-center">
    <img
      src="/logo_1.png"
      alt="Logo Prolumi"
      className={`h-14 w-14 object-contain rounded-lg transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-white/20'
        }`}
    />
  </a>
);
