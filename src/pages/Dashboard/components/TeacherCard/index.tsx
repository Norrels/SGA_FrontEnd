import { InclassTeacherProps } from "../InClassGraph";
import { TeacherCardContainer, TeacherCardText } from "./style";
import UserPicture from "../../../../assets/User.png";

export function TeacherCard({
  professor,
  emAula,
  ambiente,
}: InclassTeacherProps) {

  return (
    <TeacherCardContainer disponibilidade={professor ? "emAula" : "livre"}>
      <TeacherCardText>
        <img alt="" src={professor.foto ? professor.foto : UserPicture} />
        <div>
          <strong>{professor.nome}</strong>
          <p>{ambiente == null ? "Livre" : ambiente.nome}</p>
        </div>
      </TeacherCardText>
      <span>{emAula ? "Em Aula" : "Livre"}</span>
    </TeacherCardContainer>
  );
}
