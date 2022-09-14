import { Routes, Route } from "react-router-dom"
import { Course } from "./pages/Course"
import { Dashboard } from "./pages/Dashboard"
import { Home } from "./pages/Home"
import { Places } from "./pages/Places"
import { Teacher } from "./pages/Teacher"

export function Router() {
  return(
    <Routes>
      {/* O login precisa vai ser feito depois */}
      <Route path="/" element={<Home/>}/>
      <Route path="/professores" element={<Teacher/>}/>
      <Route path="/ambientes" element={<Places/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/cursos" element={<Course/>}/>
    </Routes>
  )
}