import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { useForm } from "react-hook-form";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { ResourcesContext } from "../../../../contexts/ResourcesContext";
import {
  CheckContent,
  CheckIndividual,
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
import { z } from "zod";
import { API } from "../../../../lib/axios";
import { ta } from "date-fns/locale";

interface NewVacationModalProps {
  closeModal1: () => void;
}

export const vacationInput = z.object({
  dataInicio: z.date(),
  dataFinal: z.date(),
});

export interface TeacherProps {
  id?: number;
  nome?: string;
  cargaSemanal?: number;
  ativo?: boolean;
  foto?: string;
  email?: string;
  isChecked?: boolean;
  competencia?: {
    nivel?: number;
    unidadeCurricular?: {
      id?: number;
      nome?: string;
    };
  }[];
}
[];

//Transformando a variavel de validação em uma interface
export type VacationType = z.infer<typeof vacationInput>;

export function NewVacation({ closeModal1 }: NewVacationModalProps) {
  const { teachers } = useContext(ResourcesContext);
  const [teachersArray, setTeachersArray] = useState<TeacherProps[]>([]);

  const { register, handleSubmit, reset } = useForm<VacationType>();
  useState(false);

  const [dataFinal, setDataFinal] = useState("");

  // pegando a data de hoje e formatando pro estilo americano para validar o input date
  const hoje = new Date()
    .toLocaleDateString()
    .replace(/(\d*)\/(\d*)\/(\d*).*/, "$3-$2-$1");

  function handleCreateVacation(data: VacationType) {
    handleCreateVacationAPI(data);
  }
  // Cria Ausência
  async function handleCreateVacationAPI(data: VacationType) {
    console.log(teachersArray.filter((c) => c.isChecked == true));

    const res = await API.post("ausencia/criaAusencia", {
      dataInicio: data.dataInicio,
      dataFinal: data.dataFinal,
      profList: teachersArray.filter((c) => c.isChecked == true),
    });

    if (res.status === 200) {
      closeModal1();
      reset();
    }
  }

  function onChangeDataInicio(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value != "") {
      setDataFinal(event.target.value);
    } else {
      setDataFinal("");
    }
  }

  useEffect(() => {
    setTeachersArray(teachers.filter((t) => t.ativo == true));
  }, [teachers]);

  function onCloseAvaliableModal() {
    reset();
    setDataFinal("");
  }

  function handleChange(e: any) {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempTeachers = teachersArray.map((tch) => {
        return { ...tch, isChecked: checked };
      });
      setTeachersArray(tempTeachers);
    } else {
      let tempUser = teachersArray.map((tch) =>
        tch.nome === name ? { ...tch, isChecked: checked } : tch
      );
      setTeachersArray(tempUser);
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content onCloseAutoFocus={() => onCloseAvaliableModal()}>
        <ModalHeader>
          <Dialog.Title>Férias</Dialog.Title>
          <HeaderButtons>
            <Dialog.Close>
              <X size={50} weight="light" />
            </Dialog.Close>
          </HeaderButtons>
        </ModalHeader>
        <form onSubmit={handleSubmit(handleCreateVacation)}>
          <InputScroll>
            <InputContainer>
              <InputContent>
                <InputIndividual>
                  <label>Data de início</label>
                  <input
                    {...register("dataInicio")}
                    type="date"
                    placeholder="dd/MM/yyyy"
                    onChange={onChangeDataInicio}
                    min={hoje}
                    required
                  />
                </InputIndividual>
                <InputIndividual>
                  <label>Data de fim</label>
                  <input
                    {...register("dataFinal")}
                    type="date"
                    placeholder="dd/MM/yyyy"
                    min={dataFinal == "" ? hoje : dataFinal}
                    required
                  />
                </InputIndividual>
              </InputContent>
              <InputContent>
                <h1>Professores</h1>
                <hr />
                <CheckIndividual style={{ marginBottom: "10px" }}>
                  <input
                    type="checkbox"
                    value="check"
                    name="allSelect"
                    checked={
                      !teachersArray.some((thc) => thc?.isChecked !== true)
                    }
                    onChange={handleChange}
                  />
                  <label>Selecionar todos</label>
                </CheckIndividual>

                <CheckContent>
                  {teachersArray.map((teacher, index) => (
                    <CheckIndividual key={index}>
                      <input
                        type="checkbox"
                        value={teacher.id}
                        name={teacher.nome}
                        checked={teacher?.isChecked || false}
                        onChange={handleChange}
                      />
                      <p>{teacher.nome}</p>
                    </CheckIndividual>
                  ))}
                </CheckContent>
              </InputContent>
            </InputContainer>
            <FinalButton>
              <button
                type="submit"
                disabled={
                  teachersArray?.filter((v) => v.isChecked == true).length == 0
                }
              >
                {teachersArray.filter((v) => v.isChecked == true).length == 0
                  ? "Selecione um professor..."
                  : "Criar"}
              </button>
            </FinalButton>
          </InputScroll>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
