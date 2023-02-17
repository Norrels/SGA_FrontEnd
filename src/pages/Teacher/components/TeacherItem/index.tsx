import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { CheckCircle, DotsThree, Trash } from "phosphor-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import {
  ObjectsContext,
  TeacherProps,
} from "../../../../contexts/ObjectsContext";
import UserPicture from "../../../../assets/User.png";
import { DeleteAlert } from "../../../../components/DeleteAlert";
import { ReactivateAlert } from "../../../../components/ReactivateAlert";
import {
  ItemButton,
  ItemButtonContainer,
  ItemIcon,
  ItemInfoContentHeader,
  ListInfoContent,
  ListItemContainer,
  ListItemContent,
} from "../../../../styles/listStyle";

interface TeacherItemProps {
  teacherItem: TeacherProps;
}

export function TeacherItem({ teacherItem }: TeacherItemProps) {
  const { updateStatusTeacher } = useContext(ObjectsContext);

  async function handleUpdateStatusTeacher() {
    updateStatusTeacher(teacherItem.id!);
  }

  return (
    <ListItemContainer>
      <ListItemContent>
        <ItemIcon>
          <img alt="" src={teacherItem.foto ? teacherItem.foto : UserPicture} />
        </ItemIcon>

        <ListInfoContent>
          <ItemInfoContentHeader>
            <h3>{teacherItem.nome}</h3>
          </ItemInfoContentHeader>
          <p>
            Carga horária semanal: <strong>{teacherItem.cargaSemanal}h</strong>
          </p>
        </ListInfoContent>
      </ListItemContent>

      <ItemButtonContainer>
        {teacherItem.ativo == false ? (
          <AlertDialog.Root>
            <AlertDialog.Trigger asChild>
              <ItemButton buttonColor="delete">
                <CheckCircle color="#fff" size={26} />
              </ItemButton>
            </AlertDialog.Trigger>
            <ReactivateAlert reactivateById={handleUpdateStatusTeacher} />
          </AlertDialog.Root>
        ) : (
          <>
            <NavLink to={`/professor/${teacherItem.id}`}>
              <ItemButton buttonColor="edit">
                <DotsThree color="#fff" size={32} />
              </ItemButton>
            </NavLink>

            <AlertDialog.Root>
              <AlertDialog.Trigger asChild>
                <ItemButton buttonColor="delete">
                  <Trash color="#fff" size={26} />
                </ItemButton>
              </AlertDialog.Trigger>
              <DeleteAlert deleteById={handleUpdateStatusTeacher} />
            </AlertDialog.Root>
          </>
        )}
      </ItemButtonContainer>
    </ListItemContainer>
  );
}
