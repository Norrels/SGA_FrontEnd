import {
  AdvancedContainer,
  AdvancedContent,
  AdvancedContentTitle,
  AdvancedFilterContainer,
  AdvancedFilterItens,
  AdvancedFilterLabel,
  AdvancedFilterTotal,
  AdvancedSearchAutocomplete,
  AdvancedSearchInput,
  AdvancedTableContent,
  AdvancedTitleContainer,
} from "./style";
import { CaretDown, Sliders } from "phosphor-react";
import * as Accordion from "@radix-ui/react-accordion";
import { AdvancedSeachTable } from "./components/AdvancedSearchTable";
import { useContext, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { ObjectsContext } from "../../contexts/ObjectsContext";
import { API } from "../../lib/axios";
import { z } from "zod";
import { getDay, setDay } from "date-fns";

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
    tipo: z.string(),
    nome: z.string(),
  }),
  semana: z.boolean().array(),
});

export const searchValue = z.object({
  busca: z.string(),
});

export interface CourseProps {
  id: number;
  nome: string;
  tipoCurso: string;
  ativo?: boolean;
  unidadeCurricular: {
    id?: number | null;
    nome: string;
    horas: number;
  }[];
}
[];

export interface unidadeCurricular {
  id?: number;
  nome: string;
  horas: number;
}
[];

export type AulaTypeSuper = z.infer<typeof aulaInput>;

export type SearchValue = z.infer<typeof searchValue>;

export default function AdvancedSearch() {
  const [aula, setAula] = useState<AulaTypeSuper[]>([]);
  const [classMatch, setClassMatch] = useState<AulaTypeSuper[]>([]);
  const [unidadeMatch, setUnidadeMatch] = useState<unidadeCurricular[]>([]);
  const [inputValue, setInputValue] = useState<String>("");
  const [unidade, setUnidade] = useState<unidadeCurricular[]>([]);
  const [busca, setBusca] = useState<String[]>([]);
  const [saveClass, setSaveClass] = useState<AulaTypeSuper[]>([]);
  const [initialDate, setInitialDate] = useState<String>("");
  const [lastDate, setLastDate] = useState<String>("");
  const [teacherMatch, setTeacherMatch] = useState<String[]>([]);
  const [placeMatch, setPlaceMatch] = useState<String[]>([]);
  const [semanaMatch, setSemanaMatch] = useState<String[]>([]);

  const { register, handleSubmit, reset } = useForm<SearchValue>();
  const { teachers, placesList } = useContext(ObjectsContext);
  

  const searchCourse = (text: String) => {
    setInputValue(text);
    if (!text) {
      setUnidadeMatch([]);
    } else {
      let matches = unidade.filter((unCurricular) => {
        const regex = new RegExp(`${text}`);
        return unCurricular.nome.match(regex);
      });
      setUnidadeMatch(matches);
    }
  };

  function handleCreateArrayTeacher(value: String) {
    if (teacherMatch.some((v) => v == value)) {
      setTeacherMatch(teacherMatch.filter((c) => c !== value));
    } else {
      setTeacherMatch([...teacherMatch, value]);
    }
  }

  function handleCreateArrayPlace(value: String) {
    if (placeMatch.some((v) => v == value)) {
      setPlaceMatch(placeMatch.filter((c) => c !== value));
    } else {
      setPlaceMatch([...placeMatch, value]);
    }
  }

  function handleCreateSemanaArray(value: String) {
    if (semanaMatch.some((v) => v == value)) {
      setSemanaMatch(semanaMatch.filter((c) => c !== value));
    } else {
      setSemanaMatch([...semanaMatch, value]);
    }
  }

  function handleCreateInitAndFinalDateFns(value: string) {
    var valueSave = value.split("-");
    if (valueSave[0] == "init") {
      if (valueSave[2] == undefined) {
        setInitialDate("");
      } else {
        setInitialDate(valueSave[3] + "/" + valueSave[2] + "/" + valueSave[1]);
      }
    } else if (valueSave[0] == "finl") {
      if (valueSave[2] == undefined) {
        setLastDate("");
      } else {
        setLastDate(valueSave[3] + "/" + valueSave[2] + "/" + valueSave[1]);
      }
    }
  }

  function handleCreateArray(value: String) {
    if (busca.some((v) => v == value)) {
      setBusca(busca.filter((c) => c !== value));
    } else {
      setBusca([...busca, value]);
    }
  }

  async function handleGet() {
    const res = await API.get("aula");

    if (res.data.length > 0) {
      setAula(res.data);

      setClassMatch(res.data);
    }
  }

  useEffect(() => {
    console.log(placeMatch);
  }, [placeMatch]);

  useEffect(() => {
    handleGet();
    searchClass("");
    handleGetAllUnit();
  }, []);

  useEffect(() => {
    /**
     *
     *    @Filter Logic
     *
     *    Tentando Montar o @Filter
     *    @Const aula.@some => traz @Boolean caso Algo Exista No Array.
     *
     *    Metódo @handleCreateArray complementa esse onde no @handleCreateArray
     *    Define o array para fazer o filtro
     *
     *    Olá Programador, neste filtro foram gastadas 15 horas.
     *    @AVidaÉTriste
     *
     */

    handleMapArray();
  }, [busca, initialDate, lastDate, teacherMatch, placeMatch]);

  useEffect(() => {
    const saveDup = saveClass.filter((val, id) => saveClass.indexOf(val) == id);
    console.log(saveDup);
    setClassMatch(saveDup);
  }, [saveClass]);

  function handleMapArray() {
    let last = [...busca].pop();
    let lastTeacher = [...teacherMatch].pop();
    let lastPlace = [...placeMatch].pop();

    if (last == null) {
      if (initialDate != "" || lastDate != "") {
        var _l: AulaTypeSuper[] = [];
        if (initialDate.length > 0 && lastDate.length > 0) {
          _l = aula.filter((e) => e.data >= initialDate && e.data <= lastDate);
        } else if (initialDate.length == 0 && lastDate.length > 0) {
          _l = aula.filter((e) => e.data <= lastDate);
        } else if (lastDate.length == 0 && initialDate.length > 0) {
          _l = aula.filter((e) => e.data >= initialDate);
        } else {
          _l = [];
        }

        if (placeMatch.length > 0 && teacherMatch.length > 0) {
          _l = _l.filter(
            (e) =>
              e.ambiente.nome == lastPlace && e.professor.nome == lastTeacher
          );

          if (_l.length > 0) {
            setSaveClass([...saveClass, ..._l]);
          } else {
            setSaveClass([]);
          }
        }

        if (teacherMatch.length > 0 || placeMatch.length > 0) {
          _l = _l.filter(
            (e) =>
              e.professor.nome == lastTeacher || e.ambiente.nome == lastPlace
          );

          if (_l.length > 0) {
            setSaveClass([...saveClass, ..._l]);
          } else {
            setSaveClass([]);
          }
        }

        if (_l.length == 0 && initialDate == null && lastDate == null) {
          setSaveClass(aula);
        } else {
          setSaveClass(_l);
        }
      } else if (teacherMatch.length != 0) {
        const regex = new RegExp(`${lastTeacher}`);
        var _l = aula.filter((value) => value.professor.nome.match(regex));

        if (initialDate.length > 0 && lastDate.length > 0) {
          _l = _l.filter((e) => e.data >= initialDate && e.data <= lastDate);
        } else if (initialDate.length == 0 && lastDate.length > 0) {
          _l = _l.filter((e) => e.data <= lastDate);
        } else if (lastDate.length == 0 && initialDate.length > 0) {
          _l = _l.filter((e) => e.data >= initialDate);
        }

        if (_l.length > 0) {
          setSaveClass([...saveClass, ..._l]);
        }

        if (busca.length == 0 || _l.length == 0) {
          setSaveClass([]);
        }

        if (placeMatch.length > 0 && teacherMatch.length > 0) {
          _l = _l.filter(
            (e) =>
              e.ambiente.nome == lastPlace && e.professor.nome == lastTeacher
          );

          if (_l.length > 0) {
            setSaveClass([...saveClass, ..._l]);
          } else {
            setSaveClass([]);
          }
        }

        if (teacherMatch.length > 0 || placeMatch.length > 0) {
          _l = _l.filter(
            (e) =>
              e.professor.nome == lastTeacher || e.ambiente.nome == lastPlace
          );

          if (_l.length > 0) {
            setSaveClass([...saveClass, ..._l]);
          } else {
            setSaveClass([]);
          }
        }

        if (!(_l.length == classMatch.length)) {
          if (busca.length > 1) {
            setSaveClass([...saveClass, ..._l]);
          } else {
            setSaveClass([..._l]);
          }
        }
      } else if (placeMatch.length != 0) {
        const regex = new RegExp(`${lastPlace}`);
        var _l = aula.filter((value) => value.ambiente.nome.match(regex));

        if (initialDate.length > 0 && lastDate.length > 0) {
          _l = _l.filter((e) => e.data >= initialDate && e.data <= lastDate);
        } else if (initialDate.length == 0 && lastDate.length > 0) {
          _l = _l.filter((e) => e.data <= lastDate);
        } else if (lastDate.length == 0 && initialDate.length > 0) {
          _l = _l.filter((e) => e.data >= initialDate);
        }

        if (_l.length > 0) {
          setSaveClass([...saveClass, ..._l]);
        }

        if (busca.length == 0 || _l.length == 0) {
          setSaveClass([]);
        }

        if (placeMatch.length > 0 && teacherMatch.length > 0) {
          _l = _l.filter(
            (e) =>
              e.ambiente.nome == lastPlace && e.professor.nome == lastTeacher
          );

          if (_l.length > 0) {
            setSaveClass([...saveClass, ..._l]);
          } else {
            setSaveClass([]);
          }
        }

        if (teacherMatch.length > 0 || placeMatch.length > 0) {
          _l = _l.filter(
            (e) =>
              e.professor.nome == lastTeacher || e.ambiente.nome == lastPlace
          );

          if (_l.length > 0) {
            setSaveClass([...saveClass, ..._l]);
          } else {
            setSaveClass([]);
          }
        }

        if (!(_l.length == classMatch.length)) {
          if (placeMatch.length > 1) {
            setSaveClass([...saveClass, ..._l]);
          } else {
            setSaveClass([..._l]);
          }
        }
      } else {
        setSaveClass(aula);
      }
    } else {
      const regex = new RegExp(`${last}`);
      var _l = aula.filter(
        (value) =>
          value.curso.tipo.match(regex) ||
          value.periodo.match(regex) ||
          value.ambiente.nome.match(regex) ||
          value.professor.nome.match(regex) ||
          value.data.match(regex)
      );

      // saber qual aula tem...

      /***
       * 
       * retornar um type AulaSuper
       * 
       */
      if(semanaMatch.length > 0) {
        _l.map((v) => {
          var _value = v.data.split('/');
          var _res = getDay(setDay(new Date(Number(_value[2]), Number(_value[1]), Number(_value[0])), getDay(new Date(Number(_value[2]), Number(_value[1]), Number(_value[0])))))

          console.log(semanaMatch.filter((v) => v == _res + ''));
        })
      }

      if (!(_l.length == 0 && busca.length > 0)) {
        if (initialDate.length > 0 && lastDate.length > 0) {
          _l = _l.filter((e) => e.data >= initialDate && e.data <= lastDate);
        } else if (initialDate.length == 0 && lastDate.length > 0) {
          _l = _l.filter((e) => e.data <= lastDate);
        } else if (lastDate.length == 0 && initialDate.length > 0) {
          _l = _l.filter((e) => e.data >= initialDate);
        }

        if (_l.length > 0) {
          setSaveClass([...saveClass, ..._l]);
        }

        if (placeMatch.length > 0 && teacherMatch.length > 0) {
          _l = _l.filter(
            (e) =>
              e.ambiente.nome == lastPlace && e.professor.nome == lastTeacher
          );

          if (_l.length > 0) {
            setSaveClass([...saveClass, ..._l]);
          } else {
            setSaveClass([]);
          }
        }

        if (teacherMatch.length > 0 || placeMatch.length > 0) {
          _l = _l.filter(
            (e) =>
              e.professor.nome == lastTeacher || e.ambiente.nome == lastPlace
          );

          if (_l.length > 0) {
            setSaveClass([...saveClass, ..._l]);
          } else {
            setSaveClass([]);
          }
        }

        if (busca.length == 0 || _l.length == 0) {
          setSaveClass([]);
        }

        if (!(_l.length == classMatch.length)) {
          if (busca.length > 1) {
            setSaveClass([...saveClass, ..._l]);
          } else {
            setSaveClass([..._l]);
          }
        }
      } else if (_l.length == 0 && busca.length == 1) {
        setSaveClass([]);
      }
    }
  }

  async function handleGetAllUnit() {
    const res = await API.get(`/unidade`);

    if (res.data.length > 0) {
      setUnidade(res.data);
    }
  }

  async function handleSetInputValue(data: SearchValue) {
    setInputValue(data.busca);
    setUnidadeMatch([]);
  }

  async function handleGetPlaces(data: SearchValue) {
    const res = await API.get(`/aula/filtro/${data.busca}`);

    setClassMatch(res.data);
    setUnidadeMatch([]);
    reset();
  }

  async function searchClass(value: String) {
    if (!value) {
      setClassMatch(aula);
    } else {
      const res = await API.get(`/aula/filtro/${value}`);
      setClassMatch(res.data);
    }
  }

  return (
    <>
      <AdvancedContainer>
        <AdvancedContent>
          <AdvancedTitleContainer>
            <h1>Aulas</h1>
            <p>Faça buscas e aplique filtros para encontrar determinada aula</p>
          </AdvancedTitleContainer>
          <form onSubmit={handleSubmit(handleGetPlaces)}>
            <AdvancedSearchInput>
              <input
                type="text"
                placeholder="Busque uma ou várias aulas..."
                {...register("busca")}
                value={inputValue + ""}
                onChange={(e) => searchCourse(e.target.value)}
                autoComplete="off"
              />
              <button type="submit">Buscar</button>
            </AdvancedSearchInput>
          </form>
          {unidadeMatch &&
            unidadeMatch.map((unidade) => (
              <AdvancedSearchAutocomplete
                onClick={() => handleSetInputValue({ busca: unidade.nome })}
              >
                {unidade.nome}
              </AdvancedSearchAutocomplete>
            ))}

          <AdvancedFilterLabel>
            <Sliders color="#0031B0" size={25} />
            <p>Filtrar por:</p>
          </AdvancedFilterLabel>

          <AdvancedTableContent>
            <aside>
              <AdvancedFilterContainer
                type="multiple"
                defaultValue={["1", "2", "3", "4"]}
              >
                <Accordion.Item value="1">
                  <AdvancedContentTitle>
                    <p>Tipo de curso</p>
                    <Accordion.Trigger>
                      <CaretDown color="#25B5E9" size={20} />
                    </Accordion.Trigger>
                  </AdvancedContentTitle>
                  <Accordion.Content>
                    <AdvancedFilterItens>
                      <span>
                        {" "}
                        <input
                          type="checkbox"
                          value="REGULAR"
                          onChange={(checked) =>
                            handleCreateArray(checked.target.value)
                          }
                        />{" "}
                        Regular
                      </span>
                      <span>
                        {" "}
                        <input
                          type="checkbox"
                          value="FIC"
                          onChange={(checked) =>
                            handleCreateArray(checked.target.value)
                          }
                        />{" "}
                        FIC
                      </span>
                      <span>
                        {" "}
                        <input
                          type="checkbox"
                          value="Aprendizagem"
                          onChange={(checked) =>
                            handleCreateArray(checked.target.value)
                          }
                        />{" "}
                        Aprendizagem
                      </span>
                    </AdvancedFilterItens>
                  </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item value="2">
                  <AdvancedContentTitle>
                    <p> Periodo</p>
                    <Accordion.Trigger>
                      <CaretDown color="#25B5E9" size={20} />
                    </Accordion.Trigger>
                  </AdvancedContentTitle>
                  <Accordion.Content>
                    <AdvancedFilterItens>
                      <span>
                        <input
                          type="checkbox"
                          value="MANHA"
                          onChange={(checked) =>
                            handleCreateArray(checked.target.value)
                          }
                        />{" "}
                        Manhã
                      </span>
                      <span>
                        <input
                          type="checkbox"
                          value="TARDE"
                          onChange={(checked) =>
                            handleCreateArray(checked.target.value)
                          }
                        />{" "}
                        Tarde
                      </span>
                      <span>
                        <input
                          type="checkbox"
                          value="NOITE"
                          onChange={(checked) =>
                            handleCreateArray(checked.target.value)
                          }
                        />{" "}
                        Noite
                      </span>
                      <span>
                        <input
                          type="checkbox"
                          value="INTEGRAL"
                          onChange={(checked) =>
                            handleCreateArray(checked.target.value)
                          }
                        />{" "}
                        Integral
                      </span>
                    </AdvancedFilterItens>
                  </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item value="3">
                  <AdvancedContentTitle>
                    <p>Intervalo</p>
                    <Accordion.Trigger>
                      <CaretDown color="#25B5E9" size={20} />
                    </Accordion.Trigger>
                  </AdvancedContentTitle>
                  <Accordion.Content>
                    <AdvancedFilterItens>
                      <span> Data de início</span>
                      <input
                        type="date"
                        onChange={(checked) =>
                          handleCreateInitAndFinalDateFns(
                            "init-" + checked.target.value
                          )
                        }
                      />
                      <span> Data final</span>
                      <input
                        type="date"
                        onChange={(checked) =>
                          handleCreateInitAndFinalDateFns(
                            "finl-" + checked.target.value
                          )
                        }
                      />
                    </AdvancedFilterItens>
                  </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item value="4">
                  <AdvancedContentTitle>
                    <p>Dias</p>
                    <Accordion.Trigger>
                      <CaretDown color="#25B5E9" size={20} />
                    </Accordion.Trigger>
                  </AdvancedContentTitle>
                  <Accordion.Content>
                    <AdvancedFilterItens>
                      <span>
                        {" "}
                        <input
                          value="1"
                          onChange={(checked) =>
                            handleCreateSemanaArray(checked.target.value)
                          }
                          type="checkbox"
                        />{" "}
                        Segunda-Feira
                      </span>
                      <span>
                        {" "}
                        <input
                          value="2"
                          onChange={(checked) =>
                            handleCreateSemanaArray(checked.target.value)
                          }
                          type="checkbox"
                        />{" "}
                        Terça-Feira
                      </span>
                      <span>
                        {" "}
                        <input
                          value="3"
                          onChange={(checked) =>
                            handleCreateSemanaArray(checked.target.value)
                          }
                          type="checkbox"
                        />{" "}
                        Quarta-Feira
                      </span>
                      <span>
                        {" "}
                        <input
                          value="4"
                          onChange={(checked) =>
                            handleCreateSemanaArray(checked.target.value)
                          }
                          type="checkbox"
                        />{" "}
                        Quinta-Feira
                      </span>
                      <span>
                        {" "}
                        <input
                          value="5"
                          onChange={(checked) =>
                            handleCreateSemanaArray(checked.target.value)
                          }
                          type="checkbox"
                        />{" "}
                        Sexta-Feira
                      </span>
                      <span>
                        {" "}
                        <input
                          value="6"
                          onChange={(checked) =>
                            handleCreateSemanaArray(checked.target.value)
                          }
                          type="checkbox"
                        />{" "}
                        Sábado
                      </span>
                      <span>
                        {" "}
                        <input
                          value="0"
                          onChange={(checked) =>
                            handleCreateSemanaArray(checked.target.value)
                          }
                          type="checkbox"
                        />{" "}
                        Domingo
                      </span>
                    </AdvancedFilterItens>
                  </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item value="5">
                  <AdvancedContentTitle>
                    <p>Professores</p>
                    <Accordion.Trigger>
                      <CaretDown color="#25B5E9" size={20} />
                    </Accordion.Trigger>
                  </AdvancedContentTitle>
                  <Accordion.Content>
                    <AdvancedFilterItens>
                      {teachers &&
                        teachers.map((teacher) => {
                          if ((teacher.ativo = true)) {
                            return (
                              <span key={teacher.id}>
                                <input
                                  value={teacher.nome}
                                  onChange={(checked) =>
                                    handleCreateArrayTeacher(
                                      checked.target.value
                                    )
                                  }
                                  type="checkbox"
                                />{" "}
                                {teacher.nome}
                              </span>
                            );
                          }
                        })}
                    </AdvancedFilterItens>
                  </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item value="6">
                  <AdvancedContentTitle>
                    <p>Ambientes</p>
                    <Accordion.Trigger>
                      <CaretDown color="#25B5E9" size={20} />
                    </Accordion.Trigger>
                  </AdvancedContentTitle>
                  <Accordion.Content>
                    <AdvancedFilterItens>
                      {placesList &&
                        placesList.map((place) => {
                          if ((place.ativo = true)) {
                            return (
                              <span key={place.id}>
                                <input
                                  value={place.nome}
                                  onChange={(checked) =>
                                    handleCreateArrayPlace(checked.target.value)
                                  }
                                  type="checkbox"
                                />{" "}
                                {place.nome}
                              </span>
                            );
                          }
                        })}
                    </AdvancedFilterItens>
                  </Accordion.Content>
                </Accordion.Item>
              </AdvancedFilterContainer>
            </aside>
            <AdvancedSeachTable classItem={classMatch} />
          </AdvancedTableContent>
          <AdvancedFilterTotal>
            <p>{classMatch.length - 1} resultados encontrados</p>
          </AdvancedFilterTotal>
        </AdvancedContent>
      </AdvancedContainer>
    </>
  );
}
