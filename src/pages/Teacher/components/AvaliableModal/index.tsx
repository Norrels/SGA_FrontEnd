import * as Dialog from "@radix-ui/react-dialog";
import {
  ArrowCounterClockwise,
  Check,
  Confetti,
  DotsThreeOutline,
  MagnifyingGlass,
  X,
} from "phosphor-react";
import {
  AvailableContainer,
  ButtonIndividual,
  CheckboxRoot,
  CheckIndividual,
  ChecksContent,
  Content,
  ContentContainer,
  ContentScroll,
  FinalButton,
  HeaderButtons,
  InfoBusca,
  InputContainer,
  InputContent,
  InputIndividual,
  InputSeparator,
  Main,
  ModalHeader,
  Overlay,
  TableContainer,
  TableRow,
} from "./style";

import { ChangeEvent, useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { CheckboxIndicator } from "@radix-ui/react-checkbox";
import { ResourcesContext } from "../../../../contexts/ResourcesContext";
import { z } from "zod";
import { API } from "../../../../lib/axios";
import { ViewClassModal } from "./components/ViewClassModal";
import { ThemeContext } from "styled-components";

export const aulaInput = z.object({
  id: z.number(),
  codTurma: z.string(),
  periodo: z.string(),
  data: z.string(),
  cargaDiaria: z.string(),
  diaSemana: z.boolean().array(),
  unidadeCurricular: z.object({
    id: z.number(),
    nome: z.string(),
  }),
  professor: z.object({
    id: z.number(),
    nome: z.string(),
  }),
  ambiente: z.object({
    id: z.number(),
    nome: z.string(),
  }),
  curso: z.object({
    id: z.number(),
    nome: z.string(),
  }),
});

export type AulaType = z.infer<typeof aulaInput>;

export const teacherInput = z.object({
  id: z.number(),
  diasSemana: z.boolean().array(),
  dataInicio: z.date(),
  dataFinal: z.date(),
  periodo: z.string(),
  professor: z.object({
    id: z.number(),
  }),
});

export type DispProps = z.infer<typeof teacherInput>;

interface Object {
  nome: string;
  tamanho: string;
}

export function AvaliableModal() {
  const [searched, setSearched] = useState(false);
  const [open, setOpen] = useState(false);
  const [dataFinal, setDataFinal] = useState("");
  const [object, setObject] = useState<Object>();
  const [aula, setAula] = useState<AulaType[]>([]);
  const themeContext = useContext(ThemeContext)

  // pegando a data de hoje e formatando pro estilo americano para validar o input date
  const hoje = new Date()
    .toLocaleDateString()
    .replace(/(\d*)\/(\d*)\/(\d*).*/, "$3-$2-$1");

  const { teachers } = useContext(ResourcesContext);

  const { register, handleSubmit, reset, setValue, control } =
    useForm<DispProps>({
      defaultValues: {
        diasSemana: [false],
      },
    });

  function closeModal() {
    setOpen(false);
  }

  async function handleGetTeachers(data: DispProps) {
    const res = await API.post("/professor/disponibilidadeProf/periodo", data);
    if (res.status == 200) {
      setAula(res.data);
      setSearched(true);

      res.data.map((v: AulaType) => {
        setObject({ tamanho: res.data.length + "", nome: v.professor.nome });
      });
    } else {
      setSearched(false);
    }
  }

  function onChangeDataInicio(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value != "") {
      setDataFinal(event.target.value);
    } else {
      setDataFinal("");
    }
  }

  function onCloseAvaliableModal() {
    reset();
    setSearched(false);
    setDataFinal("");
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content onCloseAutoFocus={() => onCloseAvaliableModal()}>
        <form onSubmit={handleSubmit(handleGetTeachers)}>
          <ModalHeader>
            <Dialog.Title>Disponibilidade</Dialog.Title>
            <HeaderButtons>
              <ButtonIndividual
                type="submit"
                title="Busque o professor disponível"
              >
                <MagnifyingGlass size={40} weight="light" />
                <p>Buscar</p>
              </ButtonIndividual>
              <ButtonIndividual
                type="button"
                onClick={() => onCloseAvaliableModal()}
                title="Limpe os campos do formulário"
              >
                <ArrowCounterClockwise size={40} weight="light" />
                <p>Limpar</p>
              </ButtonIndividual>
              <Dialog.Close title="Feche a modal">
                <X onClick={() => setSearched(true)} size={50} weight="light" />
              </Dialog.Close>
            </HeaderButtons>
          </ModalHeader>
          <ContentScroll>
            <div id="up" style={{ display: "none" }}></div>
            <ContentContainer>
              <Main>
              <img src={`/avaliable-${themeContext.theme}.svg`} />
                <InputContainer>
                  <InputContent>
                    <InputIndividual>
                      <label>Professor</label>
                      <select
                        placeholder="Selecione o professor"
                        defaultValue=""
                        {...register("professor.id")}
                        required
                      >
                        <option value="" disabled>
                          Selecione o professor
                        </option>
                        {teachers.map((value) => (
                          <option key={value.id} value={value.id}>
                            {value.nome}
                          </option>
                        ))}
                      </select>
                    </InputIndividual>
                    <InputIndividual>
                      <label>Periodo</label>
                      <select
                        placeholder="Selecione o periodo"
                        defaultValue=""
                        {...register("periodo")}
                        required
                      >
                        <option value="" disabled>
                          Selecione o periodo
                        </option>
                        <option value="MANHA">Manhã</option>
                        <option value="TARDE">Tarde</option>
                        <option value="NOITE">Noite</option>
                        <option value="INTEGRAL">Integral</option>
                      </select>
                    </InputIndividual>
                  </InputContent>
                  <InputSeparator>
                    <hr />
                    <p>Selecione o intervalo de datas e os dias da semana</p>
                    <hr />
                  </InputSeparator>
                  <InputContent>
                    <InputIndividual>
                      <label>Data de Inicio</label>
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
                      <label>Data Final</label>
                      <input
                        {...register("dataFinal")}
                        type="date"
                        placeholder="dd/MM/yyyy"
                        min={dataFinal == "" ? hoje : dataFinal}
                        required
                      />
                    </InputIndividual>
                  </InputContent>
                  <Controller
                    control={control}
                    name="diasSemana"
                    render={({ field }) => {
                      return (
                        <ChecksContent>
                          <CheckIndividual title="Domingo">
                            <label>Dom</label>
                            <CheckboxRoot
                              {...register(`diasSemana.${0}`, { value: false })}
                              onCheckedChange={(checked) => {
                                setValue(
                                  `diasSemana.${0}`,
                                  checked ? true : false
                                );
                              }}
                            >
                              <CheckboxIndicator>
                                <Check size={40} weight="bold" color="#fff" />
                              </CheckboxIndicator>
                            </CheckboxRoot>
                          </CheckIndividual>
                          <CheckIndividual title="Segunda-feira">
                            <label>Seg</label>
                            <CheckboxRoot
                              {...register(`diasSemana.${1}`, { value: false })}
                              onCheckedChange={(checked) => {
                                setValue(
                                  `diasSemana.${1}`,
                                  checked ? true : false
                                );
                              }}
                            >
                              <CheckboxIndicator>
                                <Check size={40} weight="bold" color="#fff" />
                              </CheckboxIndicator>
                            </CheckboxRoot>
                          </CheckIndividual>
                          <CheckIndividual title="Terça-feira">
                            <label>Ter</label>
                            <CheckboxRoot
                              {...register(`diasSemana.${2}`, { value: false })}
                              onCheckedChange={(checked) => {
                                setValue(
                                  `diasSemana.${2}`,
                                  checked ? true : false
                                );
                              }}
                            >
                              <CheckboxIndicator>
                                <Check size={40} weight="bold" color="#fff" />
                              </CheckboxIndicator>
                            </CheckboxRoot>
                          </CheckIndividual>
                          <CheckIndividual title="Quarta-feira">
                            <label>Qua</label>
                            <CheckboxRoot
                              {...register(`diasSemana.${3}`, { value: false })}
                              onCheckedChange={(checked) => {
                                setValue(
                                  `diasSemana.${3}`,
                                  checked ? true : false
                                );
                              }}
                            >
                              <CheckboxIndicator>
                                <Check size={40} weight="bold" color="#fff" />
                              </CheckboxIndicator>
                            </CheckboxRoot>
                          </CheckIndividual>
                          <CheckIndividual title="Quinta-feira">
                            <label>Qui</label>
                            <CheckboxRoot
                              {...register(`diasSemana.${4}`, { value: false })}
                              onCheckedChange={(checked) => {
                                setValue(
                                  `diasSemana.${4}`,
                                  checked ? true : false
                                );
                              }}
                            >
                              <CheckboxIndicator>
                                <Check size={40} weight="bold" color="#fff" />
                              </CheckboxIndicator>
                            </CheckboxRoot>
                          </CheckIndividual>
                          <CheckIndividual title="Sexta-feira">
                            <label>Sex</label>
                            <CheckboxRoot
                              {...register(`diasSemana.${5}`, { value: false })}
                              onCheckedChange={(checked) => {
                                setValue(
                                  `diasSemana.${5}`,
                                  checked ? true : false
                                );
                              }}
                            >
                              <CheckboxIndicator>
                                <Check size={40} weight="bold" color="#fff" />
                              </CheckboxIndicator>
                            </CheckboxRoot>
                          </CheckIndividual>
                          <CheckIndividual title="Sábado">
                            <label>Sab</label>
                            <CheckboxRoot
                              {...register(`diasSemana.${6}`, { value: false })}
                              onCheckedChange={(checked) => {
                                setValue(
                                  `diasSemana.${6}`,
                                  checked ? true : false
                                );
                              }}
                            >
                              <CheckboxIndicator>
                                <Check size={40} weight="bold" color="#fff" />
                              </CheckboxIndicator>
                            </CheckboxRoot>
                          </CheckIndividual>
                        </ChecksContent>
                      );
                    }}
                  />
                </InputContainer>
              </Main>
              <InfoBusca>
                <p>
                  {!searched
                    ? "Verifique a disponibilidade do ambiente..."
                    : aula.length !== 0 &&
                      `${object?.nome} possui ${object?.tamanho} ${
                        aula.length == 1 ? "aula" : "aulas"
                      } durante o intervalo de datas e os dias da semana selecionados...`}
                </p>
              </InfoBusca>

              {searched && aula.length !== 0 ? (
                <TableContainer>
                  <TableRow>
                    <p>Curso</p>
                    <p>Ambiente</p>
                    <p>Periodo</p>
                    <p>Data</p>
                    <p>Ver mais</p>
                  </TableRow>
                  {aula.map((value) => (
                    <TableRow key={value.id}>
                      <p>{value.curso.nome}</p>
                      <p>{value.ambiente.nome}</p>
                      <p>
                        {value.periodo.toLowerCase() == "manha"
                          ? "manhã"
                          : value.periodo.toLowerCase()}
                      </p>
                      <p>{value.data}</p>
                      <Dialog.Root>
                        <Dialog.Trigger>
                          <DotsThreeOutline size={20} />
                        </Dialog.Trigger>
                        <ViewClassModal
                          classItem={value}
                          closeModal={closeModal}
                        />
                      </Dialog.Root>
                    </TableRow>
                  ))}
                </TableContainer>
              ) : (
                <></>
              )}
              {searched && aula.length === 0 ? (
                <AvailableContainer>
                  <Confetti size={60} weight="light" />
                  <p>
                    O professor está disponível no intervalo de datas e dias
                    selecionados!
                  </p>
                  {/* <p>Clique aqui para cadastrar sua aula!</p> */}
                </AvailableContainer>
              ) : (
                <></>
              )}
              <FinalButton>
                <button
                  type="submit"
                  /* onClick={() => {
                    setTimeout(() => {
                       ? setSearched(true) : setSearched(false);
                    }, 10000);
                  }} */
                >
                  Buscar
                </button>
              </FinalButton>
              <div id="down" style={{ display: "none" }}></div>
            </ContentContainer>
          </ContentScroll>
          <Dialog.Description />
        </form>
      </Content>
    </Dialog.Portal>
  );
}
