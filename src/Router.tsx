import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import AdvancedSearch from "./pages/AdvancedSearch";
import { Course } from "./pages/Course";
import { Dashboard } from "./pages/Dashboard";
import { Holiday } from "./pages/Holiday/Index";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Places } from "./pages/Places";
import { Teacher } from "./pages/Teacher";
import { User } from "./pages/Users";
import { ViewTeacher } from "./pages/ViewTeacher";
import { ProtectedRoutes } from "./ProtectedRoutes";

interface IRouterProps {
  changeTheme: (theme: string) => void
}

export function Router({changeTheme}: IRouterProps) {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<DefaultLayout changeTheme={changeTheme} />}>
          <Route path="/inicio" element={<Home />} />
          <Route path="/professores" element={<Teacher />} />
          <Route path="/professor">
            <Route path=":teacherId" element={<ViewTeacher />} />
          </Route>
          <Route path="/ambientes" element={<Places />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cursos" element={<Course />} />
          <Route path="/aulas" element={<AdvancedSearch />} />
          <Route path="/dias-nao-letivos" element={<Holiday />} />
          <Route path="/usuarios" element={<User />} />
        </Route>
      </Route>
    </Routes>
  );
}
