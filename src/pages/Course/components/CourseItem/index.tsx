import * as Dialog from "@radix-ui/react-dialog";
import { DotsThree, Pencil, Trash } from "phosphor-react";
import React from "react";
import { EditCourseModal } from "../EditCourseModal";
import {
  CourseDescription,
  CourseInfoType,
  CourseItemButton,
  CourseItemButtonContainer,
  CourseItemContainer,
  CourseItemIcon,
  CourseItemInfoContent,
} from "./style";

interface UnidadeCurricular {
  UnidadeCurricular: string,
  Horas: number
}[]

interface Course {
  id?: number;
  name?: string;
  tipoCurso?: string;
  cargaHoraria?: string;
  unidadeCurricular?: UnidadeCurricular[];
}

export function CourseItem({ id, name, tipoCurso, cargaHoraria, unidadeCurricular }: Course) {
  return (
    <CourseItemContainer>
      <CourseItemInfoContent>
        <CourseItemIcon>
          <Pencil size={30} />
        </CourseItemIcon>

        <CourseDescription>
          <CourseItemInfoContent>
            <h3>{name}</h3>
            <CourseInfoType>
              <p>{tipoCurso}</p>
            </CourseInfoType>
          </CourseItemInfoContent>
          <CourseItemInfoContent>
            <p>
              Carga horária: <span>{cargaHoraria}</span>
            </p>
          </CourseItemInfoContent>
        </CourseDescription>
      </CourseItemInfoContent>

      <CourseItemButtonContainer>
        <Dialog.Root>
          <Dialog.Trigger style={{border : "none"}}>
            <CourseItemButton buttonColor="edit">
              <DotsThree color="#000" size={25} />
            </CourseItemButton>
            
          </Dialog.Trigger>
          <EditCourseModal
              id={id}
              name={name}
              tipoCurso={tipoCurso}
              cargaHoraria={cargaHoraria}
              unidadeCurricular={unidadeCurricular}
              click={true}
            />
        </Dialog.Root>

        <CourseItemButton buttonColor="delete">
          <Trash color="#fff" size={25} />
        </CourseItemButton>
      </CourseItemButtonContainer>
    </CourseItemContainer>
  );
}
