import { Info } from "phosphor-react";
import { BlockText, DashRightBoard, TeacherClassContainer, ThreeBlock } from "../../style";
import { TeacherCard } from "../TeacherCard";
import { InClassContainer, InclassTeacherCards } from "./style";

export function InClassGraph() {
    return (
        
        <InClassContainer>
     
            <h3>Em aula</h3>
    
          <InclassTeacherCards>
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
          </InclassTeacherCards>
        </InClassContainer>
      
    )
}