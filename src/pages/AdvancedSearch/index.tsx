import {
  AdvancedButtonContainer,
  AdvancedContainer,
  AdvancedContent,
  AdvancedContentTitle,
  AdvancedFilterContainer,
  AdvancedFilterContent,
  AdvancedFilterItens,
  AdvancedFilterLabel,
  AdvancedFilterTotal,
  AdvancedSearchAutocomplete,
  AdvancedSearchInput,
  AdvancedTableContent,
  AdvancedTitleContainer,
  HeaderContainer,
  HeaderContent,
  HeaderNavBar,
  HeaderNavMenu,
  HeaderNavMenuArrow,
  HeaderNavMenuContent,
  HeaderNavMenuItem,
  HeaderUser,
} from "./style";
import Logo from "../../assets/Logo.svg";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CaretDown, CaretUp, Sliders, User } from "phosphor-react";
import { NavLink } from "react-router-dom";
import * as Accordion from "@radix-ui/react-accordion";
import { AdvancedSeachTable } from "./components/AdvancedSearchTable";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ObjectsContext } from "../../Contexts/ObjectsContext";
import { API } from "../../lib/axios";
import { z } from "zod";

export const aulaInput = z.object({
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
  const { register, handleSubmit, reset } = useForm<SearchValue>();

  const [aula, setAula] = useState<AulaTypeSuper[]>([]);
  const [classMatch, setClassMatch] = useState<AulaTypeSuper[]>([]);

  const [unidadeMatch, setUnidadeMatch] = useState<unidadeCurricular[]>([]);
  const [inputValue, setInputValue] = useState<String>('');
  const [unidade, setUnidade] = useState<unidadeCurricular[]>([]);

  const { teachers, placesList, courses } = useContext(ObjectsContext);

  console.log("Professor: " + teachers);
  console.log("Ambientes: " + placesList);
  console.log("Courses: " + courses);

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

  async function handleGet() {
    const res = await API.get("aula");

    console.log(res.data);
    if (res.data.length > 0) {
      setAula(res.data);
    }
  }

  useEffect(() => {
    handleGet();
    searchClass("");
    handleGetAllUnit();
  }, []);

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
      <HeaderContainer>
        <HeaderContent>
          <img src={Logo} alt="" />

          <HeaderNavBar>
            <HeaderNavMenu>
              <NavLink to="/aulas" title="Aulas">
                Aulas
              </NavLink>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <CaretDown weight="fill" />
                </DropdownMenu.Trigger>
                <HeaderNavMenuContent>
                  <HeaderNavMenuArrow>
                    <CaretUp weight="fill" size={30} />
                  </HeaderNavMenuArrow>

                  <HeaderNavMenuItem>
                    <NavLink to="/inicio">Início</NavLink>
                  </HeaderNavMenuItem>
                  <HeaderNavMenuItem>
                    <NavLink to="/dias-nao-letivos">Dias não letivo</NavLink>
                  </HeaderNavMenuItem>
                </HeaderNavMenuContent>
              </DropdownMenu.Root>
            </HeaderNavMenu>
            <NavLink to="/dashboard" title="Dashboard">
              Dashboard
            </NavLink>
            <HeaderNavMenu>
              <NavLink to="/professores" title="Professor">
                Professores
              </NavLink>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <CaretDown weight="fill" />
                </DropdownMenu.Trigger>

                <HeaderNavMenuContent>
                  <HeaderNavMenuArrow>
                    <CaretUp weight="fill" size={30} />
                  </HeaderNavMenuArrow>

                  <HeaderNavMenuItem>
                    <NavLink to="/ferias-coletiva">Ferias</NavLink>
                  </HeaderNavMenuItem>
                </HeaderNavMenuContent>
              </DropdownMenu.Root>
            </HeaderNavMenu>
            <NavLink to="/cursos" title="Cursos">
              Cursos
            </NavLink>
            <NavLink to="/ambientes" title="Ambientes">
              Ambientes
            </NavLink>
            <HeaderNavMenu>
              <p>Suporte</p>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <CaretDown weight="fill" />
                </DropdownMenu.Trigger>
                <HeaderNavMenuContent>
                  <HeaderNavMenuArrow>
                    <CaretUp weight="fill" size={30} />
                  </HeaderNavMenuArrow>
                  <HeaderNavMenuItem>
                    <NavLink to="/chamados" title="Chamados">
                      Chamados
                    </NavLink>
                  </HeaderNavMenuItem>  
                  <HeaderNavMenuItem>
                    <NavLink to="/usuarios" title="Usuários">
                      Usuários
                    </NavLink>
                  </HeaderNavMenuItem>
                  
                </HeaderNavMenuContent>
              </DropdownMenu.Root>
            </HeaderNavMenu>
          </HeaderNavBar>

          <HeaderUser>
            <User size={23} />
            <p>Odair</p>
            <button>
              <CaretDown weight="fill" />
            </button>
          </HeaderUser>
        </HeaderContent>
      </HeaderContainer>

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
                placeholder="Buscar por aula"
                {...register("busca")}
                value={inputValue + ''}
                onChange={(e) => searchCourse(e.target.value)}
                autoComplete="off"
              />
              <button type="submit">Buscar</button>
            </AdvancedSearchInput>
          </form>
          {unidadeMatch &&
            unidadeMatch.map((unidade) =>
                <AdvancedSearchAutocomplete
                  onClick={() => handleSetInputValue({ busca: unidade.nome })}
                >
                  {unidade.nome}
                </AdvancedSearchAutocomplete>
            )}

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
                        <input type="checkbox" /> Regular
                      </span>
                      <span>
                        {" "}
                        <input type="checkbox" /> FIC
                      </span>
                      <span>
                        {" "}
                        <input type="checkbox" /> Aprendizagem
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
                        <input type="checkbox" /> Manhã
                      </span>
                      <span>
                        <input type="checkbox" /> Tarde
                      </span>
                      <span>
                        <input type="checkbox" /> Noite
                      </span>
                      <span>
                        <input type="checkbox" /> Integral
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
                      <input type="date" />
                      <span> Data final</span>
                      <input type="date" />
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
            <p>{aula.length} resultados encontrados</p>
          </AdvancedFilterTotal>
        </AdvancedContent>
      </AdvancedContainer>
    </>
  );
}
