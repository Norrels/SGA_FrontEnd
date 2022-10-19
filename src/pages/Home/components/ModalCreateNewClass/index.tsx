import * as Dialog from "@radix-ui/react-dialog";
import { Check, X } from "phosphor-react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { boolean, number, z } from "zod";
import Resumo from "../../../../assets/Resumo.svg";
import { ObjectsContext } from "../../../../Contexts/ObjectsContext";
import { API } from "../../../../lib/axios";
import {
  CloseButton,
  Content,
  HomeCheckBox,
  HomeCheckBoxButton,
  HomeCheckBoxIndicator,
  ModalCreateClassContent,
  ModalCreateClassContentCollum,
  ModalCreateClassContentLine,
  ModalCreateClassContentLines,
  ModalCreateClassDays,
  ModalCreateClassSumarryContent,
  Overlay,
} from "./style";

export const aulaInput = z.object({
  codTurma: z.string(),
  periodo: z.string(),
  dataInicio: z.date(),
  cargaDiaria: z.string(),
  diaSemana: z.boolean().array(),
  curso: z.object({
    id: z.string(),
  }),
  unidadeCurricular: z.object({
    id: z.number(),
  }),
  professor: z.object({
    id: z.number(),
  }),
  ambiente: z.object({
    id: z.number(),
  }),
  semana: z.object({
    segunda: z.object({
      value: z.string(),
    }),
    terca: z.object({
      value: z.string(),
    }),
    quarta: z.object({
      value: z.string(),
    }),
    quinta: z.object({
      value: z.string(),
    }),
    sexta: z.object({
      value: z.string(),
    }),
    sabado: z.object({
      value: z.string(),
    }),
    domingo: z.object({
      value: z.string(),
    }),
  })
});

export type AulaType = z.infer<typeof aulaInput>;

interface ModalCreateNewClassProps {
  name: string;
  closeModal(): void;
}

interface SemanaProps {
  id: number;
  ativo: string;
}
[];

export function ModalCreateNewClass({
  name,
  closeModal,
}: ModalCreateNewClassProps) {
  const { courses, placesList, curricularUnit, teachers } =
    useContext(ObjectsContext);
  const { register, handleSubmit, reset } = useForm<AulaType>();

  const [semanaDays, setSemanaDays] = useState<SemanaProps[]>([]);

  async function handleCreateAulaAPI(aula: AulaType) {
    console.log(aula);
    // const res = await API.post(`aula`, aula);
  }

  const courseFiltedByType = courses.filter((course) => {
    if (course.tipoCurso.toLowerCase() == name.toLowerCase()) {
      return course;
    }
    if (name == "customizável") {
      return course;
    }
  });

  async function handleCreateNewAula(data: AulaType) {
    handleCreateAulaAPI(data);
    reset();
    closeModal();
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseButton>
          <X size={35} />
        </CloseButton>

        <Dialog.Title>Aula {name}</Dialog.Title>
        <ModalCreateClassContent onSubmit={handleSubmit(handleCreateNewAula)}>
          <ModalCreateClassContentLine>
            <label htmlFor="">Curso</label>
            <select {...register("curso.id")} name="" id="">
              {courseFiltedByType.map((course) => {
                return (
                  <option key={course.id} value={course.id}>
                    {course.nome}
                  </option>
                );
              })}
            </select>
          </ModalCreateClassContentLine>

          <ModalCreateClassContentLine>
            <label htmlFor="">Unidade Curricular</label>
            <select {...register("unidadeCurricular.id")} name="" id="">
              {curricularUnit.map((unidade) => {
                return (
                  <option key={unidade.id} value={unidade.id}>
                    {unidade.nome}
                  </option>
                );
              })}
            </select>
          </ModalCreateClassContentLine>

          <ModalCreateClassContentLine>
            <label htmlFor="">Código da turma</label>
            <input
              type="text"
              {...register("codTurma")}
              placeholder="Digite o código da turma"
            />
          </ModalCreateClassContentLine>

          <ModalCreateClassContentLines>
            <ModalCreateClassContentCollum>
              <label htmlFor="">Periodo</label>
              <select {...register("periodo")} name="" id="">
                <option value="MANHA">Manhã</option>
                <option value="TARDE">Tarde</option>
                <option value="NOITE">Noite</option>
                <option value="">Dia todo</option>
              </select>
            </ModalCreateClassContentCollum>
            <ModalCreateClassContentCollum>
              <label htmlFor="">Data inicio</label>
              <input type="date" {...register("dataInicio")} />
            </ModalCreateClassContentCollum>
          </ModalCreateClassContentLines>

          <ModalCreateClassDays>
            <span>
              <label>Dom</label>
              <HomeCheckBox {...register("semana.domingo.value")}>
                <HomeCheckBoxIndicator>
                  <Check size={20} weight="bold" color="#fff" />
                </HomeCheckBoxIndicator>
              </HomeCheckBox>
            </span>
            <span>
              <label>Seg</label>
              <HomeCheckBox {...register("semana.segunda.value")}>
                <HomeCheckBoxIndicator>
                  <Check size={20} weight="bold" color="#fff" />
                </HomeCheckBoxIndicator>
              </HomeCheckBox>
            </span>
            <span>
              <label>Ter</label>
              <HomeCheckBox {...register("semana.terca.value")}>
                <HomeCheckBoxIndicator >
                  <Check size={20} weight="bold" color="#fff" />
                </HomeCheckBoxIndicator>
              </HomeCheckBox>
            </span>
            <span>
              <label>Qua</label>
              <HomeCheckBox {...register("semana.quarta.value")}>
                <HomeCheckBoxIndicator >
                  <Check size={20} weight="bold" color="#fff" />
                </HomeCheckBoxIndicator>
              </HomeCheckBox>
            </span>
            <span>
              <label>Qui</label>
              <HomeCheckBox {...register("semana.quinta.value")}>
                <HomeCheckBoxIndicator  >
                  <Check size={20} weight="bold" color="#fff" />
                </HomeCheckBoxIndicator>
              </HomeCheckBox>
            </span>
            <span>
              <label>Sex</label>
              <HomeCheckBox {...register("semana.sexta.value")}>
                <HomeCheckBoxIndicator >
                  <Check size={20} weight="bold" color="#fff" />
                </HomeCheckBoxIndicator>
              </HomeCheckBox>
            </span>
            <span>
              <label>Sab</label>
              <HomeCheckBox {...register("semana.sabado.value")}>
                <HomeCheckBoxIndicator >
                  <Check size={20} weight="bold" color="#fff" />
                </HomeCheckBoxIndicator>
              </HomeCheckBox>
            </span>
          </ModalCreateClassDays>

          <ModalCreateClassContentLines>
            <ModalCreateClassContentCollum>
              <label htmlFor="">Professor</label>
              <select id="" {...register("professor.id")}>
                {teachers.map((teacher) => {
                  return (
                    <option key={teacher.id} value={teacher.id}>
                      {teacher.nome}
                    </option>
                  );
                })}
              </select>
            </ModalCreateClassContentCollum>

            <ModalCreateClassContentCollum>
              <label htmlFor="">Hora(s) por dia</label>
              <input
                {...register("cargaDiaria")}
                type="number"
                placeholder="Digite as horas"
              />
            </ModalCreateClassContentCollum>
          </ModalCreateClassContentLines>

          <ModalCreateClassContentLine>
            <label htmlFor="">Ambiente</label>
            <select
              {...register("ambiente.id")}
              placeholder="Digite o código da turma"
            >
              {placesList.map((place) => {
                return (
                  <option value={place.id} key={place.id}>
                    {place.nome}
                  </option>
                );
              })}
            </select>
          </ModalCreateClassContentLine>

          <ModalCreateClassSumarryContent>
            <img src={Resumo} alt="" />

            <div>
              <h3>Resumo</h3>
              <p>
                Data inicial: <strong>dd/MM/yyyy</strong>
              </p>
              <p>
                Dias <strong>Qua, Qui</strong>
              </p>
              <p>
                Horas por dia: <strong>XXh</strong>
              </p>
              <p>
                Data Final: <strong>dd/MM/yyyy</strong>
              </p>
            </div>
          </ModalCreateClassSumarryContent>

          <HomeCheckBoxButton>Criar</HomeCheckBoxButton>
        </ModalCreateClassContent>
      </Content>
    </Dialog.Portal>
  );
}
