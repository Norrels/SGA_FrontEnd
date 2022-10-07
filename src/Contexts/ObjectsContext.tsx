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

export interface PlaceProps {
  id: number;
  nome: string;
  capacidade: number;
  tipoAmbiente: string;
  cep: string;
  complemento: string;
  ativo: boolean;
}
[];

export interface CourseProps {
  id: number;
  nome: string;
  tipoCurso: string;
  ativo: boolean
}[]

interface ObjectsContextType {
  teachers: Teacher[]
  courses: CourseProps[]
  placesList: PlaceProps[]
  deleteTeacher: (id : number) => void
  deleteCourse: (id: number) => void
  deletePlace: (id: number) => void
  updateTeaches: (data: Teacher) => void
  updatePlaces: (data: PlaceProps) => void
  updateCourses: (data: CourseProps) => void
  createTeacherAPI: (data: Teacher) => void
  createCourseAPI: (data: CourseProps) => void
  createPlacesAPI: (data: PlaceProps) => void
}

export const ObjectsContext = createContext({} as ObjectsContextType)

export function ObjectsContextProvider({ children }: ObjectsContextProviderProps) {

  useEffect(() => {
    fetchPlaces();
    fetchTeachers();
    fetchCourses();
  }, []);

  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [courses, setCourses] = useState<CourseProps[]>([]);
  const [placesList, setPlacesList] = useState<PlaceProps[]>([]);

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

  async function createPlacesAPI(data: PlaceProps) {
    const res = await API.post("ambiente", data);
    if (res.status == 200) {
      data.id = res.data[1]
      setPlacesList([...placesList, data]);
    }
  }

  async function fetchCourses() {
    const res = await API.get("curso");
    setCourses(res.data);
  }

  async function fetchPlaces() {
    const res = await API.get("ambiente");
    setPlacesList(res.data);
  }

  async function deletePlace(id: number) {
    const res = await API.put(`/ambiente/inativar/${id}`);
  
    if (res.status == 200) {
      const valorAtualizado = placesList.filter((place) => {
        return place.id != id
      })
      setPlacesList(valorAtualizado);
    }
  }

  async function deleteCourse(id: number) {
    const res = await API.put(`/curso/inativar/${id}`);
  
    if (res.status == 200) {
      const valorAtualizado = courses.filter((course) => {
        return course.id != id
      })
      setCourses(valorAtualizado);
    }
  }

  async function deleteTeacher(id: number) {
    const res = await API.put(`/professor/desativar/${id}`);
  
    if (res.status == 200) {
      const valorAtualizado = teachers.filter((professor) => {
        return professor.id != id
      })
      setTeachers(valorAtualizado);
    }
  }

  async function updateCourses(data: CourseProps) {
    const res = await API.put(`/curso/${data.id}`, data);
    
    if (res.status == 200) {
      const valorAtualizado = courses.map((course) => {
        if(course.id == data.id) {
          course = data
        }
        return course
      })
      setCourses(valorAtualizado);
    }
  }

  async function updatePlaces(data: PlaceProps) {
    //Mudar essa logica - Colocar um input hiden no form com um register se o o lugar está ativo
    data.ativo = true
    const res = await API.put(`/ambiente/${data.id}`, data);
    
    if (res.status == 200) {
      const valorAtualizado = placesList.map((place) => {
        if(place.id == data.id) {
          place = data
        }
        return place
      })
      setPlacesList(valorAtualizado);
    }
  }

  async function updateTeaches(data: Teacher) {
    //Mudar essa logica - Colocar um input hiden no form com um register se o o lugar está ativo
    data.ativo = true
    const res = await API.put(`/professores/${data.id}`, data);
    
    if (res.status == 200) {
      const valorAtualizado = teachers.map((teacher) => {
        if(teacher.id == data.id) {
          teacher = data
        }
        return teacher
      })
      setTeachers(valorAtualizado);
    }
  }

  return (
    <ObjectsContext.Provider
      value={{
        deleteTeacher,
        updateTeaches,
        deleteCourse,
        updateCourses,
        deletePlace,
        updatePlaces,
        createPlacesAPI,
        placesList,
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