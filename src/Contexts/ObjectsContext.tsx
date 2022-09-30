import { createContext, ReactNode, useEffect, useState } from "react";
import { API } from "../lib/axios";

interface ObjectsContextProviderProps {
  children: ReactNode;
}

export interface Teacher {
  id: number;
  nome: string;
  cargaSemanal: number;
  ativo: boolean;
  foto?: string;
  email: string;
  competencia: {
    id: number;
    unidadeCurricular: string;
    nivelHabilidade: string;
    nivel: number;
  }[];
}
[];


export interface CourseProps {
  id: string;
  nome: string;
  tipoCurso: string;
}[]


interface ObjectsContextType {
  teachers: Teacher[]
  courses: CourseProps[]
  createTeacherAPI: (data: Teacher) => void
  createCourseAPI: (data: CourseProps) => void
}


export const ObjectsContext = createContext({} as ObjectsContextType)

export function ObjectsContextProvider({ children }: ObjectsContextProviderProps) {

  useEffect(() => {
    fetchTeachers();
    fetchCourses()
  }, []);

  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [courses, setCourses] = useState<CourseProps[]>([]);

  async function fetchTeachers() {
    const res = await API.get("professor");
    setTeachers(res.data);
  }

  async function createTeacherAPI(data: Teacher) {
    const res = await API.post("/professor", data);
    if (res.status == 200) {
      data.id = res.data[1]
      setTeachers([...teachers, data]);
    }
  }

  async function createCourseAPI(data: CourseProps) {
    const res = await API.post("/curso", data);
    if (res.status == 200) {
      data.id = res.data[1]
      setCourses([...courses, data]);
    }
  }

  async function fetchCourses() {
    const res = await API.get("curso");
    setCourses(res.data);
  }

  return (
    <ObjectsContext.Provider
      value={{
        teachers,
        createTeacherAPI,
        courses,
        createCourseAPI
      }}
    >
      {children}
    </ObjectsContext.Provider>
  )
}