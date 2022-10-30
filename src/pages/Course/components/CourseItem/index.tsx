import * as Dialog from "@radix-ui/react-dialog";
import { DotsThree, Pencil, Trash } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { z } from "zod";

import {
  CourseProps,
  ObjectsContext,
} from "../../../../Contexts/ObjectsContext";
import { EditCourseModal } from "../EditCourseModal";
import {
  CourseInfoType,
  CourseItemButton,
  CourseItemButtonContainer,
  CourseItemContainer,
  CourseItemIcon,
  CourseItemInfoContainer,
  CourseItemInfoContent,
  ItemInfoContentHeader,
} from "./style";

interface NewCouserModalProps {
  course: CourseProps;
}

export const courseInput = z.object({
  id: z.number(),
  nome: z.string(),
  tipoCurso: z.string(),
});

export type CourseType = z.infer<typeof courseInput>;

export function CourseItem({ course }: NewCouserModalProps) {
  const { deleteCourse } = useContext(ObjectsContext);

  useEffect(() => {
  }, [course]);

  const cargaHoraria = course.unidadeCurricular.reduce(
    (acc, unidades) => {
      acc.total += unidades.horas;
      return acc;
    },
    {
      total: 0,
    }
  );

  async function handleCourse(id: number) {
    deleteCourse(id);
  }

  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(false);
  }

  return (
    <CourseItemContainer>
      <CourseItemInfoContainer>
        <CourseItemIcon>
          <Pencil size={32} />
        </CourseItemIcon>

        <CourseItemInfoContent>
          <ItemInfoContentHeader>
            <h3>{course.nome}</h3>
            <CourseInfoType>{course.tipoCurso?.toLowerCase()}</CourseInfoType>
          </ItemInfoContentHeader>

          <p>
            Carga horária: <span>{cargaHoraria.total + "h"}</span>
          </p>
        </CourseItemInfoContent>
      </CourseItemInfoContainer>

      <CourseItemButtonContainer>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger
            style={{
              backgroundColor: "transparent",
              border: "none",
              display: "flex",
            }}
          >
            <CourseItemButton buttonColor="edit">
              <DotsThree color="#fff" size={32} />
            </CourseItemButton>
          </Dialog.Trigger>
          <EditCourseModal course={course} closeModal={closeModal} />
        </Dialog.Root>

        <CourseItemButton
          buttonColor="delete"
          onClick={() => handleCourse(course.id)}
        >
          <Trash color="#fff" size={26} />
        </CourseItemButton>
      </CourseItemButtonContainer>
    </CourseItemContainer>
  );
}
