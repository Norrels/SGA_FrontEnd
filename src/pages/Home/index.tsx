import { ArrowLeft, ArrowRight, Calendar, Info } from "phosphor-react";
import {
  HomeButtonContainer,
  HomeButtonCreate,
  HomeCalenderContainer,
  HomeCalenderContent,
  HomeCalenderDay,
  HomeCalenderHeader,
  HomeCalenderHeaderDays,
  HomeCalenderOrderBy,
  HomeClass,
  HomeClasses,
  HomeClassesContainer,
  HomeContainer,
  HomeContent,
  HomeDivider,
  HomeDownContentSearchInput,
  HomeDownFilterContentSearchInput,
  HomePlaces,
  HomeSearchInput,
  HomeSelectFilterOptionSearch,
  HomeSelectOptionSearch,
  HomeTextContentSearchInput,
  HomeTitleContainer,
  HomeUpContentSearchInput,
  InputCheckbox,
} from "./style";

export function Home() {
  return (
    <HomeContainer>
      <HomeContent>
        <HomeTitleContainer>
          <h1>Bem Vindo</h1>
          <p>Selecione um tipo de curso e crie uma nova aula</p>
          <HomeButtonContainer>
            <HomeButtonCreate buttonsColor={1}>
              <button>Regular</button>
            </HomeButtonCreate>
            <HomeButtonCreate buttonsColor={2}>
              <button>FIC</button>
            </HomeButtonCreate>
            <HomeButtonCreate buttonsColor={3}>
              <button>Customizavel</button>
            </HomeButtonCreate>
          </HomeButtonContainer>
        </HomeTitleContainer>

        <HomeSearchInput>
          <HomeUpContentSearchInput>
            <ArrowLeft size={32} />
            <HomeTextContentSearchInput>
              Agosto 01 - Setembro 02
            </HomeTextContentSearchInput>
            <ArrowRight size={32} />
            <Calendar size={32} />
          </HomeUpContentSearchInput>

          <HomeDownContentSearchInput>
            <input type="text" placeholder="Buscar por Curso" />
          </HomeDownContentSearchInput>

          <HomeDownFilterContentSearchInput>
            <HomeSelectOptionSearch>
              <select>
                <option>Salas</option>
                <option>Professores</option>
              </select>
            </HomeSelectOptionSearch>

            <HomeSelectFilterOptionSearch>
              <InputCheckbox colorsColor={1}>
                <input type="checkbox" /> <span>Todos</span>
              </InputCheckbox>
              <InputCheckbox colorsColor={2}>
                <input type="checkbox" /> <span>Manhã</span>
              </InputCheckbox>
              <InputCheckbox colorsColor={3}>
                <input type="checkbox" /> <span>Tarde</span>
              </InputCheckbox>
              <InputCheckbox colorsColor={4}>
                <input type="checkbox" /> <span>Noite</span>
              </InputCheckbox>

              <Info size={32} />
            </HomeSelectFilterOptionSearch>
          </HomeDownFilterContentSearchInput>
        </HomeSearchInput>

        <HomeCalenderContainer>
          <HomeCalenderHeader>
            <HomeCalenderOrderBy>
              <p>Crescente</p>
            </HomeCalenderOrderBy>
            <HomeCalenderHeaderDays>
              <HomeCalenderDay>
                <strong>28</strong>
                <p>Domingo</p>
              </HomeCalenderDay>
              <HomeCalenderDay>
                <strong>29</strong>
                <p>Segunda</p>
              </HomeCalenderDay>
              <HomeCalenderDay>
                <strong>30</strong>
                <p>Terça</p>
              </HomeCalenderDay>
              <HomeCalenderDay>
                <strong>31</strong>
                <p>Quarta</p>
              </HomeCalenderDay>
              <HomeCalenderDay>
                <strong>01</strong>
                <p>Quinta</p>
              </HomeCalenderDay>
              <HomeCalenderDay>
                <strong>02</strong>
                <p>Sexta</p>
              </HomeCalenderDay>
              <HomeCalenderDay>
                <strong>03</strong>
                <p>Sabado</p>
              </HomeCalenderDay>
            </HomeCalenderHeaderDays>
          </HomeCalenderHeader>

          <HomeCalenderContent>
            <HomePlaces>
              <p>Lab - 10</p>
            </HomePlaces>
            <HomeClassesContainer>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                
                </HomeClass >
                <HomeClass period="night">
                 
                </HomeClass >
              </HomeClasses>
            </HomeClassesContainer>
          </HomeCalenderContent>
          <HomeDivider />
          <HomeCalenderContent>
            <HomePlaces>
              <p>Lab - 10</p>
            </HomePlaces>
            <HomeClassesContainer>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                  <p>Chile</p>
                  <sup>Desenvolvim...</sup>
                </HomeClass >
                <HomeClass period="night">
                  <p>Bruna</p>
                  <sup>Logistica</sup>
                </HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                
                </HomeClass >
                <HomeClass period="night">
                 
                </HomeClass >
              </HomeClasses>
            </HomeClassesContainer>
          </HomeCalenderContent>
          <HomeDivider />
          <HomeCalenderContent>
            <HomePlaces>
              <p>Lab - 10</p>
            </HomePlaces>
            <HomeClassesContainer>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                
                </HomeClass >
                <HomeClass period="night">
                 
                </HomeClass >
              </HomeClasses>
            </HomeClassesContainer>
          </HomeCalenderContent>
          <HomeDivider />
          <HomeCalenderContent>
            <HomePlaces>
              <p>Lab - 10</p>
            </HomePlaces>
            <HomeClassesContainer>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                
                </HomeClass >
                <HomeClass period="night">
                 
                </HomeClass >
              </HomeClasses>
            </HomeClassesContainer>
          </HomeCalenderContent>
          <HomeDivider />
          <HomeCalenderContent>
            <HomePlaces>
              <p>Lab - 10</p>
            </HomePlaces>
            <HomeClassesContainer>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                
                </HomeClass >
                <HomeClass period="night">
                 
                </HomeClass >
              </HomeClasses>
            </HomeClassesContainer>
          </HomeCalenderContent>
          <HomeDivider />
          <HomeCalenderContent>
            <HomePlaces>
              <p>Lab - 10</p>
            </HomePlaces>
            <HomeClassesContainer>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon">
                
                </HomeClass >
                <HomeClass period="night">
                 
                </HomeClass >
              </HomeClasses>
            </HomeClassesContainer>
          </HomeCalenderContent>
          <HomeDivider />

          {/* <HomeCalenderContent>
            <HomePlaces>
              <p>Lab - 10</p>
            </HomePlaces>
            <HomeClassesContainer>
              <HomeClasses>
                <HomeClass period="mornig" ><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"><p>Chile</p></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"><p>Chile</p></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"><p>Chile</p></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"><p>Chile</p></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"><p>Chile</p></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
            </HomeClassesContainer>
          </HomeCalenderContent>
          <HomeDivider />
          <HomeCalenderContent>
            <HomePlaces>
              <p>Lab - 10</p>
            </HomePlaces>
            <HomeClassesContainer>
              <HomeClasses>
                <HomeClass period="mornig" ><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"><p>Chile</p></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"><p>Chile</p></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"><p>Chile</p></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"><p>Chile</p></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"><p>Chile</p></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
            </HomeClassesContainer>
          </HomeCalenderContent>
          <HomeDivider />
          <HomeCalenderContent>
            <HomePlaces>
              <p>Lab - 10</p>
            </HomePlaces>
            <HomeClassesContainer>
              <HomeClasses>
                <HomeClass period="mornig" ><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"><p>Chile</p></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"><p>Chile</p></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"><p>Chile</p></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"><p>Chile</p></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"><p>Chile</p></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
            </HomeClassesContainer>
          </HomeCalenderContent>
          <HomeDivider />
          <HomeCalenderContent>
            <HomePlaces>
              <p>Lab - 10</p>
            </HomePlaces>
            <HomeClassesContainer>
              <HomeClasses>
                <HomeClass period="mornig" ><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"><p>Chile</p></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"><p>Chile</p></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"><p>Chile</p></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"><p>Chile</p></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"><p>Chile</p></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
            </HomeClassesContainer>
          </HomeCalenderContent>
          <HomeDivider />
          <HomeCalenderContent>
            <HomePlaces>
              <p>Lab - 10</p>
            </HomePlaces>
            <HomeClassesContainer>
              <HomeClasses>
                <HomeClass period="mornig" ><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"><p>Chile</p></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"><p>Chile</p></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"><p>Chile</p></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"><p>Chile</p></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"><p>Chile</p></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
            </HomeClassesContainer>
          </HomeCalenderContent>
          <HomeDivider />
          <HomeCalenderContent>
            <HomePlaces>
              <p>Lab - 10</p>
            </HomePlaces>
            <HomeClassesContainer>
              <HomeClasses>
                <HomeClass period="mornig" ><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"><p>Chile</p></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"><p>Chile</p></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"><p>Chile</p></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"><p>Chile</p></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"><p>Chile</p></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
            </HomeClassesContainer>
          </HomeCalenderContent>
          <HomeDivider />
          <HomeCalenderContent>
            <HomePlaces>
              <p>Lab - 10</p>
            </HomePlaces>
            <HomeClassesContainer>
              <HomeClasses>
                <HomeClass period="mornig" >
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass >
                <HomeClass period="afternoon"><p>Chile</p></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"><p>Chile</p></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"><p>Chile</p></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"><p>Chile</p></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
              <HomeClasses>
                <HomeClass period="mornig"><p>Caio</p></HomeClass >
                <HomeClass period="afternoon"><p>Chile</p></HomeClass >
                <HomeClass period="night"><p>Bruna</p></HomeClass >
              </HomeClasses>
            </HomeClassesContainer>
          </HomeCalenderContent> */}
        </HomeCalenderContainer>
      </HomeContent>
    </HomeContainer>
  );
}
