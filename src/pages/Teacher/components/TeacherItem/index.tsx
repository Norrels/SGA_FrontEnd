import * as Dialog from "@radix-ui/react-dialog";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { DotsThree, Trash } from "phosphor-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import {
  ObjectsContext,
  TeacherProps,
} from "../../../../contexts/ObjectsContext";
import UserPicture from "../../../../assets/User.png";
import {
  ItemInfoContentHeader,
  TeacherInfoType,
  TeacherItemButton,
  TeacherItemButtonContainer,
  TeacherItemContainer,
  TeacherItemIcon,
  TeacherItemInfoContainer,
  TeacherItemInfoContent,
} from "./style";
import { DeleteAlert } from "../../../../components/DeleteAlert";

interface TeacherItemProps {
  teacherItem: TeacherProps;
}

export function TeacherItem({ teacherItem }: TeacherItemProps) {
  const { deleteTeacher } = useContext(ObjectsContext);

  function handleDeleteTeacher(){
    deleteTeacher(teacherItem.id!)
  }
  console.log(teacherItem)
  return (
    <TeacherItemContainer>
      <TeacherItemInfoContainer>
        <TeacherItemIcon>
          <img alt="" src={teacherItem.foto?.content ? teacherItem.foto?.content: UserPicture} />
        </TeacherItemIcon>

        <TeacherItemInfoContent>
          <ItemInfoContentHeader>
            <h3>{teacherItem.nome}</h3>
            <TeacherInfoType>Nada</TeacherInfoType>
          </ItemInfoContentHeader>
          <p>Carga horária: {teacherItem.cargaSemanal}hs</p>
        </TeacherItemInfoContent>
      </TeacherItemInfoContainer>

      <TeacherItemButtonContainer>
        <NavLink to={`/professor/${teacherItem.id}`}>
          <TeacherItemButton buttonColor="edit">
            <DotsThree color="#fff" size={32} />
          </TeacherItemButton>
        </NavLink>

        <AlertDialog.Root>
          <AlertDialog.Trigger asChild>
        <TeacherItemButton buttonColor="delete">
          <Trash
            color="#fff"
            size={26}
          />
        </TeacherItemButton>
        </AlertDialog.Trigger>
          <DeleteAlert deleteById={handleDeleteTeacher}/>
        </AlertDialog.Root>
      </TeacherItemButtonContainer>
    </TeacherItemContainer>
  );
}
