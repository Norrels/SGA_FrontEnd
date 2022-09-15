import { Lightbulb, Warning } from "phosphor-react";
import {
  BlockBoard,
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
} from "./style";

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
                  <p>Horas feitas <span></span></p>
                </HoursWorkedDescription>
                <HoursWorkedDescription subTitleColor={2}>
                  <h5>
                    <Warning size={18} /> Jessica não possui aulas o suficiente
                    para completar 80h
                  </h5>
                  <p>Horas cadastradas <span></span></p>
                </HoursWorkedDescription>
              </BlockDescription>
            </FirstBlock>
          </DashLeftBoard>

          <DashRightBoard></DashRightBoard>
        </DashboardContent>
      </DashContent>
    </DashContainer>
  );
}
