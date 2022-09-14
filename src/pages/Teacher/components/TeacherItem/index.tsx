import { DotsThree, Trash } from "phosphor-react";
import { TeacherItemButton, TeacherItemButtonContainer, TeacherItemContainer, TeacherItemInfoContainer, TeacherItemInfoContent,  } from "./style";

export function TeacherItem() {
  return (
    <TeacherItemContainer>
      <TeacherItemInfoContainer>
        <img
          src="https://avatars.githubusercontent.com/u/54322854?v=4"
          alt=""
        />

        <TeacherItemInfoContent>
          <h3>Rafaela Balarini</h3>
          <p>Carga horária: 40hs</p>
        </TeacherItemInfoContent>
      </TeacherItemInfoContainer>

      <TeacherItemButtonContainer>
        <TeacherItemButton buttonColor="edit">
          <DotsThree color="#000" size={25} />
        </TeacherItemButton>
        <TeacherItemButton buttonColor="delete">
          <Trash color="#fff" size={25}/>
        </TeacherItemButton>
      </TeacherItemButtonContainer>
    </TeacherItemContainer>
  );
}
