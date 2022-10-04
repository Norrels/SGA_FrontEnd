import { NotePencil, Star } from "phosphor-react";
import VisualzacaoProfessores from "../../assets/VisualizacaoProfessores.svg";
import { AbsenseItem } from "./components/AbsenseItem";
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
          <NotePencil size={32} opacity={0.5} />
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
            <AbsenseItem/>
        </AbsenseList>
      </Absense>
    </Main>
  );
}
