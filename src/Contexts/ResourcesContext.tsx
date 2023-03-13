import { createContext, ReactNode, useEffect, useState } from "react";
import { API } from "../lib/axios";
import { NewPlaceType } from "../pages/Places/components/NewPlaceModal";

interface ResourcesContextProviderProps {
  children: ReactNode;
}

export interface TeacherProps {
  id?: string;
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
  id?: string;
  nome: string;
  capacidade?: number;
  tipo: string;
  cep?: string;
  endereco?: string;
  complemento?: string;
  ativo?: boolean;
}
[];

export interface CourseProps {
  id?: string;
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

interface ResourcesContextType {
  teachers: TeacherProps[];
  courses: CourseProps[];
  placesList: PlaceProps[];
  updateStatusTeacher: (id: string) => Promise<string>;
  updateStatusCourse: (id: string) => Promise<string>;
  updateStatusPlace: (id: string) => Promise<string>;
  updateTeachers: (data: TeacherProps) => Promise<string>;
  updatePlaces: (data: PlaceProps) => Promise<string>;
  updateCourses: (data: CourseProps) => Promise<string>;
  createTeacherAPI: (data: TeacherProps) => Promise<string>;
  createCourseAPI: (data: CourseProps) => Promise<string>;
  createPlacesAPI: (data: PlaceProps) => Promise<string>;
}

export const ResourcesContext = createContext({} as ResourcesContextType);

export function ResourcesContextProvider({
  children,
}: ResourcesContextProviderProps) {
  useEffect(() => {
    fetchPlaces();
    fetchTeachers();
    fetchCourses();
  }, []);

  const [teachers, setTeachers] = useState<TeacherProps[]>([]);
  const [courses, setCourses] = useState<CourseProps[]>([]);
  const [placesList, setPlacesList] = useState<PlaceProps[]>([]);

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
      setCourses([...courses, res.data[1]]);
      return "success";
    } else {
      return "erro";
    }
  }

  async function createPlacesAPI(data: PlaceProps) {
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
    try {
      const res = await API.get("ambiente");
      setPlacesList(res.data);
    } catch (error) {
      console.log("Não foi possivel carregar os ambientes");
    }
  }

  async function updateStatusPlace(id: string) {
    try {
      const res = await API.put(`/ambiente/alterarStatus/${id}`);

      const valorAtualizado = placesList.map((places) => {
        if (places.id == id) {
          places.ativo = !places.ativo;
        }
        return places;
      });
      setPlacesList(valorAtualizado);
      return "success";
    } catch (error) {
      console.log("error" + error);
      return "error";
    }
  }

  async function updateStatusCourse(id: string) {
    try {
      const res = await API.put(`/curso/alterarStatus/${id}`);
      const valorAtualizado = courses.filter((course) => {
        if (course.id == id) {
          course.ativo = !course.ativo;
        }
        return course;
      });
      setCourses(valorAtualizado);
      return "success";
    } catch (error) {
      return "erro";
    }
  }

  async function updateStatusTeacher(id: string) {
    try {
      const res = await API.put(`/professor/alterarStatus/${id}`);
      const valorAtualizado = teachers.map((professor) => {
        if (professor.id == id) {
          professor.ativo = !professor.ativo;
        }
        return professor;
      });
      setTeachers(valorAtualizado);
      return "success";
    } catch (error) {
      return "error";
    }
  }

  async function updateCourses(data: CourseProps) {
    const res = await API.put(`/curso/${data.id}`, data);
    console.log(data);
    if (res.status == 200) {
      const valorAtualizado = courses.map((course) => {
        if (course.id == data.id) {
          course = res.data;
          console.log(course);
        }
        return course;
      });
      setCourses(valorAtualizado);
      return "success";
    } else {
      return "erro";
    }
  }

  async function updatePlaces(data: PlaceProps) {
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
    console.log(data);
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
    <ResourcesContext.Provider
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
    </ResourcesContext.Provider>
  );
}
