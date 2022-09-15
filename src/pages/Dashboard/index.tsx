import {
  ArrowDown,
  ArrowUp,
  Clock,
  Info,
  Lightbulb,
  Moon,
  Sun,
  SunHorizon,
  Warning,
} from "phosphor-react";
import {
  BlockBoard,
  BlockDay,
  BlockDescription,
  BlockText,
  DashboardContent,
  DashContainer,
  DashContent,
  DashLeftBoard,
  DashRightBoard,
  DashTitleContainer,
  FirstBlock,
  FirstSelectBlock,
  FirtTextBlock,
  HoursWorkedDescription,
  SecondBlock,
  SecondBlockContainer,
  SecondBlockContent,
  TeacherClassContainer,
  ThreeBlock,
} from "./style";
import {TeacherClass} from "./components/TeacherClass"

export function Dashboard() {
  return (
    <DashContainer>
      <DashContent>
        <DashTitleContainer>
          <h1>Dashboard</h1>
          <p>Informações gerais do sistema</p>
        </DashTitleContainer>

        <DashboardContent>
          <DashLeftBoard>
            <FirstBlock>
              <BlockText>
                <FirtTextBlock>
                  <h3>Professores</h3>
                  <p>
                    Carga horária do professores, com base
                    <br /> nas aulas cadastradas no sistema
                  </p>
                </FirtTextBlock>
                <FirstSelectBlock>
                  <select>
                    <option>Jessica</option>
                  </select>
                  <select>
                    <option>Semestral</option>
                    <option>Mensal</option>
                  </select>
                </FirstSelectBlock>
              </BlockText>
              <BlockBoard></BlockBoard>
              <BlockDescription>
                <HoursWorkedDescription subTitleColor={1}>
                  <h5>
                    <Lightbulb size={18} /> Jessica precisa fazer 39h para
                    completar 80h nesse mês
                  </h5>
                  <p>
                    Horas feitas <span></span>
                  </p>
                </HoursWorkedDescription>
                <HoursWorkedDescription subTitleColor={2}>
                  <h5>
                    <Warning size={18} /> Jessica não possui aulas o suficiente
                    para completar 80h
                  </h5>
                  <p>
                    Horas cadastradas <span></span>
                  </p>
                </HoursWorkedDescription>
              </BlockDescription>
            </FirstBlock>

            <SecondBlock>
              <SecondBlockContainer>
                <SecondBlockContent>
                  <h3>Aulas</h3>
                  <br />
                  <p>
                    Estaticas gerais
                    <br /> por aulas em relação
                    <br /> ao mes anterior
                  </p>
                </SecondBlockContent>
                <SecondBlockContent>
                  <BlockDay arrow={1}>
                    <span>
                      <Sun size={24} />
                    </span>
                    <p>Manhã</p>
                    <h2>
                      20 <ArrowUp size={20} />
                    </h2>
                  </BlockDay>
                </SecondBlockContent>
                <SecondBlockContent>
                  <BlockDay arrow={1}>
                    <span>
                      <SunHorizon size={24} />
                    </span>
                    <p>Tarde</p>
                    <h2>
                      22 <ArrowUp size={20} />
                    </h2>
                  </BlockDay>
                </SecondBlockContent>
                <SecondBlockContent>
                  <BlockDay arrow={2}>
                    <span>
                      <Moon size={24} />
                    </span>
                    <p>Noite</p>
                    <h2>
                      9 <ArrowDown size={20} />
                    </h2>
                  </BlockDay>
                </SecondBlockContent>
                <SecondBlockContent>
                  <BlockDay arrow={1}>
                    <span>
                      <Clock size={24} />
                    </span>
                    <p>Integral</p>
                    <h2>
                      5 <ArrowUp size={20} />
                    </h2>
                  </BlockDay>
                </SecondBlockContent>
              </SecondBlockContainer>
            </SecondBlock>
          </DashLeftBoard>

          <DashRightBoard>
            <ThreeBlock>
              <BlockText>
                <h3>Em Aula</h3>
                <Info size={32} />
              </BlockText>
              <TeacherClassContainer>
                <TeacherClass />
                <TeacherClass />
                <TeacherClass />
                <TeacherClass />
                <TeacherClass />
                <TeacherClass />
                <TeacherClass />
                <TeacherClass />
                <TeacherClass />
                <TeacherClass />
                <TeacherClass />
                <TeacherClass />
                <TeacherClass />
                <TeacherClass />
                <TeacherClass />
              </TeacherClassContainer>
            </ThreeBlock>
          </DashRightBoard>
        </DashboardContent>
      </DashContent>
    </DashContainer>
  );
}
