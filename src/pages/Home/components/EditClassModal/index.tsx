//Abstrai isso pelo amor de Deussssssssssssssssssssssssss

import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";
import { format } from "date-fns";
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
  EditClass: (data: EditClassModalProps) => void;
}

export interface EditClassModalProps {
  professor: number;
  ambientes: number;
  data: string;
  id: number;
}

interface AvalibleTeachersAndPlaces {
  id: number;
  nome: string;
}

export function EditClassModal({
  closeModal,
  aulas,
  EditClass,
}: ModalCreateNewClassProps) {
  const [avalibleTeachers, setAvalibleTeachers] = useState<
    AvalibleTeachersAndPlaces[]
  >([]);
  const [avaliblePlaces, setAvaliblePlaces] = useState<
    AvalibleTeachersAndPlaces[]
  >([]);
  const { register, handleSubmit, reset } = useForm<EditClassModalProps>();

  useEffect(() => {
    fetchPadrao(aulas.data);
  }, []);

  async function fetchPlacesAndTeachersAvaliable(
    event: ChangeEvent<HTMLInputElement>
  ) {
    fetchPadrao(event.target.value);
    console.log(format(new Date(aulas.data), "yyyy-MM-dd"));
  }

  async function fetchPadrao(value: string) {
    
    const res = await API.get(
      `aula/aulaProfessorAmbienteDisponivel?dataInicio=${value}&periodo=${aulas.periodo}&id=${aulas.id}`
    );
    if (res.status == 200) {
      console.log("SUCESSO");
      setAvalibleTeachers(res.data[0]);
      setAvaliblePlaces(res.data[1]);
    } else {
      console.log("ERRO");
    }
    console.log(res)
  }

  async function handleEditClass(data: EditClassModalProps) {
    aulas.ambiente.id = data.ambientes;
    aulas.professor.id = data.professor;
    aulas.data = format(new Date(data.data + "T00:00:00"), "dd/MM/yyyy");
    const res = await API.put(`aula/${aulas.id}`, aulas);
    reset();
    closeModal();
    data.id = aulas.id;
    res.status == 200 && EditClass(data);
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <ModalHeader>
          <Dialog.Title>Editar aula</Dialog.Title>
          <HeaderButtons>
            <Dialog.Close>
              <X size={50} weight="light" />
            </Dialog.Close>
          </HeaderButtons>
        </ModalHeader>
        <form onSubmit={handleSubmit(handleEditClass)}>
          <InputScroll>
            <InputContainer>
              <InputContent>
                <InputIndividual>
                  <label>Data</label>
                  <input
                    type="date"
                    defaultValue={`${aulas.data.slice(
                      6,
                      10
                    )}-${aulas.data.slice(3, 5)}-${aulas.data.slice(0, 2)}`}
                    placeholder="Escolha uma data..."
                    {...register("data")}
                    onChange={fetchPlacesAndTeachersAvaliable}
                  />
                </InputIndividual>
                <InputIndividual>
                  <label>Ambiente</label>
                  <select
                    placeholder="Selecione o ambiente..."
                    {...register("ambientes")}
                    defaultValue={aulas.ambiente.id}
                  >
                    {avaliblePlaces.map((place) => {
                      return (
                        <option
                          disabled={place.id == aulas.ambiente.id}
                          value={place.id}
                          key={place.id}
                        >
                          {place.nome}
                        </option>
                      );
                    })}
                  </select>
                </InputIndividual>
              </InputContent>
              <InputContent>
                <label>Professor</label>
                <select
                  placeholder="Selecione o professor..."
                  {...register("professor")}
                  defaultValue={aulas.professor.id}
                >
                  {avalibleTeachers.map((teacher) => {
                    return (
                      <option
                        disabled={teacher.id == aulas.professor.id}
                        value={teacher.id}
                        key={teacher.id}
                      >
                        {teacher.nome}
                      </option>
                    );
                  })}
                </select>
              </InputContent>

              <FinalButton>
                <button>Salvar</button>
              </FinalButton>
            </InputContainer>
          </InputScroll>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
