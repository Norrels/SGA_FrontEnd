import {
  DashboardContent,
  DashContainer,
  DashContent,
} from "./style";
import { TeacherGraph } from "./components/TeacherGraph";
import { ClassGraph } from "./components/ClassesGraph";
import { InClassGraph } from "./components/InClassGraph";
import { Heading } from "../Components/Heading";

export function Dashboard() {
  document.title = "Dashboard | SGA";
  return (
    <DashContainer>
      <DashContent>
        <Heading title="Dashboard" subtitle="Informações gerais do sistema" />

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
