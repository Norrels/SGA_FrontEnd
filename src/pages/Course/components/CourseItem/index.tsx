import * as AlertDialog from "@radix-ui/react-alert-dialog";
import * as Dialog from "@radix-ui/react-dialog";
import { CheckCircle, DotsThree, Pencil, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { z } from "zod";
import {
  CourseProps,
  ResourcesContext,
} from "../../../../contexts/ResourcesContext";
import { DeleteAlert } from "../../../../components/DeleteAlert";
import { EditCourseModal } from "../EditCourseModal";

import {
  ItemButton,
  ItemIcon,
  ItemInfoContentHeader,
  ListInfoContent,
  ListItemContainer,
  ItemButtonContainer,
  InfoType,
} from "../../../../styles/listStyle";
import { ReactivateAlert } from "../../../../components/ReactivateAlert";

interface NewCouserModalProps {
  course: CourseProps;
}

export function CourseItem({ course }: NewCouserModalProps) {
  const { updateStatusCourse } = useContext(ResourcesContext);
  const [open, setOpen] = useState(false);

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
    updateStatusCourse(course.id!);
  }

  function closeModal() {
    setOpen(false);
  }

  return (
    <ListItemContainer>
      <ItemButtonContainer>
        <ItemIcon>
          <Pencil size={32} />
        </ItemIcon>

        <ListInfoContent>
          <ItemInfoContentHeader>
            <h3>{course.nome}</h3>
            <InfoType>{course.tipo?.toLowerCase()}</InfoType>
          </ItemInfoContentHeader>

          <p>
            Carga horária: <span>{cargaHoraria.total + "h"}</span>
          </p>
        </ListInfoContent>
      </ItemButtonContainer>

      <ItemButtonContainer>
        {course.ativo == false ? (
          <AlertDialog.Root>
            <AlertDialog.Trigger asChild>
              <ItemButton buttonColor="delete">
                <CheckCircle color="#fff" size={26} />
              </ItemButton>
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
                <ItemButton buttonColor="edit">
                  <DotsThree color="#fff" size={32} />
                </ItemButton>
              </Dialog.Trigger>
              <EditCourseModal course={course} closeModal={closeModal} />
            </Dialog.Root>

            <AlertDialog.Root>
              <AlertDialog.Trigger asChild>
                <ItemButton buttonColor="delete">
                  <Trash color="#fff" size={26} />
                </ItemButton>
              </AlertDialog.Trigger>
              <DeleteAlert deleteById={handleUpdateStatusCourse} />
            </AlertDialog.Root>
          </>
        )}
      </ItemButtonContainer>
    </ListItemContainer>
  );
}
