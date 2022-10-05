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
  id: string;
  nome: string;
  tipoCurso: string;
}[]

interface ObjectsContextType {
  teachers: Teacher[]
  courses: CourseProps[]
  placesList: PlaceProps[]
  deletePlace: (id: number) => void
  updatePlaces: (data: PlaceProps) => void
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

  async function fetchCourses() {
    const res = await API.get("curso");
    setCourses(res.data);
  }

  async function fetchPlaces() {
    const res = await API.get("ambiente");
    setPlacesList(res.data);
  }

  async function createPlacesAPI(data: PlaceProps) {
    const res = await API.post("ambiente", data);
    if (res.status == 200) {
      data.id = res.data[1]
      setPlacesList([...placesList, data]);
    }
  }

  async function updatePlaces(data: PlaceProps) {
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

  
  async function deletePlace(id: number) {
    const res = await API.put(`/ambiente/inativar/${id}`);
  
    if (res.status == 200) {
      const valorAtualizado = placesList.filter((place) => {
        return place.id != id
      })
      setPlacesList(valorAtualizado);
    }
  }

  return (
    <ObjectsContext.Provider
      value={{
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