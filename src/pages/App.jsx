import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./App.css";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import NewBookForm from "../components/NewBookForm";
import BookList from "../components/BookList";
import Counters from "../components/Counters";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AllRoutes } from "../routes/route";
import { MainLayout } from "../layout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
