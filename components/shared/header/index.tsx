import Logo from "./logo";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <Logo />
        <Menu />
      </div>
    </header>
  );
};

export default Header;
