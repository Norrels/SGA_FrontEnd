import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import {DefaultLayoutSup}  from "./layout/DefaultLayoutSup";
import { Admin } from "./pages/Admin";
import AdvancedSearch from "./pages/AdvancedSearch";
import { Call } from "./pages/Call";
import { Course } from "./pages/Course";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Places } from "./pages/Places";
import { Teacher } from "./pages/Teacher";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/" element={<DefaultLayout />}>
        <Route path="/aulas" element={<Home />} />
        <Route path="/professores" element={<Teacher />} />
        <Route path="/ambientes" element={<Places />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cursos" element={<Course />} />
        <Route path="/busca-avancada" element={<AdvancedSearch />} />
      </Route>

      <Route path="/" element={<DefaultLayoutSup />}>
        <Route path="/chamadas" element={<Call />} />
        <Route path="/admins" element={<Admin />} />
      </Route>
    </Routes>
  );
}
