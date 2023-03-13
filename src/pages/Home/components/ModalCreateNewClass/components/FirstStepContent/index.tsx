import { format } from "date-fns";
import { ArrowRight, Check } from "phosphor-react";
import { ChangeEvent, useContext, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { ThemeContext } from "styled-components";
import { classPropsFirstStep } from "../..";
import {
  CourseProps,
  ResourcesContext,
} from "../../../../../../contexts/ResourcesContext";
import {
  CheckboxIndicator,
  CheckboxRoot,
  CheckIndividual,
  ChecksContent,
  FinalButton,
  InputContainer,
  InputContent,
  InputIndividual,
  Steps,
} from "../../style";

interface IfirstStepContentProps {
  name: string;
  handleNextStep: (step: number) => void;
  createFirstStep: (data: classPropsFirstStep) => void;
}

export function FirstStepContent({
  name,
  handleNextStep,
  createFirstStep,
}: IfirstStepContentProps) {
  const [selectedCourse, setSelectedCourse] = useState<CourseProps>();
  const [selectedDay, setSelectedDay] = useState("");
  const [dia, setDia] = useState("");
  const [segundaSelected, setSegundaSelected] = useState(false);
  const [terSelected, setTerSelected] = useState(false);
  const [quaSelected, setQuaSelected] = useState(false);
  const [quiSelected, setQuiSelected] = useState(false);
  const [sexSelected, setSexSelected] = useState(false);
  const [sabSelected, setSabSelected] = useState(false);
  const [domSelected, setDomSelected] = useState(false);
  const [lastSelected, setLastSelected] = useState("");
  const { courses } = useContext(ResourcesContext);
  const {
    control,
    register,
    setValue,
    watch,
    getValues,
    resetField,
  } = useFormContext();
  const themeContext = useContext(ThemeContext)

  //Aqui eu exibo as unidades curriculares do curso que a pessoa selecionou
  function onChangeCourse(event: ChangeEvent<HTMLSelectElement>) {
    const course = courses.find(
      (course) => course?.id?.toString() == event.target.value
    );
    setValue("unidadeCurricular.id", "");
    setSelectedCourse(course);
  }
  let codTurmaValidation: string = watch("codTurma");

  const isValidForm =
    watch("curso.id") != undefined &&
    watch("unidadeCurricular.id") != undefined &&
    selectedDay != "" &&
    watch("codTurma") != "" &&
    watch("periodo") != "" &&
    watch("cargaDiaria") != "" &&
    codTurmaValidation?.length >= 2 &&
    watch("cargaDiaria") <= 8 &&
    watch("cargaDiaria") >= 2 &&
    codTurmaValidation?.length <= 20;

  function onChangeDataWithWeek(event: ChangeEvent<HTMLDataElement>) {
    const diaSelecionado = event.target.value;
    setDia(diaSelecionado);
    diaSelecionado.replace("-", ", ");
    //Descobrindo o dia da semana
    const selecionadoDia = format(new Date(diaSelecionado), "i");
    switch (lastSelected) {
      case "6":
        setDomSelected(false);
        break;
      case "7":
        setSegundaSelected(false);
        break;
      case "1":
        setTerSelected(false);
        break;
      case "2":
        setQuaSelected(false);
        break;
      case "3":
        setQuiSelected(false);
        break;
      case "4":
        setSexSelected(false);
        break;
      case "5":
        setSabSelected(false);
        break;
      default:
        break;
    }
    setSelectedDay(selecionadoDia);
    setLastSelected(selecionadoDia);
    switch (selecionadoDia) {
      case "6":
        setDomSelected(true);
        break;
      case "7":
        setSegundaSelected(true);
        break;
      case "1":
        setTerSelected(true);
        break;
      case "2":
        setQuaSelected(true);
        break;
      case "3":
        setQuiSelected(true);
        break;
      case "4":
        setSexSelected(true);
        break;
      case "5":
        setSabSelected(true);
        break;
      default:
        break;
    }
  }

  const data = {
    curso: {
      id: getValues("curso.id"),
    },
    unidadeCurricular: getValues("unidadeCurricular"),
    codTurma: getValues("codTurma"),
    periodo: getValues("periodo"),
    dataInicio: dia,
    diaSemana: [
      domSelected,
      segundaSelected,
      terSelected,
      quaSelected,
      quiSelected,
      sexSelected,
      sabSelected,
    ],
    cargaDiaria: getValues("cargaDiaria"),
  };

  function createClassFirstStep() {
    setValue("diaSemana", data.diaSemana);
    createFirstStep(data);
    resetField("professor.id");
    resetField("ambiente.id");
  }

  return (
    <InputContainer>
      <InputContent>
        <span>
          Informe os dados básicos da aula para checarmos os professores e
          ambientes disponíveis...
        </span>
      </InputContent>
      <InputContent>
        <label>Passo 1 de 3</label>
        <Steps>
          <div style={{ backgroundColor: themeContext.primary_300 }}></div>
          <div style={{ backgroundColor: "#B6B6B6" }}></div>
          <div style={{ backgroundColor: "#B6B6B6" }}></div>
        </Steps>
      </InputContent>
      <InputContent>
        <label>Curso</label>
        <select
          {...register("curso.id")}
          onChange={onChangeCourse}
          defaultValue=""
        >
          <option value="" disabled>
            Selecione um curso...
          </option>
          {courses.map((course) => {
            if (name == "customizável"  &&
            course.ativo == true) {
              return (
                <option key={course.id} value={course.id}>
                  {course.nome}
                </option>
              );
            } else if (
              course.tipo.toLowerCase() == name &&
              course.ativo == true
            ) {
              return (
                <option key={course.id} value={course.id}>
                  {course.nome}
                </option>
              );
            }
          })}
        </select>
      </InputContent>
      <InputContent>
        <label
          style={selectedCourse ? { opacity: "100%" } : { opacity: "30%" }}
        >
          Unidade curricular
        </label>
        <select
          {...register("unidadeCurricular.id")}
          defaultValue=""
          disabled={selectedCourse == undefined}
        >
          <option value="">Selecione uma unidade curricular...</option>
          {selectedCourse?.unidadeCurricular.map((unidade) => {
            return (
              <option key={unidade.id} value={unidade.id?.toString()}>
                {unidade.nome}
              </option>
            );
          })}
        </select>
      </InputContent>
      <InputContent style={{ flexDirection: "row" }}>
        <InputIndividual>
          <label>Código da turma</label>
          <input
            type="text"
            {...register("codTurma")}
            placeholder="Digite o código da turma..."
          />
          {codTurmaValidation?.length >= 20 && <p> * Deve se menor que 20</p>}
          {codTurmaValidation?.length < 2 && watch("codTurma") != "" && (
            <p> * Deve se maior que 2</p>
          )}
        </InputIndividual>
        <InputIndividual>
          <label>Hora(s) por dia</label>
          <input
            type="number"
            max={8}
            required
            onFocus={(e) => e.target.addEventListener("wheel", function (e) { e.preventDefault() }, { passive: false })}
            placeholder="Digite as horas..."
            {...register("cargaDiaria")}
          />
          {watch("cargaDiaria") > 8 && <p> * Deve se menor que 9h</p>}
          {watch("cargaDiaria") < 2 && watch("cargaDiaria") != "" && (
            <p> * Deve se maior que 2h</p>
          )}
        </InputIndividual>
      </InputContent>
      <InputContent style={{ flexDirection: "row" }}>
        <InputIndividual>
          <label>Periodo</label>
          <select
            placeholder="Selecione um periodo..."
            {...register("periodo")}
            defaultValue=""
          >
            <option value="" disabled>
              Selecione um periodo...
            </option>
            <option value="MANHA">Manhã</option>
            <option value="TARDE">Tarde</option>
            <option value="NOITE">Noite</option>
            <option value="INTEGRAL">Integral</option>
          </select>
          {/* {errors.periodo && <p>* Selecione um valor...</p>} */}
        </InputIndividual>
        <InputIndividual>
          <label>Data de início</label>
          <input
            type="date"
            {...register("dataInicio")}
            onChange={onChangeDataWithWeek}
          />
        </InputIndividual>
      </InputContent>

      <Controller
        control={control}
        name="diaSemana"
        render={({ field }) => {
          return (
            <ChecksContent>
              <CheckIndividual title="Domingo">
                <label>Dom</label>
                <CheckboxRoot
                  {...register(`diaSemana.${0}`, { value: false })}
                  onCheckedChange={(checked) => {
                    setValue(`diaSemana.${0}`, checked ? true : false);
                    setDomSelected(selectedDay == "6" ? false : !domSelected);
                  }}
                  checked={selectedDay == "6" ? true : domSelected}
                >
                  <CheckboxIndicator>
                    <Check size={30} weight="bold" color="#fff" />
                  </CheckboxIndicator>
                </CheckboxRoot>
              </CheckIndividual>
              <CheckIndividual title="Segunda-feira">
                <label>Seg</label>
                <CheckboxRoot
                  {...register(`diaSemana.${1}`, { value: false })}
                  onCheckedChange={(checked) => {
                    setValue(`diaSemana.${1}`, checked ? true : false);
                    setSegundaSelected(
                      selectedDay == "7" ? false : !segundaSelected
                    );
                  }}
                  checked={selectedDay == "7" ? true : segundaSelected}
                >
                  <CheckboxIndicator>
                    <Check size={30} weight="bold" color="#fff" />
                  </CheckboxIndicator>
                </CheckboxRoot>
              </CheckIndividual>
              <CheckIndividual title="Terça-feira">
                <label>Ter</label>
                <CheckboxRoot
                  {...register(`diaSemana.${2}`, { value: false })}
                  onCheckedChange={(checked) => {
                    setValue(`diaSemana.${2}`, checked ? true : false);
                    setTerSelected(selectedDay == "1" ? false : !terSelected);
                  }}
                  checked={selectedDay == "1" ? true : terSelected}
                >
                  <CheckboxIndicator>
                    <Check size={30} weight="bold" color="#fff" />
                  </CheckboxIndicator>
                </CheckboxRoot>
              </CheckIndividual>
              <CheckIndividual title="Quarta-feira">
                <label>Qua</label>
                <CheckboxRoot
                  {...register(`diaSemana.${3}`, { value: false })}
                  onCheckedChange={(checked) => {
                    setValue(`diaSemana.${3}`, checked ? true : false);
                    setQuaSelected(selectedDay == "2" ? false : !quaSelected);
                  }}
                  checked={selectedDay == "2" ? true : quaSelected}
                >
                  <CheckboxIndicator>
                    <Check size={30} weight="bold" color="#fff" />
                  </CheckboxIndicator>
                </CheckboxRoot>
              </CheckIndividual>
              <CheckIndividual title="Quinta-feira">
                <label>Qui</label>
                <CheckboxRoot
                  {...register(`diaSemana.${4}`, { value: false })}
                  onCheckedChange={(checked) => {
                    setValue(`diaSemana.${4}`, checked ? true : false);
                    setQuiSelected(selectedDay == "3" ? false : !quiSelected);
                  }}
                  checked={selectedDay == "3" ? true : quiSelected}
                >
                  <CheckboxIndicator>
                    <Check size={30} weight="bold" color="#fff" />
                  </CheckboxIndicator>
                </CheckboxRoot>
              </CheckIndividual>
              <CheckIndividual title="Sexta-feira">
                <label>Sex</label>
                <CheckboxRoot
                  {...register(`diaSemana.${5}`, { value: false })}
                  onCheckedChange={(checked) => {
                    console.log(checked);
                    setValue(`diaSemana.${5}`, checked ? true : false);
                    setSexSelected(selectedDay == "4" ? false : !sexSelected);
                  }}
                  checked={selectedDay == "4" ? true : sexSelected}
                >
                  <CheckboxIndicator>
                    <Check size={30} weight="bold" color="#fff" />
                  </CheckboxIndicator>
                </CheckboxRoot>
              </CheckIndividual>
              <CheckIndividual title="Sábado">
                <label>Sab</label>
                <CheckboxRoot
                  {...register(`diaSemana.${6}`, { value: false })}
                  onCheckedChange={(checked) => {
                    console.log(checked);
                    setValue(`diaSemana.${6}`, checked ? true : false);
                    setSabSelected(selectedDay == "5" ? false : !sabSelected);
                  }}
                  checked={selectedDay == "5" ? true : sabSelected}
                >
                  <CheckboxIndicator>
                    <Check size={30} weight="bold" color="#fff" />
                  </CheckboxIndicator>
                </CheckboxRoot>
              </CheckIndividual>
            </ChecksContent>
          );
        }}
      />
      <FinalButton>
        <button
          disabled={!isValidForm}
          onClick={() => {
            handleNextStep(1);
            createClassFirstStep();
          }}
          type="button"
        >
          {!isValidForm ? "Ainda há informações pendentes" : "Próximo passo "}
          <ArrowRight size={30} />
        </button>
      </FinalButton>
    </InputContainer>
  );
}
