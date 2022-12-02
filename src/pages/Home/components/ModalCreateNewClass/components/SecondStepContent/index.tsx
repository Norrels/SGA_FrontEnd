import { ArrowRight } from "phosphor-react";
import { useContext, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { ObjectsContext, TeacherProps } from "../../../../../../contexts/ObjectsContext";
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
}

export function SecondStepContent({ handleNextStep, teachers  }: firstStepContentProps) {
  const { register } = useFormContext();
  const { placesList } = useContext(ObjectsContext);

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
          <div style={{ backgroundColor: "#367FBF" }}></div>
          <div style={{ backgroundColor: "#367FBF" }}></div>
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
        {/* {errors.professor && <p>* Selecione um valor...</p>} */}
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
          {placesList.map((place) => {
            return (
              <option value={place.id} key={place.id}>
                {place.nome}
              </option>
            );
          })}
        </select>
        {/* {errors.ambiente && <p>* Selecione um valor...</p>} */}
      </InputContent>
      <FinalButton>
        <button
          onClick={() => {
            handleNextStep(2);
          }}
          type="button"
        >
          Próximo passo
          <ArrowRight size={30} />
        </button>
      </FinalButton>
    </InputContainer>
  );
}
