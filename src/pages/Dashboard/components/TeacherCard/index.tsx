import { InclassTeacherProps } from "../InClassGraph";
import { TeacherCardContainer, TeacherCardText } from "./style";



export function TeacherCard({ professor, emAula, ambientes } : InclassTeacherProps) {
  return (
    <TeacherCardContainer>
      <TeacherCardText>
        <img src="https://avatars.githubusercontent.com/u/82879012?v=4" />
        <div>
          <strong>{professor.nome}</strong>
          <p>{ambientes}</p>
        </div>
      </TeacherCardText>

      <span>{emAula ? "Em Aula" : "Livre"}</span>
    </TeacherCardContainer>
  );
}
