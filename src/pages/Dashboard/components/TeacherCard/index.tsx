import { TeacherCardContainer, TeacherCardText } from "./style";

export function TeacherCard() {
  return (
    <TeacherCardContainer>
      <TeacherCardText>
        <img src="https://avatars.githubusercontent.com/u/82879012?v=4" />
        <div>
          <strong>Chile</strong>
          <p>Laboratorio 15</p>
        </div>
      </TeacherCardText>

      <span>Em Aula</span>
    </TeacherCardContainer>
  );
}
