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
  TableContainer,
} from "./style";
import Logo from "../../assets/Logo.svg";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  CaretDown,
  CaretUp,
  DotsThree,
  DotsThreeOutline,
  Sliders,
  User,
} from "phosphor-react";
import { NavLink } from "react-router-dom";
import * as Accordion from "@radix-ui/react-accordion";

export default function AdvancedSearch() {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <img src={Logo} alt="" />

          <HeaderNavBar>
            <HeaderNavMenu>
              <NavLink to="/busca-avancada" title="Início">
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
                    <NavLink to="/aulas">Início</NavLink>
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

          <AdvancedSearchInput>
            <input type="text" placeholder="Burcar por aula " />
            <button>Buscar</button>
          </AdvancedSearchInput>

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
                      <span>
                        {" "}
                        <input type="checkbox" /> Bruna
                      </span>
                      <span>
                        {" "}
                        <input type="checkbox" /> Bruno
                      </span>
                      <span>
                        {" "}
                        <input type="checkbox" /> Chile
                      </span>
                      <span>
                        {" "}
                        <input type="checkbox" /> Leila
                      </span>
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
                      <span>
                        {" "}
                        <input type="checkbox" /> Sala 1
                      </span>
                      <span>
                        {" "}
                        <input type="checkbox" /> Sala 2
                      </span>
                      <span>
                        {" "}
                        <input type="checkbox" /> Lab 3
                      </span>
                      <span>
                        {" "}
                        <input type="checkbox" /> Oficina 1
                      </span>
                    </AdvancedFilterItens>
                  </Accordion.Content>
                </Accordion.Item>
              </AdvancedFilterContainer>
            </aside>
            <TableContainer>
              <table>
                <thead>
                  <th>Curso</th>
                  <th>Professor</th>
                  <th>Ambiente</th>
                  <th>Data</th>
                  <th>Ver mais</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Excel</td>
                    <td>Chile</td>
                    <td>Lab-15</td>
                    <td>30/08/2021</td>
                    <td>
                      <DotsThreeOutline size={20} />
                    </td>
                  </tr>
                  <tr>
                    <td>Excel</td>
                    <td>Chile</td>
                    <td>Lab-15</td>
                    <td>30/08/2021</td>
                    <td>
                      <DotsThreeOutline size={20} />
                    </td>
                  </tr>
                  <tr>
                    <td>Excel</td>
                    <td>Chile</td>
                    <td>Lab-15</td>
                    <td>30/08/2021</td>
                    <td>
                      <DotsThreeOutline size={20} />
                    </td>
                  </tr>
                  <tr>
                    <td>Excel</td>
                    <td>Chile</td>
                    <td>Lab-15</td>
                    <td>30/08/2021</td>
                    <td>
                      <DotsThreeOutline size={20} />
                    </td>
                  </tr>
                  <tr>
                    <td>Excel</td>
                    <td>Chile</td>
                    <td>Lab-15</td>
                    <td>30/08/2021</td>
                    <td>
                      <DotsThreeOutline size={20} />
                    </td>
                  </tr>
                  <tr>
                    <td>Excel</td>
                    <td>Chile</td>
                    <td>Lab-15</td>
                    <td>30/08/2021</td>
                    <td>
                      <DotsThreeOutline size={20} />
                    </td>
                  </tr>
                  <tr>
                    <td>Excel</td>
                    <td>Chile</td>
                    <td>Lab-15</td>
                    <td>30/08/2021</td>
                    <td>
                      <DotsThreeOutline size={20} />
                    </td>
                  </tr>
                  <tr>
                    <td>Excel</td>
                    <td>Chile</td>
                    <td>Lab-15</td>
                    <td>30/08/2021</td>
                    <td>
                      <DotsThreeOutline size={20} />
                    </td>
                  </tr>
                  <tr>
                    <td>Excel</td>
                    <td>Chile</td>
                    <td>Lab-15</td>
                    <td>30/08/2021</td>
                    <td>
                      <DotsThreeOutline size={20} />
                    </td>
                  </tr>
                  <tr>
                    <td>Excel</td>
                    <td>Chile</td>
                    <td>Lab-15</td>
                    <td>30/08/2021</td>
                    <td>
                      <DotsThreeOutline size={20} />
                    </td>
                  </tr>
                  <tr>
                    <td>Excel</td>
                    <td>Chile</td>
                    <td>Lab-15</td>
                    <td>30/08/2021</td>
                    <td>
                      <DotsThreeOutline size={20} />
                    </td>
                  </tr>
                  <tr>
                    <td>Excel</td>
                    <td>Chile</td>
                    <td>Lab-15</td>
                    <td>30/08/2021</td>
                    <td>
                      <DotsThreeOutline size={20} />
                    </td>
                  </tr>
                  <tr>
                    <td>Excel</td>
                    <td>Chile</td>
                    <td>Lab-15</td>
                    <td>30/08/2021</td>
                    <td>
                      <DotsThreeOutline size={20} />
                    </td>
                  </tr>
                  <tr>
                    <td>Excel</td>
                    <td>Chile</td>
                    <td>Lab-15</td>
                    <td>30/08/2021</td>
                    <td>
                      <DotsThreeOutline size={20} />
                    </td>
                  </tr>
                  <tr>
                    <td>Excel</td>
                    <td>Chile</td>
                    <td>Lab-15</td>
                    <td>30/08/2021</td>
                    <td>
                      <DotsThreeOutline size={20} />
                    </td>
                  </tr>
                  <tr>
                    <td>Excel</td>
                    <td>Chile</td>
                    <td>Lab-15</td>
                    <td>30/08/2021</td>
                    <td>
                      <DotsThreeOutline size={20} />
                    </td>
                  </tr>
                  <tr>
                    <td>Excel</td>
                    <td>Chile</td>
                    <td>Lab-15</td>
                    <td>30/08/2021</td>
                    <td>
                      <DotsThreeOutline size={20} />
                    </td>
                  </tr>
                  <tr>
                    <td>Excel</td>
                    <td>Chile</td>
                    <td>Lab-15</td>
                    <td>30/08/2021</td>
                    <td>
                      <DotsThreeOutline size={20} />
                    </td>
                  </tr>

                  <tr>
                    <td>Excel</td>
                    <td>Chile</td>
                    <td>Lab-15</td>
                    <td>30/08/2021</td>
                    <td>
                      <DotsThreeOutline size={20} />
                    </td>
                  </tr>
                  <tr>
                    <td>Excel</td>
                    <td>Chile</td>
                    <td>Lab-15</td>
                    <td>30/08/2021</td>
                    <td>
                      <DotsThreeOutline size={20} />
                    </td>
                  </tr>
                  <tr>
                    <td>Excel</td>
                    <td>Chile</td>
                    <td>Lab-15</td>
                    <td>30/08/2021</td>
                    <td>
                      <DotsThreeOutline size={20} />
                    </td>
                  </tr>
                  <tr>
                    <td>Excel</td>
                    <td>Chile</td>
                    <td>Lab-15</td>
                    <td>30/08/2021</td>
                    <td>
                      <DotsThreeOutline size={20} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </TableContainer>
          </AdvancedTableContent>
          <AdvancedFilterTotal>
            <p>1.055 resultados encontrados</p>
          </AdvancedFilterTotal>
        </AdvancedContent>
      </AdvancedContainer>
    </>
  );
}
