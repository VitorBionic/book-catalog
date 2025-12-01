import { LibraryBig } from "lucide-react";
import ThemeToggleButton from "./ThemeToggleButton";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Header() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const sendToHome = () => {
    navigate({ pathname: "/" });
  };

  return (
    <div className="header">
      <div className="headerContent">
        <div className="headerLogo" onClick={sendToHome}>
          <LibraryBig
            color={theme === "light" ? "#1a1a1a" : "#ffffff"}
            size={34}
          />
          <h2 style={{ margin: 0 }}>BookCatalog</h2>
        </div>
        {/* <Link to={"/catalog"} className="customLink">
          Catálogo
        </Link> */}
      </div>
      <ThemeToggleButton />
    </div>
  );
}

export default Header;
