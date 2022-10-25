import * as Dialog from "@radix-ui/react-dialog";
import { Check, X } from "phosphor-react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import {  z } from "zod";
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
  semana: z.boolean().array(),
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
  const { courses, placesList, curricularUnit, teachers } =
    useContext(ObjectsContext);
  const { register, handleSubmit, reset } = useForm<AulaType>();
  const [values, setValues] = useState<string[]>([]);

  async function handleCreateAulaAPI(aula: AulaType) {
    const semanas: boolean[] = [];

    for (var i = 1; i < 8; i++) {
      if (values.filter((val) => val === `${i}`).length == 0) {
        semanas.push(false);
      } else {
        semanas.push(true);
      }
    }

    console.log(semanas);
    const unidadeCurricular = curricularUnit.filter(
      (value) => value.id == aula.unidadeCurricular.id
    );
    const teacherMap = teachers.filter(
      (value) => value.id == aula.professor.id
    );
    const courseMap = courses.filter((value) => value.id == aula.curso.id);
    const localMap = placesList.filter((value) => value.id == aula.ambiente.id);

    console.log({
      curso: {
        id: courseMap[0]?.id,
        ativo: courseMap[0]?.ativo,
        nome: courseMap[0]?.nome,
        tipoCurso: courseMap[0]?.tipoCurso,
        unidadeCurricular: courseMap[0]?.unidadeCurricular,
      },
      unidadeCurricular: {
        id: unidadeCurricular[0]?.id,
        nome: unidadeCurricular[0]?.nome,
        horas: unidadeCurricular[0]?.horas,
      },
      codTurma: aula.codTurma,
      periodo: aula.periodo,
      dataInicio: aula.dataInicio,
      ambiente: {
        id: localMap[0]?.id,
        nome: localMap[0]?.nome,
        capacidade: localMap[0]?.capacidade,
        tipoAmbiente: localMap[0]?.tipoAmbiente,
        cep: localMap[0]?.cep,
        complemento: localMap[0]?.complemento,
        ativo: localMap[0]?.ativo,
      },
      professor: {
        id: teacherMap[0]?.id,
        nome: teacherMap[0]?.nome,
        cargaSemanal: teacherMap[0]?.cargaSemanal,
        ativo: teacherMap[0]?.ativo,
        foto: teacherMap[0]?.foto,
        email: teacherMap[0]?.email,
        competencia: teacherMap[0]?.competencia,
      },
      cargaDiaria: aula.cargaDiaria,
      diaSemana: semanas,
    });

    const res = await API.post("aula", {
      curso: {
        id: courseMap[0]?.id,
        ativo: courseMap[0]?.ativo,
        nome: courseMap[0]?.nome,
        tipoCurso: courseMap[0]?.tipoCurso,
        unidadeCurricular: courseMap[0]?.unidadeCurricular,
      },
      unidadeCurricular: {
        id: unidadeCurricular[0]?.id,
        nome: unidadeCurricular[0]?.nome,
        horas: unidadeCurricular[0]?.horas,
      },
      codTurma: aula.codTurma,
      periodo: aula.periodo,
      dataInicio: aula.dataInicio,
      ambiente: {
        id: localMap[0]?.id,
        nome: localMap[0]?.nome,
        capacidade: localMap[0]?.capacidade,
        tipoAmbiente: localMap[0]?.tipoAmbiente,
        cep: localMap[0]?.cep,
        complemento: localMap[0]?.complemento,
        ativo: localMap[0]?.ativo,
      },
      professor: {
        id: teacherMap[0]?.id,
        nome: teacherMap[0]?.nome,
        cargaSemanal: teacherMap[0]?.cargaSemanal,
        ativo: teacherMap[0]?.ativo,
        foto: teacherMap[0]?.foto,
        email: teacherMap[0]?.email,
        competencia: teacherMap[0]?.competencia,
      },
      cargaDiaria: aula.cargaDiaria,
      diaSemana: semanas,
    });
    console.log(res);
    if (res.status === 200) {
      console.log("criou as aulas com sucesso!");
    }
  }

  function hadleValueChange(event: any) {
    const index = values.indexOf(event);
    if (index === -1) {
      setValues([...values, event]);
    } else {
      setValues(values.filter((val) => val !== event));
    }
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
    // handleArray();
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
              <HomeCheckBox onCheckedChange={(e) => hadleValueChange("1")}>
                <HomeCheckBoxIndicator>
                  <Check size={20} weight="bold" color="#fff" />
                </HomeCheckBoxIndicator>
              </HomeCheckBox>
            </span>
            <span>
              <label>Seg</label>
              <HomeCheckBox onCheckedChange={(e) => hadleValueChange("2")}>
                <HomeCheckBoxIndicator>
                  <Check size={20} weight="bold" color="#fff" />
                </HomeCheckBoxIndicator>
              </HomeCheckBox>
            </span>
            <span>
              <label>Ter</label>
              <HomeCheckBox onCheckedChange={(e) => hadleValueChange("3")}>
                <HomeCheckBoxIndicator>
                  <Check size={20} weight="bold" color="#fff" />
                </HomeCheckBoxIndicator>
              </HomeCheckBox>
            </span>
            <span>
              <label>Qua</label>
              <HomeCheckBox onCheckedChange={(e) => hadleValueChange("4")}>
                <HomeCheckBoxIndicator>
                  <Check size={20} weight="bold" color="#fff" />
                </HomeCheckBoxIndicator>
              </HomeCheckBox>
            </span>
            <span>
              <label>Qui</label>
              <HomeCheckBox onCheckedChange={(e) => hadleValueChange("5")}>
                <HomeCheckBoxIndicator>
                  <Check size={20} weight="bold" color="#fff" />
                </HomeCheckBoxIndicator>
              </HomeCheckBox>
            </span>
            <span>
              <label>Sex</label>
              <HomeCheckBox onCheckedChange={(e) => hadleValueChange("6")}>
                <HomeCheckBoxIndicator>
                  <Check size={20} weight="bold" color="#fff" />
                </HomeCheckBoxIndicator>
              </HomeCheckBox>
            </span>
            <span>
              <label>Sab</label>
              <HomeCheckBox onCheckedChange={(e) => hadleValueChange("7")}>
                <HomeCheckBoxIndicator>
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
