import Navbar from "./Perfil/Navbar";
import Perfil from "./Perfil/Perfil";

function Header() {
  return (
    <div id="perfil" className="min-h-screen flex flex-col items-center justify-center text-center">
      <Navbar />
      <Perfil />
    </div>
  );
}

export default Header;
