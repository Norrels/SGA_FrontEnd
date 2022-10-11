import { Lightbulb, Warning } from "phosphor-react";
import { BarChart } from "./BarChart";
import { TeacherGraphContainer, TeacherGraphDescription, TeacherGraphLabel, TeacherGraphs, TeacherGraphSelects, TeacherGraphSubtitle, TeacherGraphSubtitles, TeacherGraphSubtitleSpan, TeacherGraphTextContainer } from "./styles";




export function TeacherGraph() {
  return (
    <TeacherGraphContainer>
      <TeacherGraphTextContainer>
        <TeacherGraphLabel>
          <h3>Professores</h3>
          <p>
            Carga horária do professores, com base
            <br /> nas aulas cadastradas no sistema
          </p>
        </TeacherGraphLabel>
        <TeacherGraphSelects>
          <select>
            <option>Jessica</option>
          </select>
          <select>
            <option>Semestral</option>
            <option>Mensal</option>
          </select>
        </TeacherGraphSelects>
      </TeacherGraphTextContainer>

      <TeacherGraphs>
        <BarChart/>
      </TeacherGraphs>


      <footer>
        <TeacherGraphDescription>
          <h5>
            <Lightbulb size={18} /> Jessica precisa fazer 39h para
            completar 80h nesse mês
          </h5>
          <h5>
            <Warning size={18} /> Jessica não possui aulas o suficiente
            para completar 80h
          </h5>
        </TeacherGraphDescription>


        <TeacherGraphSubtitles>
          <TeacherGraphSubtitle>
            <p>
              Horas cadastradas
            </p>
            <p>
              Horas contratuais
            </p>
          </TeacherGraphSubtitle>

          <TeacherGraphSubtitleSpan>
            <span></span>
            <span></span>
          </TeacherGraphSubtitleSpan>
        </TeacherGraphSubtitles>

      </footer>

    </TeacherGraphContainer>
  )
}