import * as Dialog from "@radix-ui/react-dialog";
import { DotsThree, Pencil, Trash } from "phosphor-react";
import { z } from "zod";
import { CouseProps } from "../..";
import { API } from "../../../../lib/axios";
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
  course: CouseProps;
}

export const courseInput = z.object({
  id: z.string(),
  nome: z.string(),
  tipoCurso: z.string(),
})

export type CourseType = z.infer<typeof courseInput>

export function CourseItem({course} : NewCouserModalProps) {
  
  async function deleteCourseAPI(course : CourseType) {
      const res = await API.delete(`curso/${course.id}`);

      if(res.status == 200) {

      }
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
              {course.tipoCurso}
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
        <Dialog.Root>
          <Dialog.Trigger>
            <CourseItemButton buttonColor="edit">
              <DotsThree color="#fff" size={25} />
            </CourseItemButton>
          </Dialog.Trigger>
          <EditCourseModal/>
        </Dialog.Root>

        <CourseItemButton buttonColor="delete" onClick={() => deleteCourseAPI(course)}>
          <Trash color="#fff" size={25} />
        </CourseItemButton>
      </CourseItemButtonContainer>
    </CourseItemContainer>
  );
}
