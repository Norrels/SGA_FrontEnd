import { InclassTeacherProps } from "../InClassGraph";
import { TeacherCardContainer, TeacherCardText } from "./style";
import UserPicture from "../../../../assets/User.png"

export function TeacherCard({ professor, emAula, ambiente } : InclassTeacherProps) {
  console.log(professor)
  return (
    <TeacherCardContainer disponibilidade={emAula ? 'emAula' : 'livre'}>
      <TeacherCardText>
        <img src={UserPicture} />
        <div>
          <strong>{professor.nome}</strong>
          <p>{ambiente? ambiente.nome : 'Disponível'}</p>
        </div>
      </TeacherCardText>

      <span>{emAula ? "Em Aula" : "Livre"}</span>
    </TeacherCardContainer>
  );
}
