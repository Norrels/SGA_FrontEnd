import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { DefaultLayoutSup } from "./layout/DefaultLayoutSup";
import { Admin } from "./pages/Users";
import AdvancedSearch from "./pages/AdvancedSearch";
import { Call } from "./pages/Call";
import { Course } from "./pages/Course";
import { Dashboard } from "./pages/Dashboard";
import { Holiday } from "./pages/Holiday/Index";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Places } from "./pages/Places";
import { Teacher } from "./pages/Teacher";
import { ViewTeacher } from "./pages/ViewTeacher";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/aulas" element={<Home />} />
        <Route path="/professores" element={<Teacher />} ></Route>
        <Route path="/professor" >
          <Route path=":teacherId" element={<ViewTeacher/>}/>
        </Route>
        <Route path="/ambientes" element={<Places />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cursos" element={<Course />} />
        <Route path="/dias-nao-letivos" element={<Holiday />} />
      </Route>

      <Route path="/busca-avancada" element={<AdvancedSearch />} />

      <Route path="/" element={<DefaultLayoutSup />}>
        <Route path="/chamadas" element={<Call />} />
        <Route path="/admins" element={<Admin />} />
      </Route>
    </Routes>
  );
}
