import * as Dialog from "@radix-ui/react-dialog";
import { DotsThree, Pencil, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { z } from "zod";

import { CourseProps, ObjectsContext } from "../../../../Contexts/ObjectsContext";
import { EditCourseModal } from "../EditCourseModal";
import {
  CourseInfoType,
  CourseItemButton,
  CourseItemButtonContainer,
  CourseItemContainer,
  CourseItemIcon,
  CourseItemInfoContent,
} from "./style";

interface NewCouserModalProps {
  course: CourseProps;
}

export const courseInput = z.object({
  id: z.number(),
  nome: z.string(),
  tipoCurso: z.string(),
})

export type CourseType = z.infer<typeof courseInput>

export function CourseItem({course} : NewCouserModalProps) {
  const { deleteCourse } = useContext(ObjectsContext)

  async function handleCourse(id : number) {
     deleteCourse(id)
  }

  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(false);
  }

  return (
    <CourseItemContainer>
      <CourseItemInfoContent>
        <CourseItemIcon>
          <Pencil size={30} />
        </CourseItemIcon>

        <article>
          <CourseItemInfoContent>
            <h3>{course.nome}</h3>
            <CourseInfoType>
              {course.tipoCurso.toLowerCase()}
            </CourseInfoType>
          </CourseItemInfoContent>
          <CourseItemInfoContent>
            <p>
              Carga horária: <span>{/* {course.unidadeCurricular.horas} */}h</span>
            </p>
          </CourseItemInfoContent>
        </article>
      </CourseItemInfoContent>

      <CourseItemButtonContainer>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger>
            <CourseItemButton buttonColor="edit">
              <DotsThree color="#fff" size={25} />
            </CourseItemButton>
          </Dialog.Trigger>
          <EditCourseModal
            course={course}
            closeModal={closeModal}
          />
        </Dialog.Root>

        <CourseItemButton buttonColor="delete" onClick={() => handleCourse(course.id)}>
          <Trash color="#fff" size={25} />
        </CourseItemButton>
      </CourseItemButtonContainer>
    </CourseItemContainer>
  );
}
