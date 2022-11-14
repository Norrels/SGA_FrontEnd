import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { API } from "../../../../lib/axios";
import { AulaProps } from "../Calenders/TeacherCalender";
import { AulaType } from "../ModalCreateNewClass";


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

interface EditAllClassModalProps {
  professor: number
  ambiente: number
  dataFinal: string
  dataInicio: string
}

interface AvalibleTeachers {
  id: number;
  nome: string;
}

interface AvaliblePlaces {
  id: number;
  nome: string;
}

export function EditAllClassModal({ closeModal,  aulas }: ModalCreateNewClassProps) {
  const [avalibleTeachers, setAvalibleTeachers] = useState<AvalibleTeachers[]>(
    []
  );
  const [avaliblePlaces, setAvaliblePlaces] = useState<AvaliblePlaces[]>([]);
  const { register, handleSubmit, reset } = useForm<EditAllClassModalProps>();

  
  useEffect(() => {
    fetchPlacesAndTeachersAvaliable();
  }, []);

  async function fetchPlacesAndTeachersAvaliable() {
    const res = await API.get("/aula/valoresLivres");
    setAvalibleTeachers(res.data[0]);
    setAvaliblePlaces(res.data[1]);
  }


  async function handleEditAllClass(data: EditAllClassModalProps) {
    aulas.ambiente.id = data.ambiente
    aulas.dataInicio = data.dataInicio
    aulas.professor.id = data.professor
    aulas.dataFinal = data.dataFinal
    const res = await API.put(`aula/turma/${aulas.codTurma}`, aulas);
    console.log(res)
    reset();
    closeModal();
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
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
            <InputContainer>
              <InputContent>
                <InputIndividual>
                  <label>Data de início</label>
                  <input
                    type="date"
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
                  <input type="date" placeholder="Escolha uma data..."  {...register("dataFinal")} />
                </InputIndividual>
              </InputContent>
              <InputContent>
                <label>Ambiente</label>
                <select
                  placeholder="Selecione o ambiente..."
                  {...register("ambiente")}
                  defaultValue={aulas.ambiente.id}
                >
                    {
                    avaliblePlaces.map((place) => {
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
