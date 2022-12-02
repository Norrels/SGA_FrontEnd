import {
  AdvancedButtonContainer,
  AdvancedContainer,
  AdvancedContent,
  AdvancedContentTitle,
  AdvancedFilterContainer,
  AdvancedFilterItens,
  AdvancedFilterItensIndividual,
  AdvancedFilterLabel,
  AdvancedFilterTotal,
  AdvancedSearchAutocomplete,
  AdvancedSearchAutocompleteScroll,
  AdvancedSearchInput,
  AdvancedSearchInputContent,
  AdvancedTableContent,
  AdvancedTitleContainer,
} from "./style";
import { CaretDown, Sliders } from "phosphor-react";
import * as Accordion from "@radix-ui/react-accordion";
import * as Dialog from "@radix-ui/react-dialog";
import { AdvancedSeachTable } from "./components/AdvancedSearchTable";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ObjectsContext } from "../../contexts/ObjectsContext";
import { API } from "../../lib/axios";
import { z } from "zod";
import { getDay, setDay } from "date-fns";
import { ModalCreateNewClass } from "../Home/components/ModalCreateNewClass";

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
  document.title = "Aulas | SGA";

  const [aula, setAula] = useState<AulaTypeSuper[]>([]);
  const [classMatch, setClassMatch] = useState<AulaTypeSuper[]>([]);
  const [unidadeMatch, setUnidadeMatch] = useState<unidadeCurricular[]>([]);
  const [inputValue, setInputValue] = useState<String>("");
  const [unidade, setUnidade] = useState<unidadeCurricular[]>([]);
  const [saveClass, setSaveClass] = useState<AulaTypeSuper[]>([]);
  const [initialDate, setInitialDate] = useState<String>("");
  const [lastDate, setLastDate] = useState<String>("");
  const [teacherMatch, setTeacherMatch] = useState<String[]>([]);
  const [placeMatch, setPlaceMatch] = useState<String[]>([]);
  const [semanaMatch, setSemanaMatch] = useState<String[]>([]);
  const [dayTypeMatch, setDayTypeMatch] = useState<String[]>([]);
  const [typeCoursesMatch, setTypeCoursesMatch] = useState<String[]>([]);

  const { register, handleSubmit, reset } = useForm<SearchValue>();
  const { teachers, placesList } = useContext(ObjectsContext);

  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(false);
  }

  const searchCourse = (text: String) => {
    setInputValue(text);
    if (!text) {
      handleGet();
      setUnidadeMatch([]);
    } else {
      let matches = unidade.filter((unCurricular) => {
        const regex = new RegExp(`${text.toLowerCase()}`);
        return unCurricular.nome.toLowerCase().match(regex);
      });
      setUnidadeMatch(matches);
    }
  };

  function handleCreateArrayCoursesType(value: String) {
    if (typeCoursesMatch.some((v) => v == value)) {
      setTypeCoursesMatch(typeCoursesMatch.filter((c) => c !== value));
    } else {
      setTypeCoursesMatch([...typeCoursesMatch, value]);
    }
  }

  function handleCreateArrayDayType(value: String) {
    if (dayTypeMatch.some((v) => v == value)) {
      setDayTypeMatch(dayTypeMatch.filter((c) => c !== value));
    } else {
      setDayTypeMatch([...dayTypeMatch, value]);
    }
  }

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

  async function handleGet() {
    const res = await API.get("aula");

    if (res.data.length > 0) {
      setAula(res.data);

      setClassMatch(res.data);
    }
  }

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
     *    Ambiente e Fic Traz apenas aulas correlatas ao filtro
     *
     */

    handleMapArray();
  }, [
    initialDate,
    lastDate,
    teacherMatch,
    placeMatch,
    semanaMatch,
    dayTypeMatch,
    typeCoursesMatch,
  ]);

  useEffect(() => {
    const saveDup = saveClass.filter((val, id) => saveClass.indexOf(val) == id);
    setClassMatch(saveDup);
  }, [saveClass]);

  function revealDateLogic(_l: AulaTypeSuper[]) {
    if (initialDate.length > 0 && lastDate.length > 0) {
      _l = aula.filter((e) => e.data >= initialDate && e.data <= lastDate);
    } else if (initialDate.length == 0 && lastDate.length > 0) {
      _l = aula.filter((e) => e.data <= lastDate);
    } else if (lastDate.length == 0 && initialDate.length > 0) {
      _l = aula.filter((e) => e.data >= initialDate);
    } else {
      _l = [];
    }

    return _l;
  }

  function handleMapArray() {
    let lastTeacher = [...teacherMatch].pop();
    let lastPlace = [...placeMatch].pop();
    let lastSemana = [...semanaMatch].pop();
    let lastDayType = [...dayTypeMatch].pop();
    let lastCourseType = [...typeCoursesMatch].pop();

    if (dayTypeMatch.length > 0) {
      const regex = new RegExp(`${lastDayType}`);
      var _l = aula.filter((value) => value.periodo.match(regex));

      if (initialDate != "" || lastDate != "") {
        _l = revealDateLogic(_l);
      }

      if (_l.length > 0) {
        setSaveClass([...saveClass, ..._l]);
      }

      if (_l.length == 0) {
        setSaveClass([]);
      }

      if (placeMatch.length > 0 && teacherMatch.length > 0) {
        _l = _l.filter(
          (e) => e.ambiente.nome == lastPlace && e.professor.nome == lastTeacher
        );

        if (_l.length > 0) {
          setSaveClass([...saveClass, ..._l]);
        } else {
          setSaveClass([]);
        }
      }

      if (teacherMatch.length > 0 || placeMatch.length > 0) {
        _l = _l.filter(
          (e) => e.professor.nome == lastTeacher || e.ambiente.nome == lastPlace
        );

        if (_l.length > 0) {
          setSaveClass([...saveClass, ..._l]);
        } else {
          setSaveClass([]);
        }
      }

      if (semanaMatch.length > 0) {
        _l.map((v) => {
          console.log(
            getDay(
              setDay(
                new Date(
                  Number(v.data.split("/")[2]),
                  Number(v.data.split("/")[1]),
                  Number(v.data.split("/")[0])
                ),
                getDay(
                  new Date(
                    Number(v.data.split("/")[2]),
                    Number(v.data.split("/")[1]),
                    Number(v.data.split("/")[0])
                  )
                )
              )
            )
          );
        });

        _l = _l.filter(
          (v) =>
            getDay(
              setDay(
                new Date(
                  Number(v.data.split("/")[2]),
                  Number(v.data.split("/")[1]),
                  Number(v.data.split("/")[0])
                ),
                getDay(
                  new Date(
                    Number(v.data.split("/")[2]),
                    Number(v.data.split("/")[1]),
                    Number(v.data.split("/")[0])
                  )
                )
              )
            )
          // == Number(lastSemana) && v.professor.nome == lastTeacher
        );

        if (dayTypeMatch.length > 0) {
          _l = _l.filter((v) => v.periodo == lastDayType);
          if (_l.length > 0) {
            setSaveClass([...saveClass, ..._l]);
          } else {
            setSaveClass([]);
          }
        }

        if (_l.length > 0) {
          setSaveClass([...saveClass, ..._l]);
        } else {
          setSaveClass([]);
        }
      }

      if (typeCoursesMatch.length > 0) {
        _l = _l.filter((e) => e.curso.tipo == lastCourseType);

        if (_l.length > 0) {
          setSaveClass([...saveClass, ..._l]);
        } else {
          setSaveClass([]);
        }
      }

      if (!(_l.length == classMatch.length)) {
        if (teacherMatch.length > 1) {
          setSaveClass([...saveClass, ..._l]);
        } else {
          setSaveClass([..._l]);
        }
      }
    } else if (initialDate != "" || lastDate != "") {
      var _l: AulaTypeSuper[] = [];

      _l = revealDateLogic(_l);

      if (placeMatch.length > 0 && teacherMatch.length > 0) {
        _l = _l.filter(
          (e) => e.ambiente.nome == lastPlace && e.professor.nome == lastTeacher
        );

        if (_l.length > 0) {
          setSaveClass([...saveClass, ..._l]);
        } else {
          setSaveClass([]);
        }
      }

      if (teacherMatch.length > 0 || placeMatch.length > 0) {
        _l = _l.filter(
          (e) => e.professor.nome == lastTeacher || e.ambiente.nome == lastPlace
        );

        if (_l.length > 0) {
          setSaveClass([...saveClass, ..._l]);
        } else {
          setSaveClass([]);
        }
      }

      if (semanaMatch.length > 0) {
        _l = _l.filter(
          (v) =>
            getDay(
              setDay(
                new Date(
                  Number(v.data.split("/")[2]),
                  Number(v.data.split("/")[1]),
                  Number(v.data.split("/")[0])
                ),
                getDay(
                  new Date(
                    Number(v.data.split("/")[2]),
                    Number(v.data.split("/")[1]),
                    Number(v.data.split("/")[0])
                  )
                )
              )
            ) == Number(lastSemana)
        );
        if (_l.length > 0) {
          setSaveClass([...saveClass, ..._l]);
        } else {
          setSaveClass([]);
        }
      }

      if (dayTypeMatch.length > 0) {
        _l = _l.filter((v) => v.periodo == lastDayType);
        if (_l.length > 0) {
          setSaveClass([...saveClass, ..._l]);
        } else {
          setSaveClass([]);
        }
      }

      if (typeCoursesMatch.length > 0) {
        _l = _l.filter((e) => e.curso.tipo == lastCourseType);

        if (_l.length > 0) {
          setSaveClass([...saveClass, ..._l]);
        } else {
          setSaveClass([]);
        }
      }

      if (
        _l.length == 0 &&
        initialDate == null &&
        lastDate == null &&
        lastSemana == null &&
        lastCourseType == null &&
        dayTypeMatch.length == 0
      ) {
        setSaveClass(aula);
      } else {
        setSaveClass(_l);
      }
    } else if (teacherMatch.length != 0) {
      const regex = new RegExp(`${lastTeacher}`);
      var _l = aula.filter((value) => value.professor.nome.match(regex));

      if (initialDate != "" || lastDate != "") {
        _l = revealDateLogic(_l);
      }

      if (_l.length > 0) {
        setSaveClass([...saveClass, ..._l]);
      }

      if (_l.length == 0) {
        setSaveClass([]);
      }

      if (placeMatch.length > 0 && teacherMatch.length > 0) {
        _l = _l.filter(
          (e) => e.ambiente.nome == lastPlace && e.professor.nome == lastTeacher
        );

        if (_l.length > 0) {
          setSaveClass([...saveClass, ..._l]);
        } else {
          setSaveClass([]);
        }
      }

      if (teacherMatch.length > 0 || placeMatch.length > 0) {
        _l = _l.filter(
          (e) => e.professor.nome == lastTeacher || e.ambiente.nome == lastPlace
        );

        if (_l.length > 0) {
          setSaveClass([...saveClass, ..._l]);
        } else {
          setSaveClass([]);
        }
      }

      if (semanaMatch.length > 0) {
        _l = _l.filter(
          (v) =>
            getDay(
              setDay(
                new Date(
                  Number(v.data.split("/")[2]),
                  Number(v.data.split("/")[1]),
                  Number(v.data.split("/")[0])
                ),
                getDay(
                  new Date(
                    Number(v.data.split("/")[2]),
                    Number(v.data.split("/")[1]),
                    Number(v.data.split("/")[0])
                  )
                )
              )
            ) == Number(lastSemana) && v.professor.nome == lastTeacher
        );

        if (dayTypeMatch.length > 0) {
          _l = _l.filter((v) => v.periodo == lastDayType);
          if (_l.length > 0) {
            setSaveClass([...saveClass, ..._l]);
          } else {
            setSaveClass([]);
          }
        }

        if (_l.length > 0) {
          setSaveClass([...saveClass, ..._l]);
        } else {
          setSaveClass([]);
        }
      }

      if (typeCoursesMatch.length > 0) {
        _l = _l.filter((e) => e.curso.tipo == lastCourseType);

        if (_l.length > 0) {
          setSaveClass([...saveClass, ..._l]);
        } else {
          setSaveClass([]);
        }
      }

      if (!(_l.length == classMatch.length)) {
        if (teacherMatch.length > 1) {
          setSaveClass([...saveClass, ..._l]);
        } else {
          setSaveClass([..._l]);
        }
      }
    } else if (placeMatch.length != 0) {
      const regex = new RegExp(`${lastPlace}`);
      var _l = aula.filter((value) => value.ambiente.nome.match(regex));

      if (initialDate != "" || lastDate != "") {
        _l = revealDateLogic(_l);
      }

      if (_l.length > 0) {
        setSaveClass([...saveClass, ..._l]);
      }

      if (_l.length == 0) {
        setSaveClass([]);
      }

      if (dayTypeMatch.length > 0) {
        _l = _l.filter(
          (v) => v.periodo == lastDayType && v.ambiente.nome == lastPlace
        );
        if (_l.length > 0) {
          setSaveClass([...saveClass, ..._l]);
        } else {
          setSaveClass([]);
        }
      }

      if (placeMatch.length > 0 && teacherMatch.length > 0) {
        _l = _l.filter(
          (e) => e.ambiente.nome == lastPlace && e.professor.nome == lastTeacher
        );

        if (_l.length > 0) {
          setSaveClass([...saveClass, ..._l]);
        } else {
          setSaveClass([]);
        }
      }

      if (teacherMatch.length > 0 || placeMatch.length > 0) {
        _l = _l.filter(
          (e) => e.professor.nome == lastTeacher || e.ambiente.nome == lastPlace
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

      if (semanaMatch.length > 0) {
        _l = _l.filter(
          (v) =>
            getDay(
              setDay(
                new Date(
                  Number(v.data.split("/")[2]),
                  Number(v.data.split("/")[1]),
                  Number(v.data.split("/")[0])
                ),
                getDay(
                  new Date(
                    Number(v.data.split("/")[2]),
                    Number(v.data.split("/")[1]),
                    Number(v.data.split("/")[0])
                  )
                )
              )
            ) == Number(lastSemana) && v.ambiente.nome == lastPlace
        );

        if (typeCoursesMatch.length > 0) {
          _l = _l.filter((e) => e.curso.tipo == lastCourseType);

          if (_l.length > 0) {
            setSaveClass([...saveClass, ..._l]);
          } else {
            setSaveClass([]);
          }
        }

        if (_l.length > 0) {
          setSaveClass([...saveClass, ..._l]);
        } else {
          setSaveClass([]);
        }
      }
    } else if (semanaMatch.length != 0) {
      var _l = aula.filter(
        (v) =>
          getDay(
            new Date(
              Number(v.data.split("/")[2]),
              Number(v.data.split("/")[0]),
              Number(v.data.split("/")[1])
            )
          ) == Number(lastSemana)
      );

      _l.map((v) => {
        console.log(Number(v.data.split("/")[2]),
        Number(v.data.split("/")[0]),
        Number(v.data.split("/")[1])),
        console.log(
            getDay(
              new Date(
                Number(v.data.split("/")[2]),
                Number(v.data.split("/")[1]),
                Number(v.data.split("/")[0])
              )
            )
          )
      });

      if (initialDate != "" || lastDate != "") {
        _l = revealDateLogic(_l);
      }

      if (_l.length > 0) {
        setSaveClass([...saveClass, ..._l]);
      }

      if (_l.length == 0) {
        setSaveClass([]);
      }

      if (dayTypeMatch.length > 0) {
        _l = _l.filter((v) => v.periodo == lastDayType);
        if (_l.length > 0) {
          setSaveClass([...saveClass, ..._l]);
        } else {
          setSaveClass([]);
        }
      }

      if (placeMatch.length > 0 && teacherMatch.length > 0) {
        _l = _l.filter(
          (e) => e.ambiente.nome == lastPlace && e.professor.nome == lastTeacher
        );

        if (_l.length > 0) {
          setSaveClass([...saveClass, ..._l]);
        } else {
          setSaveClass([]);
        }
      }

      if (teacherMatch.length > 0 || placeMatch.length > 0) {
        _l = _l.filter(
          (e) => e.professor.nome == lastTeacher || e.ambiente.nome == lastPlace
        );

        if (_l.length > 0) {
          setSaveClass([...saveClass, ..._l]);
        } else {
          setSaveClass([]);
        }
      }

      if (typeCoursesMatch.length > 0) {
        _l = _l.filter((e) => e.curso.tipo == lastCourseType);

        if (_l.length > 0) {
          setSaveClass([...saveClass, ..._l]);
        } else {
          setSaveClass([]);
        }
      }

      if (!(_l.length == classMatch.length)) {
        if (semanaMatch.length > 1) {
          setSaveClass([...saveClass, ..._l]);
        } else {
          setSaveClass([..._l]);
        }
      }
    } else if (dayTypeMatch.length != 0) {
      let _l = aula.filter((v) => v.periodo == lastDayType);

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

      if (_l.length == 0) {
        setSaveClass([]);
      }

      if (placeMatch.length > 0 && teacherMatch.length > 0) {
        _l = _l.filter(
          (e) => e.ambiente.nome == lastPlace && e.professor.nome == lastTeacher
        );

        if (_l.length > 0) {
          setSaveClass([...saveClass, ..._l]);
        } else {
          setSaveClass([]);
        }
      }

      if (teacherMatch.length > 0 || placeMatch.length > 0) {
        _l = _l.filter(
          (e) => e.professor.nome == lastTeacher || e.ambiente.nome == lastPlace
        );

        if (_l.length > 0) {
          setSaveClass([...saveClass, ..._l]);
        } else {
          setSaveClass([]);
        }
      }

      if (typeCoursesMatch.length > 0) {
        _l = _l.filter((e) => e.curso.tipo == lastCourseType);

        if (_l.length > 0) {
          setSaveClass([...saveClass, ..._l]);
        } else {
          setSaveClass([]);
        }
      }

      if (!(_l.length == classMatch.length)) {
        if (dayTypeMatch.length > 1) {
          setSaveClass([...saveClass, ..._l]);
        } else {
          setSaveClass([..._l]);
        }
      }
    } else if (typeCoursesMatch.length != 0) {
      let _l = aula.filter((e) => e.curso.tipo == lastCourseType);

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

      if (_l.length == 0) {
        setSaveClass([]);
      }

      if (placeMatch.length > 0 && teacherMatch.length > 0) {
        _l = _l.filter(
          (e) => e.ambiente.nome == lastPlace && e.professor.nome == lastTeacher
        );

        if (_l.length > 0) {
          setSaveClass([...saveClass, ..._l]);
        } else {
          setSaveClass([]);
        }
      }

      if (teacherMatch.length > 0 || placeMatch.length > 0) {
        _l = _l.filter(
          (e) => e.professor.nome == lastTeacher || e.ambiente.nome == lastPlace
        );

        if (_l.length > 0) {
          setSaveClass([...saveClass, ..._l]);
        } else {
          setSaveClass([]);
        }
      }

      if (!(_l.length == classMatch.length)) {
        if (dayTypeMatch.length > 1) {
          setSaveClass([...saveClass, ..._l]);
        } else {
          setSaveClass([..._l]);
        }
      }
    } else {
      setSaveClass(aula);
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
    <AdvancedContainer>
      <AdvancedContent>
        <AdvancedTitleContainer>
          <h1>Aulas</h1>
          <p>
            Crie, busque e aplique filtros para encontrar determinada aula ou
            aula(s).
          </p>
          <AdvancedButtonContainer>
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger asChild>
                <button>Nova aula</button>
              </Dialog.Trigger>
              <ModalCreateNewClass name={undefined} closeModal={closeModal} />
            </Dialog.Root>
          </AdvancedButtonContainer>
        </AdvancedTitleContainer>

        <form onSubmit={handleSubmit(handleGetPlaces)}>
          <AdvancedSearchInput>
            <AdvancedSearchInputContent>
              <input
                type="text"
                placeholder="Busque uma ou várias aulas..."
                {...register("busca")}
                value={inputValue + ""}
                onChange={(e) => searchCourse(e.target.value)}
                autoComplete="off"
              />
              <AdvancedSearchAutocompleteScroll>
                <AdvancedSearchAutocomplete>
                  {unidadeMatch &&
                    unidadeMatch.map((unidade) => (
                      <>
                        <p onClick={() => setInputValue(unidade.nome)}>
                          {unidade.nome}
                        </p>
                        <hr style={{ color: "aqua" }} />
                      </>
                    ))}
                </AdvancedSearchAutocomplete>
              </AdvancedSearchAutocompleteScroll>
            </AdvancedSearchInputContent>
            {inputValue == "" ? (
              <button type="submit" disabled>
                Buscar
              </button>
            ) : (
              <button type="submit">Buscar</button>
            )}
          </AdvancedSearchInput>
        </form>
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
                    <AdvancedFilterItensIndividual>
                      <input
                        type="checkbox"
                        value="REGULAR"
                        onChange={(checked) =>
                          handleCreateArrayCoursesType(checked.target.value)
                        }
                      />
                      <span>Regular</span>
                    </AdvancedFilterItensIndividual>
                    <AdvancedFilterItensIndividual>
                      <input
                        type="checkbox"
                        value="FIC"
                        onChange={(checked) =>
                          handleCreateArrayCoursesType(checked.target.value)
                        }
                      />
                      <span>FIC</span>
                    </AdvancedFilterItensIndividual>
                  </AdvancedFilterItens>
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="2">
                <AdvancedContentTitle>
                  <p>Periodo</p>
                  <Accordion.Trigger>
                    <CaretDown color="#25B5E9" size={20} />
                  </Accordion.Trigger>
                </AdvancedContentTitle>
                <Accordion.Content>
                  <AdvancedFilterItens>
                    <AdvancedFilterItensIndividual>
                      <input
                        type="checkbox"
                        value="MANHA"
                        onChange={(checked) =>
                          handleCreateArrayDayType(checked.target.value)
                        }
                      />
                      <span>Manhã</span>
                    </AdvancedFilterItensIndividual>
                    <AdvancedFilterItensIndividual>
                      <input
                        type="checkbox"
                        value="TARDE"
                        onChange={(checked) =>
                          handleCreateArrayDayType(checked.target.value)
                        }
                      />
                      <span>Tarde</span>
                    </AdvancedFilterItensIndividual>
                    <AdvancedFilterItensIndividual>
                      <input
                        type="checkbox"
                        value="NOITE"
                        onChange={(checked) =>
                          handleCreateArrayDayType(checked.target.value)
                        }
                      />
                      <span>Noite</span>
                    </AdvancedFilterItensIndividual>
                    <AdvancedFilterItensIndividual>
                      <input
                        type="checkbox"
                        value="INTEGRAL"
                        onChange={(checked) =>
                          handleCreateArrayDayType(checked.target.value)
                        }
                      />
                      <span>Integral</span>
                    </AdvancedFilterItensIndividual>
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
                    <span>Data de início</span>
                    <input
                      type="date"
                      onChange={(checked) =>
                        handleCreateInitAndFinalDateFns(
                          "init-" + checked.target.value
                        )
                      }
                    />
                    <span>Data final</span>
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
                    <AdvancedFilterItensIndividual>
                      <input
                        value="7"
                        onChange={(checked) =>
                          handleCreateSemanaArray(checked.target.value)
                        }
                        type="checkbox"
                      />
                      <span>Segunda-Feira</span>
                    </AdvancedFilterItensIndividual>
                    <AdvancedFilterItensIndividual>
                      <input
                        value="5"
                        onChange={(checked) =>
                          handleCreateSemanaArray(checked.target.value)
                        }
                        type="checkbox"
                      />
                      <span>Terça-Feira</span>
                    </AdvancedFilterItensIndividual>
                    <AdvancedFilterItensIndividual>
                      <input
                        value="2"
                        onChange={(checked) =>
                          handleCreateSemanaArray(checked.target.value)
                        }
                        type="checkbox"
                      />
                      <span>Quarta-Feira</span>
                    </AdvancedFilterItensIndividual>
                    <AdvancedFilterItensIndividual>
                      <input
                        value="3"
                        onChange={(checked) =>
                          handleCreateSemanaArray(checked.target.value)
                        }
                        type="checkbox"
                      />
                      <span>Quinta-Feira</span>
                    </AdvancedFilterItensIndividual>
                    <AdvancedFilterItensIndividual>
                      <input
                        value="4"
                        onChange={(checked) =>
                          handleCreateSemanaArray(checked.target.value)
                        }
                        type="checkbox"
                      />
                      <span>Sexta-Feira</span>
                    </AdvancedFilterItensIndividual>
                    <AdvancedFilterItensIndividual>
                      <input
                        value=""
                        onChange={(checked) =>
                          handleCreateSemanaArray(checked.target.value)
                        }
                        type="checkbox"
                      />
                      <span>Sábado</span>
                    </AdvancedFilterItensIndividual>
                    <AdvancedFilterItensIndividual>
                      <input
                        value="6"
                        onChange={(checked) =>
                          handleCreateSemanaArray(checked.target.value)
                        }
                        type="checkbox"
                      />
                      <span>Domingo</span>
                    </AdvancedFilterItensIndividual>
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
                    {!teachers.length
                      ? "Não há professores cadastrados."
                      : teachers.map((teacher) => {
                          if ((teacher.ativo = true)) {
                            return (
                              <AdvancedFilterItensIndividual key={teacher.id}>
                                <input
                                  value={teacher.nome}
                                  onChange={(checked) =>
                                    handleCreateArrayTeacher(
                                      checked.target.value
                                    )
                                  }
                                  type="checkbox"
                                />
                                <span>{teacher.nome}</span>
                              </AdvancedFilterItensIndividual>
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
                    {!placesList.length
                      ? "Não há ambientes cadastrados."
                      : placesList.map((place) => {
                          if ((place.ativo = true)) {
                            return (
                              <AdvancedFilterItensIndividual key={place.id}>
                                <input
                                  value={place.nome}
                                  onChange={(checked) =>
                                    handleCreateArrayPlace(checked.target.value)
                                  }
                                  type="checkbox"
                                />
                                <span>{place.nome}</span>
                              </AdvancedFilterItensIndividual>
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
          <p>
            {classMatch.length > 0 &&
              `${classMatch.length} resultados
              encontrados.`}
          </p>
        </AdvancedFilterTotal>
      </AdvancedContent>
    </AdvancedContainer>
  );
}
