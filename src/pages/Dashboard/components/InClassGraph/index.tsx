import { useEffect, useState } from "react";
import { PlaceProps, TeacherProps } from "../../../../contexts/ObjectsContext";
import { API } from "../../../../lib/axios";
import { TeacherCard } from "../TeacherCard";
import { InClassContainer, InclassTeacherCards } from "./style";

export function InClassGraph() {
  const [teacherInClass, setTeacherInClass] = useState<String[]>([]);

  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    data.map((v) => {
      if (v.id > 0) {
        console.log(v.nome)

        setTeacherInClass([...teacherInClass, v.nome]);
      }
    });
  }, [data]);

  useEffect(() => {
    console.log(teacherInClass);
  }, [teacherInClass]);

  async function fetchTeachersInClass() {
    const res = await API.get("/professor/emAula");

    console.log(res)

    if (res.status == 200) {
      setData(res.data);
    }
  }

  useEffect(() => {
    fetchTeachersInClass();
  }, []);

  return (
    <InClassContainer>
      <h3>
        {teacherInClass.length == 0 ? "Nenhum professor econtrado" : "Em aula"}
      </h3>
      {/* {teacherInClass.length == 0 ?  : } */}
      <InclassTeacherCards>
        {/*  {teacherInClass.map((teacher) => {
          return (
            <>
            </>
          );
        })} */}
      </InclassTeacherCards>
    </InClassContainer>
  );
}
