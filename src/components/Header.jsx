import Navbar from "../components/Perfil/Navbar";
import Perfil from "../components/Perfil/Perfil";

function Header() {
  return (
    <div id="perfil" className="min-h-screen flex flex-col items-center justify-center text-center">
      <Navbar />
      <Perfil />
    </div>
  );
}

export default Header;
