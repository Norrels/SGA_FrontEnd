import {
  DashboardContent,
  DashContainer,
  DashContent,
  DashTitleContainer,
} from "./style";
import { TeacherGraph } from "./components/TeacherGraph";
import { ClassGraph } from "./components/ClassesGraph";
import { InClassGraph } from "./components/InClassGraph";

export function Dashboard() {
  document.title = "Dashboard | SGA";
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
            <ClassGraph />
          </div>

          <div>
            <InClassGraph />
          </div>
        </DashboardContent>
      </DashContent>
    </DashContainer>
  );
}
