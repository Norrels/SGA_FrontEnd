import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { useForm } from "react-hook-form";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import {
  ObjectsContext,
  TeacherProps,
} from "../../../../contexts/ObjectsContext";
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

interface NewVacationModalProps {
  closeModal1: () => void;
}

export const vacationInput = z.object({
  dataInicio: z.date(),
  dataFinal: z.date(),
});

//Transformando a variavel de validação em uma interface
export type VacationType = z.infer<typeof vacationInput>;

export function NewVacation({ closeModal1 }: NewVacationModalProps) {
  const { teachers } = useContext(ObjectsContext);

  const [teachersSelected, setTeachersSelected] = useState<TeacherProps[]>([]);

  const { register, handleSubmit, reset } = useForm<VacationType>();

  const [isChecked, setIsChecked] = useState(false);
  const [selecionarTodos, setSelecionarTodos] = useState(false);
  const [selecionarTodosPrimeiraVez, setSelecionarTodosPrimeiraVez] =
    useState(false);

  const [dataFinal, setDataFinal] = useState("");

  // pegando a data de hoje e formatando pro estilo americano para validar o input date
  const hoje = new Date()
    .toLocaleDateString()
    .replace(/(\d*)\/(\d*)\/(\d*).*/, "$3-$2-$1");

  useEffect(() => {
    console.log(teachersSelected);
  }, [teachersSelected]);

  function handleCreateVacation(data: VacationType) {
    handleCreateVacationAPI(data);
  }

  function handleCreateArrayTeachers(value: String) {
    if (teachersSelected.some((v) => v.id == Number(value))) {
      setTeachersSelected(
        teachersSelected.filter((c) => c.id !== Number(value))
      );
    } else {
      setTeachersSelected([
        ...teachersSelected,
        {
          id: Number(value),
          nome: "",
          cargaSemanal: 0,
          competencia: [],
          email: "",
          ativo: true,
          foto: "",
        },
      ]);
    }
  }

  // Cria Ausência
  async function handleCreateVacationAPI(data: VacationType) {
    const res = await API.post("ausencia/criaAusencia", {
      dataInicio: data.dataInicio,
      dataFinal: data.dataFinal,
      profList: teachersSelected,
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

  function onChangeCheckSelecionarTodos(e: ChangeEvent<HTMLInputElement>) {
    !selecionarTodosPrimeiraVez && setSelecionarTodosPrimeiraVez(true);
    e.target.checked ? setSelecionarTodos(false) : setSelecionarTodos(true);
    e.target.checked ? setIsChecked(true) : setIsChecked(false);
  }

  function onCloseAvaliableModal() {
    reset();
    setDataFinal("");
    setSelecionarTodosPrimeiraVez(false);
    setSelecionarTodos(false);
    setIsChecked(false);
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
                {/* <CheckIndividual style={{ marginBottom: "10px" }}>
                  <input
                    type="checkbox"
                    value="check"
                    onChange={onChangeCheckSelecionarTodos}
                  />
                  <label>Selecionar todos</label>
                </CheckIndividual> */}

                <CheckContent>
                  {teachers.map(
                    (teacher) =>
                      teacher.ativo && (
                        <CheckIndividual key={teacher.id}>
                          <input
                            onChange={(checked) => {
                              handleCreateArrayTeachers(checked.target.value);
                              checked.target.checked ? setIsChecked(true) : setIsChecked(false);
                            }}
                            type="checkbox"
                            value={teacher.id}
                            name="teachers"
                            /* checked={!selecionarTodos} */
                          />
                          <p>{teacher.nome}</p>
                        </CheckIndividual>
                      )
                  )}
                </CheckContent>
              </InputContent>
            </InputContainer>
            <FinalButton>
              <button type="submit" disabled={!isChecked}>
                {!isChecked ? 'Selecione um professor...': 'Criar'}
              </button>
            </FinalButton>
          </InputScroll>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
