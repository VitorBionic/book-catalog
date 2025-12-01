import { LibraryBig } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { NavLink } from "react-router-dom";

export function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "70vh",
        gap: 40,
      }}
    >
      <h1 style={{ fontSize: 44, margin: 0 }}>Bem Vindo ao</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
        }}
      >
        <LibraryBig
          color={theme === "light" ? "#1a1a1a" : "#ffffff"}
          size={48}
        />
        <h1 style={{ margin: 0 }}>BookCatalog</h1>
      </div>
      <NavLink to={"/catalog"} className="customNavLink">
        Catálogo
      </NavLink>
    </div>
  );
}
