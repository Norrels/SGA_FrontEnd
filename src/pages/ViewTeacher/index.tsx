import * as Dialog from "@radix-ui/react-dialog";
import { NotePencil, Star } from "phosphor-react";
import VisualzacaoProfessores from "../../assets/VisualizacaoProfessores.svg";
import { AbsenseItem } from "./components/AbsenseItem";
import { EditTeacherModal } from "./components/EditTeacherModal";
import {
  Absense,
  AbsenseList,
  Main,
  TeacherIndividualStars,
  TeacherMain,
  TeacherMainProfile,
  TeacherProfileContent,
  TeacherProfileLeft,
  TeacherProfileLeftPhoto,
  TeacherProfileSeparator,
  TeacherProfileSkills,
  TeacherSkillsIndividual,
} from "./style";

export function ViewTeacher() {
  return (
    <Main>
      <TeacherMain>
        <img src={VisualzacaoProfessores} />
        <TeacherMainProfile>
          <Dialog.Root>
            <Dialog.Trigger
              style={{
                backgroundColor: "transparent",
                border: "none",
                display: "flex",
              }}
            >
              <NotePencil size={32} opacity={0.5} />
            </Dialog.Trigger>

            {/* <EditTeacherModal /> */}
          </Dialog.Root>
          <TeacherProfileContent>
            <TeacherProfileLeft>
              <TeacherProfileLeftPhoto>
                <span>Em aula</span>
                <img />
              </TeacherProfileLeftPhoto>
              <p>Chile</p>
            </TeacherProfileLeft>
            <TeacherProfileSeparator></TeacherProfileSeparator>
            <TeacherProfileSkills>
              <h3>Competências:</h3>
              <TeacherSkillsIndividual>
                <p>Java</p>
                <TeacherIndividualStars>
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                </TeacherIndividualStars>
              </TeacherSkillsIndividual>
              <TeacherSkillsIndividual>
                <p>Java</p>
                <TeacherIndividualStars>
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                </TeacherIndividualStars>
              </TeacherSkillsIndividual>
              <TeacherSkillsIndividual>
                <p>Java</p>
                <TeacherIndividualStars>
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                </TeacherIndividualStars>
              </TeacherSkillsIndividual>
              <TeacherSkillsIndividual>
                <p>Java</p>
                <TeacherIndividualStars>
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                </TeacherIndividualStars>
              </TeacherSkillsIndividual>
              <TeacherSkillsIndividual>
                <p>Java</p>
                <TeacherIndividualStars>
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                </TeacherIndividualStars>
              </TeacherSkillsIndividual>
            </TeacherProfileSkills>
          </TeacherProfileContent>
        </TeacherMainProfile>
      </TeacherMain>
      <Absense>
        <input type="text" placeholder="Buscar ausência..." />

        <AbsenseList>
          <AbsenseItem />
        </AbsenseList>
      </Absense>
    </Main>
  );
}
