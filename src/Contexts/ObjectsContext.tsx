import { createContext, ReactNode, useEffect, useState } from "react";
import { API } from "../lib/axios";
import { NewPlaceType } from "../pages/Places/components/NewPlaceModal";

interface ObjectsContextProviderProps {
  children: ReactNode;
}

export interface TeacherProps {
  id?: number;
  nome?: string;
  cargaSemanal: number;
  ativo?: boolean;
  foto?: string;
  email: string;
  competencia: {
    nivel: number;
    unidadeCurricular: {
      id: number;
      nome?: string;
    };
  }[];
}
[];

export interface PlaceProps {
  id: number;
  nome: string;
  capacidade: number;
  tipo: string;
  cep: string;
  endereco: string;
  complemento: string;
  ativo: boolean;
}
[];

export interface CourseProps {
  id?: number;
  nome: string;
  tipo: string;
  ativo?: boolean;
  unidadeCurricular: {
    id?: number | null;
    nome: string;
    horas: number;
  }[];
}
[];

interface ObjectsContextType {
  teachers: TeacherProps[];
  courses: CourseProps[];
  placesList: NewPlaceType[];
  updateStatusTeacher: (id: number) => Promise<string>;
  updateStatusCourse: (id: number) => Promise<string>;
  updateStatusPlace: (id: number) => Promise<string>;
  updateTeachers: (data: TeacherProps) => Promise<string>;
  updatePlaces: (data: NewPlaceType) => Promise<string>;
  updateCourses: (data: CourseProps) => Promise<string>;
  createTeacherAPI: (data: TeacherProps) => Promise<string>;
  createCourseAPI: (data: CourseProps) => Promise<string>;
  createPlacesAPI: (data: NewPlaceType) => Promise<string>;
}

export const ObjectsContext = createContext({} as ObjectsContextType);

export function ObjectsContextProvider({
  children,
}: ObjectsContextProviderProps) {
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
      data.id = res.data[1];
      setTeachers([...teachers, data]);
      return "success";
    } else {
      return "erro";
    }
  }

  async function createCourseAPI(data: CourseProps) {
    const res = await API.post("/curso", data);
    if (res.status == 200) {
      data.id = res.data[1];
      setCourses([...courses, data]);
      return "success";
    } else {
      return "erro";
    }
  }

  async function createPlacesAPI(data: NewPlaceType) {
    const res = await API.post("ambiente", data);
    if (res.status == 200) {
      data.id = res.data[1];
      setPlacesList([...placesList, data]);
      return "success";
    } else {
      return "erro";
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

  async function updateStatusPlace(id: number) {
    const res = await API.put(`/ambiente/alterarStatus/${id}`);

    if (res.status == 200) {
      const valorAtualizado = placesList.filter((place) => {
        return place.id != id;
      });
      setPlacesList(valorAtualizado);
      return "success";
    } else {
      return "erro";
    }
  }

  async function updateStatusCourse(id: number | undefined) {
    const res = await API.put(`/curso/alterarStatus/${id}`);

    if (res.status == 200) {
      const valorAtualizado = courses.filter((course) => {
        return course.id != id;
      });
      setCourses(valorAtualizado);
      return "success";
    } else {
      return "erro";
    }
  }

  async function updateStatusTeacher(id: number) {
    const res = await API.put(`/professor/alterarStatus/${id}`);

    if (res.status == 200) {
      const valorAtualizado = teachers.filter((professor) => {
        return professor.id != id;
      });
      setTeachers(valorAtualizado);
      return "success";
    } else {
      return "erro";
    }
  }

  async function updateCourses(data: CourseProps) {
    const res = await API.put(`/curso/${data.id}`, data);

    if (res.status == 200) {
      const valorAtualizado = courses.map((course) => {
        if (course.id == data.id) {
          course = data;
        }
        return course;
      });
      setCourses(valorAtualizado);
      return "success";
    } else {
      return "erro";
    }
  }

  async function updatePlaces(data: NewPlaceType) {
    //Mudar essa logica - Colocar um input hiden no form com um register se o o lugar está ativo
    data.ativo = true;
    const res = await API.put(`/ambiente/${data.id}`, data);

    if (res.status == 200) {
      const valorAtualizado = placesList.map((place) => {
        if (place.id == data.id) {
          place = data;
        }
        return place;
      });
      setPlacesList(valorAtualizado);
      return "success";
    } else {
      return "erro";
    }
  }

  async function updateTeachers(data: TeacherProps) {
    //Mudar essa logica - Colocar um input hiden no form com um register se o o lugar está ativo
    data.ativo = true;
    const res = await API.put(`/professor/${data.id}`, data);
    console.log(data)
    if (res.status == 200) {
      const valorAtualizado = teachers.map((teacher) => {
        if (teacher.id == data.id) {
          teacher = data;
        }
        return teacher;
      });
      setTeachers(valorAtualizado);
      return "success";
    } else {
      return "erro";
    }
  }

  return (
    <ObjectsContext.Provider
      value={{
        updateStatusTeacher,
        updateTeachers,
        updateStatusCourse,
        updateCourses,
        updateStatusPlace,
        updatePlaces,
        createPlacesAPI,
        placesList,
        teachers,
        courses,
        createTeacherAPI,
        createCourseAPI,
      }}
    >
      {children}
    </ObjectsContext.Provider>
  );
}
