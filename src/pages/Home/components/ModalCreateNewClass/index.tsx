import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import Resumo from "../../../../assets/Resumo.svg";
import {
  CloseButton,
  Content,
  ModalCreateClassContent,
  ModalCreateClassContentCollum,
  ModalCreateClassContentLine,
  ModalCreateClassContentLines,
  ModalCreateClassDays,
  ModalCreateClassSumarryContent,
  Overlay,
} from "./style";

interface ModalCreateNewClassProps {
  name: string
}

export function ModalCreateNewClass({name} : ModalCreateNewClassProps) {
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
              <option value="">Selecione um curso</option>
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
            <span>
              <label>Dom</label>
              <input type="checkbox" />
            </span>
            <span>
              <label>Seg</label>
              <input type="checkbox" />
            </span>
            <span>
              <label>Ter</label>
              <input type="checkbox" />
            </span>
            <span>
              <label>Qua</label>
              <input type="checkbox" />
            </span>
            <span>
              <label>Qui</label>
              <input type="checkbox" />
            </span>
            <span>
              <label>Sex</label>
              <input type="checkbox" />
            </span>
            <span>
              <label>Sab</label>
              <input type="checkbox" />
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

          <button>Criar</button>
        </ModalCreateClassContent>
      </Content>
    </Dialog.Portal>
  );
}
