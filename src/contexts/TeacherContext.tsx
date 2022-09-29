import { createContext, ReactNode, useEffect, useState } from "react";
import { API } from "../lib/axios";

interface TeacherContextProviderProps { 
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


interface TeacherContextType {
  teachers: Teacher[]
}


export const TeacherContext = createContext({} as TeacherContextType )

export function TeacherContextProvider({children} : TeacherContextProviderProps) {

  const [teachers, setTeachers] = useState<Teacher[]>([]);

  async function fetchTeachers() {
    const res = await API.get("professor");
    setTeachers(res.data);
  }

  useEffect(() => {
    fetchTeachers();
  }, []);

  function addNewTeacher(data: Teacher) {
    setTeachers([...teachers, data]);
  }

  return(
    <TeacherContext.Provider
      value={{
        teachers
       }}
    >
      {children}
    </TeacherContext.Provider>
  )
}