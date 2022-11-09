import * as Dialog from "@radix-ui/react-dialog";
import { Check, X } from "phosphor-react";
import { ChangeEvent, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Resumo from "../../../../assets/Resumo.svg";
import {
  CourseProps,
  ObjectsContext,
} from "../../../../contexts/ObjectsContext";
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
  unidadeCurricular: z.object({
    id: z.number(),
  }),
  professor: z.object({
    id: z.number(),
  }),
  ambiente: z.object({
    id: z.number(),
  }),
  curso: z.object({
    id: z.number(),
  }),
});

export type AulaType = z.infer<typeof aulaInput>;

interface ModalCreateNewClassProps {
  name: string;
  closeModal(): void;
}

export function ModalCreateNewClass({
  name,
  closeModal,
}: ModalCreateNewClassProps) {
  //Pegando os valores do context
  //Quando o back fazer o metedo, isso daqui vai fica só com cursos
  const { courses, placesList, teachers } = useContext(ObjectsContext);

  const { register, handleSubmit, reset, watch, setValue } = useForm<AulaType>({
    defaultValues: {
      diaSemana: [false],
    },
  });

  const [selectedCourse, setSelectedCourse] = useState<CourseProps>();

  //Aqui eu só mostro os cursos que são do tipo que a pessoa clicou no botão
  const courseFiltedByType = courses.filter((course) => {
    if (course.tipo.toLowerCase() == name.toLowerCase()) {
      return course;
    }
    if (name == "Customizável") {
      return course;
    }
  });

  //Aqui eu exibo as unidades curriculares do curso que a pessoa selecionou
  function onChangeCourse(event: ChangeEvent<HTMLSelectElement>) {
    const course = courses.find(
      (course) => course?.id?.toString() == event.target.value
    );
    setSelectedCourse(course);
  }

  async function handleCreateNewAula(data: AulaType) {
    console.log(data)
    const res = await API.post("aula", data);
    
      console.log(res);
      reset();
      closeModal();
    
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content onCloseAutoFocus={() => reset()}>
        <CloseButton>
          <X size={35} />
        </CloseButton>

        <Dialog.Title>Aula {name}</Dialog.Title>
        <ModalCreateClassContent onSubmit={handleSubmit(handleCreateNewAula)}>
          <ModalCreateClassContentLine>
            <label htmlFor="">Curso</label>
            <select
              {...register("curso.id")}
              onChange={onChangeCourse}
              defaultValue=""
            >
              <option value={""}>Selecione um curso</option>
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
            <select
              {...register("unidadeCurricular.id")}
              defaultValue=""
              disabled={selectedCourse == undefined}
            >
              <option value={""}>Selecione uma unidade</option>
              {selectedCourse?.unidadeCurricular.map((unidade) => {
                return (
                  <option key={unidade.id} value={unidade.id?.toString()}>
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
              <select {...register("periodo")} defaultValue="">
                <option value="">Selecione um período</option>
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
              <HomeCheckBox
                {...register(`diaSemana.${0}`, { value: false })}
                onCheckedChange={(checked) => {
                  console.log(checked);
                  setValue(`diaSemana.${0}`, checked ? true : false);
                }}
              >
                <HomeCheckBoxIndicator>
                  <Check size={20} weight="bold" color="#fff" />
                </HomeCheckBoxIndicator>
              </HomeCheckBox>
            </span>
            <span>
              <label>Seg</label>
              <HomeCheckBox
                {...register(`diaSemana.${1}`, { value: false })}
                onCheckedChange={(checked) => {
                  console.log(checked);
                  setValue(`diaSemana.${1}`, checked ? true : false);
                }}
              >
                <HomeCheckBoxIndicator>
                  <Check size={20} weight="bold" color="#fff" />
                </HomeCheckBoxIndicator>
              </HomeCheckBox>
            </span>
            <span>
              <label>Ter</label>
              <HomeCheckBox
                {...register(`diaSemana.${2}`, { value: false })}
                onCheckedChange={(checked) => {
                  console.log(checked);
                  setValue(`diaSemana.${2}`, checked ? true : false);
                }}
              >
                <HomeCheckBoxIndicator>
                  <Check size={20} weight="bold" color="#fff" />
                </HomeCheckBoxIndicator>
              </HomeCheckBox>
            </span>
            <span>
              <label>Qua</label>
              <HomeCheckBox
                {...register(`diaSemana.${3}`, { value: false })}
                onCheckedChange={(checked) => {
                  console.log(checked);
                  setValue(`diaSemana.${3}`, checked ? true : false);
                }}
              >
                <HomeCheckBoxIndicator>
                  <Check size={20} weight="bold" color="#fff" />
                </HomeCheckBoxIndicator>
              </HomeCheckBox>
            </span>
            <span>
              <label>Qui</label>
              <HomeCheckBox
                {...register(`diaSemana.${4}`, { value: false })}
                onCheckedChange={(checked) => {
                  console.log(checked);
                  setValue(`diaSemana.${4}`, checked ? true : false);
                }}
              >
                <HomeCheckBoxIndicator>
                  <Check size={20} weight="bold" color="#fff" />
                </HomeCheckBoxIndicator>
              </HomeCheckBox>
            </span>
            <span>
              <label>Sex</label>
              <HomeCheckBox
                {...register(`diaSemana.${5}`, { value: false })}
                onCheckedChange={(checked) => {
                  console.log(checked);
                  setValue(`diaSemana.${5}`, checked ? true : false);
                }}
              >
                <HomeCheckBoxIndicator>
                  <Check size={20} weight="bold" color="#fff" />
                </HomeCheckBoxIndicator>
              </HomeCheckBox>
            </span>
            <span>
              <label>Sab</label>
              <HomeCheckBox
                {...register(`diaSemana.${6}`, { value: false })}
                onCheckedChange={(checked) => {
                  console.log(checked);
                  setValue(`diaSemana.${6}`, checked ? true : false);
                }}
              >
                <HomeCheckBoxIndicator>
                  <Check size={20} weight="bold" color="#fff" />
                </HomeCheckBoxIndicator>
              </HomeCheckBox>
            </span>
          </ModalCreateClassDays>

          <ModalCreateClassContentLines>
            <ModalCreateClassContentCollum>
              <label>Professor</label>
              <select {...register("professor.id")}>
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
              <label>Hora(s) por dia</label>
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
            defaultValue=""
              {...register("ambiente.id")}
            >
              <option value="" disabled>Selecione um ambiente</option>
              {placesList.map((place) => {
                return (
                  <option value={place.id} key={place.id}>
                    {place.nome}
                  </option>
                );
              })}
            </select>
          </ModalCreateClassContentLine>
          <HomeCheckBoxButton type="submit">Criar</HomeCheckBoxButton>
        </ModalCreateClassContent>
      </Content>
    </Dialog.Portal>
  );
}
