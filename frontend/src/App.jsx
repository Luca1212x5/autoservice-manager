import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import InterventiiPage from "./pages/InterventiiPage.jsx";
import InterventieDetaliuPage from "./pages/InterventieDetaliuPage.jsx";
import DesprePage from "./pages/DesprePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<InterventiiPage />} />
        <Route path="/interventii/:id" element={<InterventieDetaliuPage />} />
        <Route path="/despre" element={<DesprePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}