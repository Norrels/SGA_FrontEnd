import { createContext, ReactNode, useEffect, useState } from "react";
import { API } from "../lib/axios";
import { NewPlaceType } from "../pages/Places/components/NewPlaceModal";

interface ObjectsContextProviderProps {
  children: ReactNode;
}

export interface TeacherProps {
  id?: number;
  nome: string;
  cargaSemanal: number;
  ativo?: boolean;
  foto?: string;
  email: string;
  competencia: {
    nivel: number;
    unidadeCurricular: {
      id: number;
      nome?: string;
    }
  }[];
}
[];

export interface PlaceProps {
  id: number;
  nome: string;
  capacidade: number;
  tipo: string;
  cep: string;
  /* endereco: string; */
  complemento: string;
  ativo: boolean;
}
[];

export interface CourseProps {
  id?: number;
  nome: string;
  tipo: string;
  ativo?: boolean
  unidadeCurricular: 
    {
      id?: number | null;
      nome: string;
      horas: number
    }[]
}[]

interface ObjectsContextType {
  teachers: TeacherProps[]
  courses: CourseProps[]
  placesList: NewPlaceType[]
  deleteTeacher: (id : number) => void
  deleteCourse: (id: number | undefined) => void
  deletePlace: (id: number) => void
  updateTeaches: (data: TeacherProps) => void
  updatePlaces: (data: NewPlaceType) => void
  updateCourses: (data: CourseProps) => void
  createTeacherAPI: (data: TeacherProps) => void
  createCourseAPI: (data: CourseProps) => Promise<number>
  createPlacesAPI: (data: NewPlaceType) => void
}

export const ObjectsContext = createContext({} as ObjectsContextType)

export function ObjectsContextProvider({ children }: ObjectsContextProviderProps) {

  useEffect(() => {
    fetchPlaces();
    fetchTeachers();
    fetchCourses();
  }, []);

  const [teachers, setTeachers] = useState<TeacherProps[]>([]);
  const [courses, setCourses] = useState<CourseProps[]>([]);
  const [placesList, setPlacesList] = useState<NewPlaceType[]>([]);

  async function fetchTeachers() {
    const res = await API.get("professor");
    setTeachers(res.data);
  }

  async function createTeacherAPI(data: TeacherProps) {
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

    return res.status
  }

  async function createPlacesAPI(data: NewPlaceType) {
    
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

  async function deleteCourse(id: number | undefined) {
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

  async function updatePlaces(data: NewPlaceType) {
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

  async function updateTeaches(data: TeacherProps) {
    //Mudar essa logica - Colocar um input hiden no form com um register se o o lugar está ativo
    data.ativo = true
    const res = await API.put(`/professor/${data.id}`, data);
    
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
        courses,
        createTeacherAPI,
        createCourseAPI
      }}
    >
      {children}
    </ObjectsContext.Provider>
  )
}