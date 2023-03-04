import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { API } from "../../../../lib/axios";
import { AulaProps } from "../Calenders/TeacherCalender";

import {
  Content,
  FinalButton,
  HeaderButtons,
  InputContainer,
  InputContent,
  InputIndividual,
  InputScroll,
  ModalHeader,
  Overlay,
} from "./style";

interface ModalCreateNewClassProps {
  closeModal(): void;
  aulas: AulaProps;
  handleEditAllClasses: (data: EditAllClassModalProps) => void;
}

export interface EditAllClassModalProps {
  partitionKey: number;
  professor: string;
  ambiente: string;
  dataFinal: string;
  dataInicio: string;
}

interface AvalibleTeachers {
  id: string;
  nome: string;
}

interface AvaliblePlaces {
  id: string;
  nome: string;
}

export function EditAllClassModal({
  closeModal,
  aulas,
  handleEditAllClasses,
}: ModalCreateNewClassProps) {
  const [avalibleTeachers, setAvalibleTeachers] = useState<AvalibleTeachers[]>(
    []
  );
  const [avaliblePlaces, setAvaliblePlaces] = useState<AvaliblePlaces[]>([]);
  const { register, handleSubmit, reset } = useForm<EditAllClassModalProps>();

  const [isValidForm, setIsValidForm] = useState(false);

  // pegando a data de hoje e formatando pro estilo americano para validar o input date
  const hoje = new Date()
    .toLocaleDateString()
    .replace(/(\d*)\/(\d*)\/(\d*).*/, "$3-$2-$1");

  async function fetchPlacesAndTeachersAvaliable(dataFinal: string) {
    dataFinal = dataFinal.replace(/(\d*)-(\d*)-(\d*).*/, "$3/$2/$1");
    
    const res = await API.get(
      `aula/aulasProfessorAmbienteDisponivel?periodo=${aulas.periodo}&dataInicio=${aulas.data}&dataFinal=${dataFinal}`
    );
    setAvalibleTeachers(res.data[0]);
    setAvaliblePlaces(res.data[1]);
  }

  async function handleEditAllClass(data: EditAllClassModalProps) {
    aulas.ambiente.id = data.ambiente;
    aulas.dataInicio = data.dataInicio;
    aulas.professor.id = data.professor;
    aulas.dataFinal = data.dataFinal;

    const res = await API.put(`aula/key/${aulas.partitionKey}`, aulas);

    if (res.status == 200) {
      handleEditAllClasses(data);
      reset();
      closeModal();
    }
  }

  function onChangeInputDataFinal(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value != "") {
      setIsValidForm(true); 
      fetchPlacesAndTeachersAvaliable(event.target.value)
    } else {
      setIsValidForm(false);
    }
  }

  function onCloseEditClassesModal() {
    reset();
    closeModal();
    setIsValidForm(false);
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content onCloseAutoFocus={() => onCloseEditClassesModal()}>
        <ModalHeader>
          <Dialog.Title>Editar aula(s)</Dialog.Title>
          <HeaderButtons>
            <Dialog.Close>
              <X size={50} weight="light" />
            </Dialog.Close>
          </HeaderButtons>
        </ModalHeader>
        <form onSubmit={handleSubmit(handleEditAllClass)}>
          <InputScroll>
            <input
              type="hidden"
              value={aulas.partitionKey}
              {...register("partitionKey")}
            />
            <InputContainer>
              <InputContent disabled={"on"}>
                <InputIndividual>
                  <label>Data de início</label>
                  <input
                    type="date"
                    readOnly
                    defaultValue={`${aulas.data.slice(
                      6,
                      10
                    )}-${aulas.data.slice(3, 5)}-${aulas.data.slice(0, 2)}`}
                    placeholder="Escolha uma data..."
                    {...register("dataInicio")}
                  />
                </InputIndividual>
                <InputIndividual>
                  <label>Data de fim</label>
                  <input
                    type="date"
                    placeholder="Escolha uma data..."
                    {...register("dataFinal")}
                    onChange={onChangeInputDataFinal}
                    min={`${aulas.data.slice(6, 10)}-${aulas.data.slice(
                      3,
                      5
                    )}-${aulas.data.slice(0, 2)}`}
                  />
                </InputIndividual>
              </InputContent>
              <InputContent disabled={isValidForm ? "on" : "disabled"}>
                <label>Ambiente</label>
                <select
                  placeholder="Selecione o ambiente..."
                  {...register("ambiente")}
                  defaultValue={aulas.ambiente.id}
                  required
                >
                  <option value={aulas.ambiente.id} disabled>
                    {aulas.ambiente.nome}
                  </option>
                  {avaliblePlaces.map((place) => {
                    if (aulas.ambiente.id != place.id) {
                      return (
                        <option value={place.id} key={place.id}>
                          {place.nome}
                        </option>
                      );
                    }
                  })}
                </select>
              </InputContent>
              <InputContent disabled={isValidForm ? "on" : "disabled"}>
                <label>Professor</label>
                <select
                  placeholder="Selecione o professor..."
                  {...register("professor")}
                  defaultValue={aulas.professor.id}
                  required
                >
                  <option value={aulas.professor.id} disabled>
                    {aulas.professor.nome}
                  </option>
                  {avalibleTeachers.map((teacher) => {
                    if (aulas.professor.id != teacher.id) {
                      return (
                        <option value={teacher.id} key={teacher.id}>
                          {teacher.nome}
                        </option>
                      );
                    }
                  })}
                </select>
              </InputContent>

              <FinalButton>
                <button disabled={!isValidForm}>
                  {isValidForm ? "Salvar" : "Selecione uma data de fim..."}
                </button>
              </FinalButton>
            </InputContainer>
          </InputScroll>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
