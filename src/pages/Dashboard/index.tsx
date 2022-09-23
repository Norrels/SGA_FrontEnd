import {
  ArrowDown,
  ArrowUp,
  Clock,
  Info,
  Moon,
  Sun,
  SunHorizon,

} from "phosphor-react";
import {
  BlockDay,
  BlockText,
  DashboardContent,
  DashContainer,
  DashContent,
  DashRightBoard,
  DashTitleContainer,
  SecondBlock,
  SecondBlockContainer,
  SecondBlockContent,
  TeacherClassContainer,
  ThreeBlock,
} from "./style";
import { TeacherClass } from "./components/TeacherClass"
import { TeacherGraph } from "./components/TeacherGraph";
import { ClassGraph } from "./components/ClassesGraph";

export function Dashboard() {
  return (
    <DashContainer>
      <DashContent>
        <DashTitleContainer>
          <h1>Dashboard</h1>
          <p>Informações gerais do sistema</p>
        </DashTitleContainer>

        <DashboardContent>

          <div>
            <TeacherGraph />
            <ClassGraph/>
          </div>





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
