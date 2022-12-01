//Transforma o calculo da carga horaria em um customhook para coloca na info da carga horaria

import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { ObjectsContext } from "../../../../../../contexts/ObjectsContext";
import { API } from "../../../../../../lib/axios";
import { FinalButton, InputContainer, InputContent, Steps, SummaryContainer, SummaryContent, SummaryDetails, SummaryHeader } from "../../style";

export function ThirdStepContent() {

  const { getValues } = useFormContext();

  const { teachers, placesList, courses } = useContext(ObjectsContext);

  const course = courses.find(c => c.id == getValues("curso.id"))
  const place = placesList.find(c => c.id == getValues("ambiente.id"))
  const teacher = teachers.find(c => c.id == getValues("professor.id"))
  const unidadeCurricular = course?.unidadeCurricular.find(c => c.id == getValues("unidadeCurricular.id"))
  const periodo: string = getValues("periodo")

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
            <p>{place?.tipo.toLowerCase()}</p>
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
            <p>Quinta e Sexta</p>
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
            <p>01/12/2022</p>
          </SummaryDetails>
          <SummaryDetails>
            <p>27/01/2023</p>
          </SummaryDetails>
        </SummaryContent>
      </SummaryContainer>
      <FinalButton>
        <button type="submit">Criar</button>
      </FinalButton>
    </InputContainer>
  )
}