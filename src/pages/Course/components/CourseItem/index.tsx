import * as Dialog from "@radix-ui/react-dialog";
import { DotsThree, Pencil, Trash } from "phosphor-react";
import { CouseProps } from "../..";
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

export function CourseItem({course} : NewCouserModalProps) {
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
              {course.tipo}
            </CourseInfoType>
          </CourseItemInfoContent>
          <CourseItemInfoContent>
            <p>
              Carga horária: <span>{course.unidadeCurricular.horas}h</span>
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

        <CourseItemButton buttonColor="delete">
          <Trash color="#fff" size={25} />
        </CourseItemButton>
      </CourseItemButtonContainer>
    </CourseItemContainer>
  );
}
