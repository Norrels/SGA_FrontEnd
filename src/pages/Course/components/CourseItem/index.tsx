import * as AlertDialog from "@radix-ui/react-alert-dialog";
import * as Dialog from "@radix-ui/react-dialog";

import { CheckCircle, DotsThree, Pencil, Trash } from "phosphor-react";
import { useContext, useEffect, useState } from "react";

import { z } from "zod";
import {
  CourseProps,
  ObjectsContext,
} from "../../../../contexts/ObjectsContext";
import { DeleteAlert } from "../../../../components/DeleteAlert";
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
import { ReactivateAlert } from "../../../../components/ReactivateAlert";

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
  const { updateStatusCourse } = useContext(ObjectsContext);

  useEffect(() => {}, [course]);

  const cargaHoraria = course.unidadeCurricular.reduce(
    (acc, unidades) => {
      acc.total += unidades.horas;
      return acc;
    },
    {
      total: 0,
    }
  );

  async function handleUpdateStatusCourse() {
    updateStatusCourse(course.id);
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
            <CourseInfoType>{course.tipo?.toLowerCase()}</CourseInfoType>
          </ItemInfoContentHeader>

          <p>
            Carga horária: <span>{cargaHoraria.total + "h"}</span>
          </p>
        </CourseItemInfoContent>
      </CourseItemInfoContainer>

      <CourseItemButtonContainer>
        {course.ativo == false ? (
          <AlertDialog.Root>
            <AlertDialog.Trigger asChild>
              <CourseItemButton buttonColor="delete">
                <CheckCircle color="#fff" size={26} />
              </CourseItemButton>
            </AlertDialog.Trigger>
            <ReactivateAlert reactivateById={handleUpdateStatusCourse} />
          </AlertDialog.Root>
        ) : (
          <>
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

            <AlertDialog.Root>
              <AlertDialog.Trigger asChild>
                <CourseItemButton buttonColor="delete">
                  <Trash color="#fff" size={26} />
                </CourseItemButton>
              </AlertDialog.Trigger>
              <DeleteAlert deleteById={handleUpdateStatusCourse} />
            </AlertDialog.Root>
          </>
        )}
      </CourseItemButtonContainer>
    </CourseItemContainer>
  );
}
