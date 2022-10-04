import * as Dialog from "@radix-ui/react-dialog";
import { Check, X } from "phosphor-react";
import { useContext } from "react";
import Resumo from "../../../../assets/Resumo.svg";
import { ObjectsContext } from "../../../../Contexts/ObjectsContext";
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


interface ModalCreateNewClassProps {
  name: string;
}

export function ModalCreateNewClass({ name }: ModalCreateNewClassProps) {
  const { courses, placesList } = useContext(ObjectsContext)


  const courseFiltedByType = courses.filter((course) => {
    if (course.tipoCurso.toLowerCase() == name.toLowerCase()){
      return course
    } 
    if(name == 'customizável'){
      return course
    }
  })
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseButton>
          <X size={35} />
        </CloseButton>

        <Dialog.Title>Aula {name}</Dialog.Title>
        <ModalCreateClassContent>
          <ModalCreateClassContentLine>
            <label htmlFor="">Curso</label>
            <select name="" id="">
              {courseFiltedByType.map((course) => {
                return (
                  <option key={course.id} value="">{course.nome}</option>
                )
              })}

            </select>
          </ModalCreateClassContentLine>

          <ModalCreateClassContentLine>
            <label htmlFor="">Unidade Curricular</label>
            <select name="" id="">
              <option value="">Selecione unidade curricular</option>
            </select>
          </ModalCreateClassContentLine>

          <ModalCreateClassContentLine>
            <label htmlFor="">Código da turma</label>
            <input type="text" placeholder="Digite o código da turma" />
          </ModalCreateClassContentLine>

          <ModalCreateClassContentLines>
            <ModalCreateClassContentCollum>
              <label htmlFor="">Periodo</label>
              <select name="" id="">
                <option value="">Selecione um periodo</option>
              </select>
            </ModalCreateClassContentCollum>
            <ModalCreateClassContentCollum>
              <label htmlFor="">Data inicio</label>
              <input type="date" />
            </ModalCreateClassContentCollum>
          </ModalCreateClassContentLines>

          <ModalCreateClassDays>
            <span onClick={() => console.log(courses)}>
              <label>Dom</label>
              <HomeCheckBox>
                <HomeCheckBoxIndicator>
                  <Check size={20} weight="bold" color="#fff" />
                </HomeCheckBoxIndicator>
              </HomeCheckBox>
            </span>
            <span>
              <label>Seg</label>
              <HomeCheckBox>
                <HomeCheckBoxIndicator>
                  <Check size={20} weight="bold" color="#fff" />
                </HomeCheckBoxIndicator>
              </HomeCheckBox>
            </span>
            <span>
              <label>Ter</label>
              <HomeCheckBox>
                <HomeCheckBoxIndicator>
                  <Check size={20} weight="bold" color="#fff" />
                </HomeCheckBoxIndicator>
              </HomeCheckBox>
            </span>
            <span>
              <label>Qua</label>
              <HomeCheckBox>
                <HomeCheckBoxIndicator>
                  <Check size={20} weight="bold" color="#fff" />
                </HomeCheckBoxIndicator>
              </HomeCheckBox>
            </span>
            <span>
              <label>Qui</label>
              <HomeCheckBox>
                <HomeCheckBoxIndicator>
                  <Check size={20} weight="bold" color="#fff" />
                </HomeCheckBoxIndicator>
              </HomeCheckBox>
            </span>
            <span>
              <label>Sex</label>
              <HomeCheckBox>
                <HomeCheckBoxIndicator>
                  <Check size={20} weight="bold" color="#fff" />
                </HomeCheckBoxIndicator>
              </HomeCheckBox>
            </span>
            <span>
              <label>Sab</label>
              <HomeCheckBox>
                <HomeCheckBoxIndicator>
                  <Check size={20} weight="bold" color="#fff" />
                </HomeCheckBoxIndicator>
              </HomeCheckBox>
            </span>
          </ModalCreateClassDays>

          <ModalCreateClassContentLines>
            <ModalCreateClassContentCollum>
              <label htmlFor="">Professor</label>
              <select name="" id="">
                <option value="">Selecione o professor</option>
              </select>
            </ModalCreateClassContentCollum>

            <ModalCreateClassContentCollum>
              <label htmlFor="">Hora(s) por dia</label>
              <input type="number" placeholder="Digite as horas" />
            </ModalCreateClassContentCollum>
          </ModalCreateClassContentLines>

          <ModalCreateClassContentLine>
            <label htmlFor="">Ambiente</label>
            <select placeholder="Digite o código da turma" >
            {placesList.map((place) => {
              return <option key={place.id}>{place.nome}</option>;
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
