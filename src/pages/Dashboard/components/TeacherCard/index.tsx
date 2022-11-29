import { InclassTeacherProps } from "../InClassGraph";
import { TeacherCardContainer, TeacherCardText } from "./style";
import UserPicture from "../../../../assets/User.png"

export function TeacherCard({ professor } : InclassTeacherProps) {
  console.log(professor)

  return (
    <TeacherCardContainer  disponibilidade={professor ? 'emAula' : 'livre'} >
      <>{professor}</>
    </TeacherCardContainer>
  );
}
