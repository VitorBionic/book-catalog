import { LibraryBig } from "lucide-react";
import ThemeToggleButton from "./ThemeToggleButton";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="header">
      <div className="headerLogo">
        <LibraryBig
          color={theme === "light" ? "#1a1a1a" : "#ffffff"}
          size={34}
        />
        <h2 style={{ margin: 0 }}>BookCatalog</h2>
      </div>
      <ThemeToggleButton />
    </div>
  );
}

export default Header;
