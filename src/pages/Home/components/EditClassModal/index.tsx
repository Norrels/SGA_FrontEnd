//Abstrai isso pelo amor de Deussssssssssssssssssssssssss

import * as Dialog from "@radix-ui/react-dialog";
import { format } from "date-fns";
import { X } from "phosphor-react";
import { useEffect, useState } from "react";
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
}

interface EditClassModalProps {
  professor: number
  ambientes: number
  data: string
}

interface AvalibleTeachers {
  id: number;
  nome: string;
}

interface AvaliblePlaces {
  id: number;
  nome: string;
}

export function EditClassModal({
  closeModal,
  aulas,
}: ModalCreateNewClassProps) {
  const [avalibleTeachers, setAvalibleTeachers] = useState<AvalibleTeachers[]>(
    []
  );
  const [avaliblePlaces, setAvaliblePlaces] = useState<AvaliblePlaces[]>([]);
  const { register, handleSubmit, reset } = useForm<EditClassModalProps>();

  useEffect(() => {
    fetchPlacesAndTeachersAvaliable();
  }, []);

  async function fetchPlacesAndTeachersAvaliable() {
    const res = await API.get("/aula/valoresLivres");
    setAvalibleTeachers(res.data[0]);
    setAvaliblePlaces(res.data[1]);
  }

  async function handleEditClass(data : EditClassModalProps) {
    console.log(data.data)
    aulas.ambiente.id = data.ambientes
    aulas.professor.id = data.professor
    aulas.data = format(new Date(data.data + "T00:00:00"), 'dd/MM/yyyy')
    console.log(aulas)
    const res = await API.put(`aula/${aulas.id}`, aulas);
    reset();
    closeModal();
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
