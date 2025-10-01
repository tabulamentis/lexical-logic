import logo from "@/assets/tabula-mentis-logo.png";

const Header = () => {
  return (
    <header className="w-full py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex justify-center">
        <img 
          src={logo} 
          alt="Tabula Mentis" 
          className="h-16 md:h-20 object-contain"
        />
      </div>
    </header>
  );
};

export default Header;