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
  }, [busca]);

  useEffect(() => {
    const saveDup = saveClass.filter(
      (val, id, array) => saveClass.indexOf(val) == id
    );
    console.log(saveDup);
    setClassMatch(saveDup);
  }, [saveClass]);

  function handleMapArray() {
    let last = [...busca].pop();
    if (last == null) {
      setSaveClass(aula);
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

      // console.log(_l.length);
      // console.log(saveClass.length)
      // console.log(busca.length)
      
      if (!(_l.length == 0 && busca.length > 0)) {
        // console.log("passou aqui")
        if (busca.length == 0 || _l.length == 0) {
          setSaveClass([]);
        }

        if (_l.length > 0) {
          setSaveClass([...saveClass, ..._l]);
        }
      } else if(_l.length == 0 && busca.length == 1) {
        setSaveClass([])
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
                          handleCreateArray(checked.target.value)
                        }
                      />
                      <span> Data final</span>
                      <input
                        type="date"
                        onChange={(checked) =>
                          handleCreateArray(checked.target.value)
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
                        <input type="checkbox" /> Segunda-Feira
                      </span>
                      <span>
                        {" "}
                        <input type="checkbox" /> Terça-Feira
                      </span>
                      <span>
                        {" "}
                        <input type="checkbox" /> Quarta-Feira
                      </span>
                      <span>
                        {" "}
                        <input type="checkbox" /> Integral
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
                                <input type="checkbox" /> {teacher.nome}
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
                                <input type="checkbox" /> {place.nome}
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
