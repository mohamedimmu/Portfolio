import Logo from "./Logo";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-10 bg-white flex flex-row items-center justify-between pt-8 px-10    lg:px-20">
      <Logo />
      <Menu />
    </header>
  )
}

export default Navbar;
