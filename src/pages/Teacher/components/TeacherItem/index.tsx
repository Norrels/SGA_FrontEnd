import * as Dialog from "@radix-ui/react-dialog";
import { DotsThree, Trash } from "phosphor-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ObjectsContext, Teacher } from "../../../../Contexts/ObjectsContext";
import {
  TeacherItemButton,
  TeacherItemButtonContainer,
  TeacherItemContainer,
  TeacherItemInfoContainer,
  TeacherItemInfoContent,
} from "./style";

interface TeacherItemProps {
  teacherItem: Teacher;
}

export function TeacherItem({ teacherItem }: TeacherItemProps) {

  const { deleteTeacher } = useContext(ObjectsContext)

  return (
    <TeacherItemContainer>
      <TeacherItemInfoContainer>
        <img alt="" src={teacherItem.foto} />

        <TeacherItemInfoContent>
          <h3>{teacherItem.nome}</h3>
          <p>Carga horária: {teacherItem.cargaSemanal}hs</p>
        </TeacherItemInfoContent>
      </TeacherItemInfoContainer>

      <TeacherItemButtonContainer>
        <NavLink to={`/professor/${teacherItem.id}`}>
          <DotsThree color="#000" size={25} />
        </NavLink>
        <TeacherItemButton buttonColor="delete">
          <Trash color="white" size={25}
            onClick={() => deleteTeacher(teacherItem.id)} />
        </TeacherItemButton>
      </TeacherItemButtonContainer>
    </TeacherItemContainer>
  );
}
