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

import DisponibilidadePerson from "../../../../assets/DisponibilidadePerson.svg";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { CheckboxIndicator } from "@radix-ui/react-checkbox";
import { ObjectsContext } from "../../../../contexts/ObjectsContext";
import { z } from "zod";
import { API } from "../../../../lib/axios";

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

export function AvaliableModal() {
  const [searched, setSearched] = useState(false);
  const [aula, setAula] = useState<AulaType[]>([]);

  const { teachers } = useContext(ObjectsContext);

  const { register, handleSubmit, reset, setValue } = useForm<DispProps>(
    {
      defaultValues: {
        diasSemana: [false],
      },
    }
  );

  async function handleGetTeachers(data: DispProps) {
    const res = await API.post("/professor/disponibilidadeProf/periodo", data);
    console.log(res)
    if (res.status == 200) {
      setAula(res.data);
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content onCloseAutoFocus={() => setSearched(false)}>
      <form onSubmit={handleSubmit(handleGetTeachers)}>
        <ModalHeader>
          <Dialog.Title>Disponibilidade</Dialog.Title>
          <HeaderButtons>
            <ButtonIndividual type="submit" title="Busque o professor disponível">
              <MagnifyingGlass size={40} weight="light" />
              <p>Buscar</p>
            </ButtonIndividual>
            <ButtonIndividual type="button" onClick={() => reset()} title="Limpe os campos do formulário">
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
                <img src={DisponibilidadePerson} />
                <InputContainer>
                  <InputContent>
                    <InputIndividual>
                      <label>Professor</label>
                      <select
                        placeholder="Selecione o professor"
                        defaultValue="default"
                        {...register("professor.id")}
                      >
                        <option value="default" disabled>
                          Selecione o professor
                        </option>
                        {teachers.map((value) => (
                          <option key={value.id} value={value.id}>{value.nome}</option>
                        ))}
                      </select>
                    </InputIndividual>
                    <InputIndividual>
                      <label>Periodo</label>
                      <select
                        placeholder="Selecione o periodo"
                        defaultValue="default"
                        {...register("periodo")}
                      >
                        <option value="default" disabled>
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
                      />
                    </InputIndividual>
                    <InputIndividual>
                      <label>Data Final</label>
                      <input
                        {...register("dataFinal")}
                        type="date"
                        placeholder="dd/MM/yyyy"
                      />
                    </InputIndividual>
                  </InputContent>
                  <ChecksContent>
                    <CheckIndividual title="Domingo">
                      <label>Dom</label>
                      <CheckboxRoot
                        {...register(`diasSemana.${0}`, { value: false })}
                        onCheckedChange={(checked) => {
                          setValue(`diasSemana.${0}`, checked ? true : false);
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
                          setValue(`diasSemana.${1}`, checked ? true : false);
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
                          setValue(`diasSemana.${2}`, checked ? true : false);
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
                          setValue(`diasSemana.${3}`, checked ? true : false);
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
                          setValue(`diasSemana.${4}`, checked ? true : false);
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
                          setValue(`diasSemana.${5}`, checked ? true : false);
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
                          setValue(`diasSemana.${6}`, checked ? true : false);
                        }}
                      >
                        <CheckboxIndicator>
                          <Check size={40} weight="bold" color="#fff" />
                        </CheckboxIndicator>
                      </CheckboxRoot>
                    </CheckIndividual>
                  </ChecksContent>
                </InputContainer>
              </Main>
              {aula.length !== 0 ? (
                <InfoBusca>
                  <p>
                    {searched
                      ? `{professor.nome} possui {aulas.length} aulas durante o intervalo de datas e os dias da semana selecionados...`
                      : "Verifique a disponibilidade do professor..."}
                  </p>
                </InfoBusca>
              ) : (
                <></>
              )}
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
                      <p>{value.professor.nome}</p>
                      <p>{value.periodo}</p>
                      <p>{value.data}</p>
                      <button>
                        <DotsThreeOutline size={32} />
                      </button>
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
                    O ambiente está disponivel no intervalo de datas e dias
                    selecionados
                  </p>
                  <p>Clique aqui para cadastrar sua aula!</p>
                </AvailableContainer>
              ) : (
                <></>
              )}
              <FinalButton>
                <button onClick={() => setSearched(true)}>Buscar</button>
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
