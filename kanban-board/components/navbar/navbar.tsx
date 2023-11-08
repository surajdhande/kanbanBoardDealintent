import Image from "next/image";
import "./navbar.scss";
import CompanyName from "../../images/CompanyName.svg";
import User from "../../images/user.png";

const Navbar = () => {
  return (
    <div className="navbar-head">
      <Image src={CompanyName} alt="Delete Image" className="logo-img" />
      <Image src={User} alt="User" className="user-img" />
    </div>
  );
};

export default Navbar;
