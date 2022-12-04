//Transforma o calculo da carga horaria em um customhook para coloca na info da carga horaria

import { format } from "date-fns";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { ObjectsContext } from "../../../../../../contexts/ObjectsContext";
import { API } from "../../../../../../lib/axios";
import { FinalButton, InputContainer, InputContent, Steps, SummaryContainer, SummaryContent, SummaryDetails, SummaryHeader } from "../../style";

interface ThirdStepContentProps {
  lastDay: string
}

export function ThirdStepContent({ lastDay }: ThirdStepContentProps) {

  const { getValues } = useFormContext();

  const { teachers, placesList, courses } = useContext(ObjectsContext);

  const course = courses.find(c => c.id == getValues("curso.id"))
  const place = placesList.find(c => c.id == getValues("ambiente.id"))
  const teacher = teachers.find(c => c.id == getValues("professor.id"))
  const unidadeCurricular = course?.unidadeCurricular.find(c => c.id == getValues("unidadeCurricular.id"))
  const periodo: string = getValues("periodo")
  const dataInico = new Date(getValues("dataInicio"))
  const dataFim = new Date(lastDay)
  const dias: [] = getValues("diaSemana")

  const diasSemana = dias.map((dia, index) => {
    if (dia == true) {
      
      switch (index) {
        case 0:
          return "Dom"
          break;
        case 1:
          return "Seg"
          break;
        case 2:
          return "Ter"
          break;
        case 3:
          return "Qua"
          break;
        case 4:
          return "Qui"
          break;
        case 5:
          return "Sex"
          break;
        case 6:
          return "Sab"
          break;
      }
    }
  })

  return (
    <InputContainer>
      <InputContent>
        <span>
          Esses são os professores e ambientes disponíveis com base
          nos dados informados anteriormente...
        </span>
      </InputContent>
      <InputContent>
        <label>Passo 3 de 3</label>
        <Steps>
          <div style={{ backgroundColor: "#367FBF" }}></div>
          <div style={{ backgroundColor: "#367FBF" }}></div>
          <div style={{ backgroundColor: "#367FBF" }}></div>
        </Steps>
      </InputContent>
      <SummaryContainer>
        <SummaryHeader>
          <h3>Ambiente</h3>
          <h3>Capacidade</h3>
        </SummaryHeader>
        <SummaryContent>
          <SummaryDetails>
            <span>{place?.nome}</span>
            <p>{place?.tipo == "UNIDADE_MOVEL" ? "Unidade Movel" : place?.tipo.toLowerCase()}</p>
          </SummaryDetails>
          <SummaryDetails>
            <p>{place?.capacidade ? `${place?.capacidade} Alunos` : "Ilimitado"}</p>
          </SummaryDetails>
        </SummaryContent>
      </SummaryContainer>
      <SummaryContainer>
        <SummaryHeader>
          <h3>Detalhes</h3>
          <h3>Carga total</h3>
        </SummaryHeader>
        <SummaryContent>
          <SummaryDetails>
            <span>{unidadeCurricular?.nome}</span>
            <p>{course?.nome}</p>
          </SummaryDetails>
          <SummaryDetails>
            <p>{unidadeCurricular?.horas}h</p>
          </SummaryDetails>
        </SummaryContent>
      </SummaryContainer>
      <SummaryContainer>
        <SummaryHeader>
          <h3>Professor (a)</h3>
          <h3>Horas por dia</h3>
        </SummaryHeader>
        <SummaryContent>
          <SummaryDetails>
            <p>{teacher?.nome}</p>
          </SummaryDetails>
          <SummaryDetails>
            <p>{getValues("cargaDiaria")}</p>
          </SummaryDetails>
        </SummaryContent>
      </SummaryContainer>
      <SummaryContainer>
        <SummaryHeader>
          <h3>Periodo</h3>
          <h3>Dias da semana</h3>
        </SummaryHeader>
        <SummaryContent>
          <SummaryDetails>
            <p>{periodo?.toLowerCase()}</p>
          </SummaryDetails>
          <SummaryDetails>
            <p>{diasSemana.filter((dias) => {return dias != undefined}).join(",")}</p>
          </SummaryDetails>
        </SummaryContent>
      </SummaryContainer>
      <SummaryContainer>
        <SummaryHeader>
          <h3>Início</h3>
          <h3>Fim</h3>
        </SummaryHeader>
        <SummaryContent>
          <SummaryDetails>
            <p>{
              getValues("dataInicio") &&
              format(new Date(dataInico.getFullYear(), dataInico.getMonth(), dataInico.getDate() + 1), "dd/MM/yyyy")}</p>
          </SummaryDetails>
          <SummaryDetails>
            <p>{lastDay && format(new Date(dataFim.getFullYear(), dataFim.getMonth(), dataFim.getDate() + 1), "dd/MM/yyyy")}</p>
          </SummaryDetails>
        </SummaryContent>
      </SummaryContainer>
      <FinalButton>
        <button type="submit">Criar</button>
      </FinalButton>
    </InputContainer>
  )
}