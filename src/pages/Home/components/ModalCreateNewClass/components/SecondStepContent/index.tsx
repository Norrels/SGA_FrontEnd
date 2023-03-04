import { ArrowRight } from "phosphor-react";
import { useContext, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { ThemeContext } from "styled-components";
import { ResourcesContext, PlaceProps, TeacherProps } from "../../../../../../contexts/ResourcesContext";
import { API } from "../../../../../../lib/axios";
import {
  FinalButton,
  InputContainer,
  InputContent,
  InputIndividual,
  Steps,
} from "../../style";

interface firstStepContentProps {
  handleNextStep: (step: number) => void;
  teachers: TeacherProps[] | undefined;
  places: PlaceProps[] | undefined;
}

export function SecondStepContent({ handleNextStep, places, teachers }: firstStepContentProps) {
  const { register, watch } = useFormContext();
  const themeContext = useContext(ThemeContext)
  const isValidForm = watch("professor.id") != "" && watch("ambiente.id") != "" && watch("professor.id") != undefined && watch("ambiente.id") != undefined
  return (
    <InputContainer>
      <InputContent>
        <span>
          Esses são os professores e ambientes disponíveis com base nos dados
          informados anteriormente...
        </span>
      </InputContent>
      <InputContent>
        <label>Passo 2 de 3</label>
        <Steps>
          <div style={{ backgroundColor: themeContext.primary_300 }}></div>
          <div style={{ backgroundColor: themeContext.primary_300 }}></div>
          <div style={{ backgroundColor: "#B6B6B6" }}></div>
        </Steps>
      </InputContent>
      <InputContent>
        <label>Professor</label>
        <select
          placeholder="Selecione um professor..."
          {...register("professor.id")}
          defaultValue=""
        >
          <option value="" disabled>
            Selecione um professor...
          </option>
          {teachers?.map((teacher) => {
            return (
              <option key={teacher.id} value={teacher.id}>
                {teacher.nome}
              </option>
            );
          })}
        </select>
        {
          !teachers?.length && <p>Nenhum professor disponível para esse dia e periodo</p>
        }
       
      </InputContent>
      <InputContent>
        <label>Ambiente</label>
        <select
          placeholder="Selecione um ambiente..."
          {...register("ambiente.id")}
          defaultValue=""
        >
          <option value="" disabled>
            Selecione um ambiente...
          </option>
          {places?.map((place) => {
            return (
              <option value={place.id} key={place.id}>
                {place.nome}
              </option>
            );
          })}
        </select>
        {
          !places?.length && <p>Nenhum ambiente disponível para esse dia e periodo</p>
        }
      </InputContent>
      <FinalButton>
        <button
          onClick={() => {
            handleNextStep(2);
          }}
          type="button"
          disabled={!isValidForm}
        >
          Próximo passo
          <ArrowRight size={30} />
        </button>
      </FinalButton>
    </InputContainer>
  );
}
