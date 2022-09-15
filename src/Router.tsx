import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Course } from "./pages/Course";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Places } from "./pages/Places";
import { Teacher } from "./pages/Teacher";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/aulas" element={<Home />} />
        <Route path="/professores" element={<Teacher />} />
        <Route path="/ambientes" element={<Places />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cursos" element={<Course />} />
      </Route>
    </Routes>
  );
}
