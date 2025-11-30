import { Route, Routes } from "react-router-dom";
import { Catalog } from "../pages/Catalog/Catalog";
import { MainLayout } from "../layout/MainLayout";
import { BookDetails } from "../pages/BooksDetails/BookDetails";

export function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Catalog />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/book/:id" element={<BookDetails />} />
      </Route>
    </Routes>
  );
}
